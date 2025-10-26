import React, { useCallback, useMemo, useRef, useState } from 'react';
import { ImageCompressor } from '../lib/images/imageCompressor';
import { ImageStore } from '../lib/images/imageStore';
import { initTurndown, isMarkdown } from '../lib/paste';

export function Editor({
  value,
  onChange,
  onToast,
  imageStore,
  imageCompressor,
  charCount
}: {
  value: string;
  onChange: (v: string) => void;
  onToast: (msg: string, type?: 'success' | 'error') => void;
  imageStore: ImageStore;
  imageCompressor: ImageCompressor;
  charCount: number;
}) {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const turndown = useMemo(() => initTurndown(), []);

  const insertAtCursor = useCallback((text: string) => {
    const el = textareaRef.current;
    if (!el) {
      onChange((value ?? '') + text);
      return;
    }
    const start = el.selectionStart ?? value.length;
    const end = el.selectionEnd ?? value.length;
    const newVal = value.substring(0, start) + text + value.substring(end);
    onChange(newVal);
    setTimeout(() => {
      try {
        el.focus();
        const pos = start + text.length;
        el.selectionStart = el.selectionEnd = pos;
      } catch {}
    });
  }, [onChange, value]);

  const onFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') onChange(reader.result);
    };
    reader.onerror = () => onToast('文件读取失败', 'error');
    reader.readAsText(file);
    e.currentTarget.value = '';
  }, [onChange, onToast]);

  const handleImageUpload = useCallback(async (file: File) => {
    if (!file.type.startsWith('image/')) {
      onToast('请上传图片文件', 'error');
      return;
    }
    const maxSize = 10 * 1024 * 1024;
    if (file.size > maxSize) {
      onToast('图片大小不能超过 10MB', 'error');
      return;
    }
    try {
      const compressed = await imageCompressor.compress(file);
      const id = `img-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
      await imageStore.saveImage({ id, blob: compressed, name: file.name.replace(/\.[^/.]+$/, ''), originalSize: file.size, compressedSize: compressed.size, createdAt: Date.now(), mimeType: (compressed as any).type || file.type });
      insertAtCursor(`![${file.name}](img://${id})`);
      onToast('图片已保存并插入', 'success');
    } catch (e: any) {
      onToast(`图片处理失败: ${e?.message || e}`, 'error');
    }
  }, [imageCompressor, imageStore, insertAtCursor, onToast]);

  const onPaste = useCallback(async (e: React.ClipboardEvent<HTMLTextAreaElement>) => {
    const cd = e.clipboardData;
    if (cd && cd.files && cd.files.length > 0) {
      const file = cd.files[0];
      if (file && file.type.startsWith('image/')) {
        e.preventDefault();
        await handleImageUpload(file);
        return;
      }
    }
    const htmlData = cd?.getData('text/html') ?? '';
    const textData = cd?.getData('text/plain') ?? '';
    if (textData && /^\[Image\s*#?\d*\]$/i.test(textData.trim())) {
      e.preventDefault();
      onToast('检测到图片占位文本，请直接粘贴图片或拖拽文件', 'error');
      return;
    }
    if (htmlData && htmlData.trim() !== '' && !isMarkdown(textData)) {
      try {
        e.preventDefault();
        const md = turndown.turndown(htmlData);
        insertAtCursor(md);
        onToast('已将 HTML 转为 Markdown', 'success');
      } catch {
        // fallback
      }
    }
  }, [handleImageUpload, insertAtCursor, onToast, turndown]);

  const onDrop = useCallback(async (e: React.DragEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer?.files?.length) {
      const file = e.dataTransfer.files[0];
      if (file && file.type.startsWith('image/')) {
        await handleImageUpload(file);
        return;
      }
    }
  }, [handleImageUpload]);

  const onDragOver = useCallback((e: React.DragEvent<HTMLTextAreaElement>) => { e.preventDefault(); setDragOver(true); }, []);
  const onDragEnter = useCallback((e: React.DragEvent<HTMLTextAreaElement>) => { e.preventDefault(); setDragOver(true); }, []);
  const onDragLeave = useCallback((e: React.DragEvent<HTMLTextAreaElement>) => { e.preventDefault(); setDragOver(false); }, []);

  return (
    <div style={{display: 'flex', flexDirection: 'column', borderRight: '1px solid #eee'}}>
      <div style={{padding: 12}}>
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onPaste={onPaste}
          onDrop={onDrop}
          onDragOver={onDragOver}
          onDragEnter={onDragEnter}
          onDragLeave={onDragLeave}
          spellCheck={false}
          placeholder="# 在此粘贴或输入 Markdown 内容"
          style={{width: '100%', height: 'calc(100vh - 120px)', border: '1px solid #eee', outline: 'none', padding: 16, borderRadius: 8, fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas', fontSize: 14, lineHeight: 1.6, background: dragOver ? '#f4f8ff' : '#fff'}}
        />
      </div>
      <div style={{display: 'flex', alignItems: 'center', padding: '8px 12px', borderTop: '1px solid #eee', gap: 12, justifyContent: 'space-between'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 8}}>
          <label style={{display: 'inline-flex', alignItems: 'center', gap: 8, cursor: 'pointer'}}>
            <input type="file" accept=".md,.markdown" onChange={onFileChange} style={{display: 'none'}} />
            <span>上传 MD 文件</span>
          </label>
          <div style={{fontSize: 12, color: '#999'}}>支持 .md / .markdown 文件；支持从飞书、Notion、Word 等直接粘贴，自动转为 Markdown</div>
        </div>
        <div style={{fontSize: 12, color: '#666'}}>{charCount} 字符</div>
      </div>
    </div>
  );
}


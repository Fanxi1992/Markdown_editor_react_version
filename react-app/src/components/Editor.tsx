import React, { useCallback, useMemo, useRef } from 'react';
import { ImageCompressor } from '../lib/images/imageCompressor';
import { ImageStore } from '../lib/images/imageStore';

export function Editor({
  value,
  onChange,
  onToast,
  imageStore,
  imageCompressor
}: {
  value: string;
  onChange: (v: string) => void;
  onToast: (msg: string, type?: 'success' | 'error') => void;
  imageStore: ImageStore;
  imageCompressor: ImageCompressor;
}) {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

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
    // restore caret after state update
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
    try {
      const compressed = await imageCompressor.compress(file);
      const id = `img-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
      await imageStore.saveImage({ id, blob: compressed, name: file.name.replace(/\.[^/.]+$/, ''), originalSize: file.size, compressedSize: compressed.size, createdAt: Date.now(), mimeType: (compressed as any).type || file.type });
      insertAtCursor(`![${file.name}](${`img://${id}`})`);
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
    // Otherwise, default behavior: allow paste text/markdown
  }, [handleImageUpload]);

  const onDrop = useCallback(async (e: React.DragEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    if (e.dataTransfer?.files?.length) {
      const file = e.dataTransfer.files[0];
      if (file && file.type.startsWith('image/')) {
        await handleImageUpload(file);
        return;
      }
    }
  }, [handleImageUpload]);

  return (
    <div style={{display: 'flex', flexDirection: 'column', borderRight: '1px solid #eee'}}>
      <div style={{padding: 12}}>
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onPaste={onPaste}
          onDrop={onDrop}
          spellCheck={false}
          placeholder="# 在此粘贴或输入 Markdown 内容"
          style={{width: '100%', height: 'calc(100vh - 80px)', border: 'none', outline: 'none', padding: 16, fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas', fontSize: 14, lineHeight: 1.6}}
        />
      </div>
      <div style={{display: 'flex', alignItems: 'center', padding: '8px 12px', borderTop: '1px solid #eee', gap: 8}}>
        <label style={{display: 'inline-flex', alignItems: 'center', gap: 8, cursor: 'pointer'}}>
          <input type="file" accept=".md,.markdown" onChange={onFileChange} style={{display: 'none'}} />
          <span>上传 MD 文件</span>
        </label>
      </div>
    </div>
  );
}

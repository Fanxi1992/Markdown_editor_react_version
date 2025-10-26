import React, { useCallback, useMemo, useRef, useState } from 'react';
import { ImageCompressor } from '../lib/images/imageCompressor';
import { ImageStore } from '../lib/images/imageStore';
import { initTurndown, isMarkdown, isIDEFormattedHTML } from '../lib/paste';

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

    // 提醒：检测到本地图片路径（HTML 或 Markdown），不阻止粘贴
    try {
      const localInHtml = !!htmlData && (/file:\/\//i.test(htmlData) || /src\s*=\s*["']\s*file:/i.test(htmlData));
      const localInMd = (() => {
        if (!textData) return false;
        const rx = /!\[[^\]]*\]\(([^)\s]+)(?:\s+\"[^\"]*\")?\)/g;
        let m: RegExpExecArray | null;
        while ((m = rx.exec(textData)) !== null) {
          const url = m[1] || '';
          const isRemote = /^(https?:|data:|img:\/\/)/i.test(url);
          const hasImageExt = /\.(png|jpe?g|gif|svg|webp|bmp|tiff?)(?:$|\?)/i.test(url);
          const looksLocalPrefix = /^(file:\/\/|[a-zA-Z]:[\\\/]|\.\.?[\\\/]|\/.+?)/.test(url);
          if (!isRemote && (looksLocalPrefix || hasImageExt)) return true;
        }
        return false;
      })();
      if (localInHtml || localInMd) {
        onToast('本地图片请直接拖拽文件到编辑器', 'error');
      }
    } catch {}
    if (textData && /^\[Image\s*#?\d*\]$/i.test(textData.trim())) {
      e.preventDefault();
      onToast('检测到图片占位文本，请直接粘贴图片或拖拽文件', 'error');
      return;
    }
    // IDE/代码编辑器 HTML：直接保留纯文本（避免过度转换）
    if (htmlData && htmlData.trim() !== '' && isIDEFormattedHTML(htmlData, textData)) {
      return; // 使用浏览器默认粘贴行为
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
    <div className="editor-panel">
      <div className="markdown-input-container">
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
          placeholder="# 在此粘贴或输入 Markdown 内容\n\n## 功能亮点\n\n- 实时预览，所见即所得\n- 多套样式，一键切换\n- 支持从飞书、Notion、Word 直接粘贴\n- 粘贴/拖拽图片自动上传与压缩\n- 一键复制到公众号\n\n提示：可直接粘贴图片或拖拽图片文件到编辑框"
          className={["markdown-input", dragOver ? 'drag-over' : ''].filter(Boolean).join(' ')}
        />
      </div>
      <div className="editor-footer">
        <div className="upload-section">
          <label className="upload-label">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="17 8 12 3 7 8"></polyline>
              <line x1="12" y1="3" x2="12" y2="15"></line>
            </svg>
            <span>上传 MD 文件</span>
            <input type="file" accept=".md,.markdown" onChange={onFileChange} style={{display: 'none'}} />
          </label>
          <div className="upload-hints">
            <span className="upload-hint">支持 .md / .markdown 文件</span>
            <span className="feishu-hint">支持从飞书、Notion、Word 直接粘贴，自动转为 Markdown</span>
          </div>
        </div>
        <div className="char-count">{charCount} 字符</div>
      </div>
    </div>
  );
}


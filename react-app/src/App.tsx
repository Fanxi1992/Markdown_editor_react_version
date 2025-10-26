import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Editor } from './components/Editor';
import { Preview } from './components/Preview';
import { Toolbar } from './components/Toolbar';
import { Toast } from './components/Toast';
import { initMarkdown } from './lib/markdown';
import { applyInlineStyles, wrapWithContainer } from './lib/htmlStyles';
import { STYLES } from './lib/styles';
import { usePreferences } from './state/usePreferences';
import { ImageStore } from './lib/images/imageStore';
import { ImageCompressor } from './lib/images/imageCompressor';
import { resolveImageProtocol } from './lib/images/protocol';
import { groupConsecutiveImages } from './lib/images/grouping';

function App() {
  const { currentStyle, setCurrentStyle, starredStyles, toggleStarStyle } = usePreferences();
  const [markdownInput, setMarkdownInput] = useState<string>('');
  const [renderedContent, setRenderedContent] = useState<string>('');
  const [toast, setToast] = useState<{show: boolean; message: string; type?: 'success' | 'error'}>({ show: false, message: '' });
  const [copySuccess, setCopySuccess] = useState(false);

  const md = useMemo(() => initMarkdown(), []);
  const imageStoreRef = useRef(new ImageStore());
  const imageCompressorRef = useRef(new ImageCompressor({ maxWidth: 1920, maxHeight: 1920, quality: 0.85 }));
  const imageURLMapRef = useRef<Map<string, string>>(new Map());

  useEffect(() => {
    imageStoreRef.current.init().catch(() => {
      setToast({ show: true, message: '图片存储系统初始化失败', type: 'error' });
      setTimeout(() => setToast({ show: false, message: '' }), 3000);
    });
  }, []);

  // Render pipeline (simplified baseline)
  useEffect(() => {
    let cancelled = false;
    (async () => {
      if (!markdownInput.trim()) {
        setRenderedContent('');
        return;
      }

      // 1) Markdown -> HTML
      const baseHtml = md.render(markdownInput);

      // 2) Replace img:// with blob: from IndexedDB
      const { html: withImages, usedIds, newUrls } = await resolveImageProtocol(baseHtml, imageStoreRef.current, imageURLMapRef.current);

      // Revoke unused ObjectURLs
      const oldMap = imageURLMapRef.current;
      // Assign the new map instance containing current urls
      const nextMap = new Map<string, string>();
      newUrls.forEach((url, id) => nextMap.set(id, url));
      oldMap.forEach((url, id) => {
        if (!usedIds.has(id)) {
          try { URL.revokeObjectURL(url); } catch {}
        }
      });
      imageURLMapRef.current = nextMap;

      // 3) Group consecutive images to CSS grid for preview
      const parser = new DOMParser();
      const doc = parser.parseFromString(withImages, 'text/html');
      groupConsecutiveImages(doc);

      // 4) Apply style mapping
      const styled = applyInlineStyles(doc.body.innerHTML, STYLES[currentStyle].styles);
      const wrapped = wrapWithContainer(styled, STYLES[currentStyle].styles.container);

      if (!cancelled) setRenderedContent(wrapped);
    })();
    return () => { cancelled = true; };
  }, [markdownInput, currentStyle, md]);

  return (
    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'auto 1fr', height: '100vh'}}>
      <Toolbar
        styleKey={currentStyle}
        setStyleKey={setCurrentStyle}
        starred={starredStyles}
        toggleStar={toggleStarStyle}
        canCopy={!!renderedContent}
        onCopy={() => {
          // Placeholder: copy logic implemented later
          if (!renderedContent) return;
          navigator.clipboard.writeText(renderedContent).then(() => {
            setCopySuccess(true);
            setToast({ show: true, message: '已复制（临时为纯文本/HTML源码）', type: 'success' });
            setTimeout(() => setCopySuccess(false), 2000);
            setTimeout(() => setToast({ show: false, message: '' }), 3000);
          }).catch(() => {
            setToast({ show: true, message: '复制失败', type: 'error' });
            setTimeout(() => setToast({ show: false, message: '' }), 3000);
          });
        }}
        charCount={markdownInput.length}
      />

      <Editor
        value={markdownInput}
        onChange={setMarkdownInput}
        onToast={(msg, type) => {
          setToast({ show: true, message: msg, type });
          setTimeout(() => setToast({ show: false, message: '' }), 3000);
        }}
        imageStore={imageStoreRef.current}
        imageCompressor={imageCompressorRef.current}
      />

      <Preview html={renderedContent} />

      <Toast open={toast.show} type={toast.type}>
        {toast.message}
      </Toast>
    </div>
  );
}

export default App;

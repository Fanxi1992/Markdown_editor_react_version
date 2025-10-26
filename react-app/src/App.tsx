import React, { useEffect, useMemo, useState } from 'react';
import { Editor } from './components/Editor';
import { Preview } from './components/Preview';
import { Toolbar } from './components/Toolbar';
import { Toast } from './components/Toast';
import { initMarkdown } from './lib/markdown';
import { applyInlineStyles, wrapWithContainer } from './lib/htmlStyles';
import { STYLES } from './lib/styles';
import { usePreferences } from './state/usePreferences';

function App() {
  const { currentStyle, setCurrentStyle, starredStyles, toggleStarStyle } = usePreferences();
  const [markdownInput, setMarkdownInput] = useState<string>('');
  const [renderedContent, setRenderedContent] = useState<string>('');
  const [toast, setToast] = useState<{show: boolean; message: string; type?: 'success' | 'error'}>({ show: false, message: '' });
  const [copySuccess, setCopySuccess] = useState(false);

  const md = useMemo(() => initMarkdown(), []);

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

      // 2) Apply style mapping (no image protocol handling yet in baseline)
      const styled = applyInlineStyles(baseHtml, STYLES[currentStyle].styles);
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
      />

      <Preview html={renderedContent} />

      <Toast open={toast.show} type={toast.type}>
        {toast.message}
      </Toast>
    </div>
  );
}

export default App;


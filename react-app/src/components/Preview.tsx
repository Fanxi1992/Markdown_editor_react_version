import React from 'react';

export function Preview({ html }: { html: string }) {
  if (!html) {
    return (
      <div className="preview-content">
        <div className="preview-container">
          <div style={{
            border: '1px dashed var(--color-border)',
            borderRadius: 8,
            padding: 24,
            color: 'var(--color-secondary)',
            textAlign: 'center'
          }}>
            <div style={{fontSize: 48, opacity: 0.2, lineHeight: 1}}>📝</div>
            <div style={{marginTop: 8}}>开始编辑</div>
            <div style={{fontSize: 12, color: 'var(--color-tertiary)'}}>左侧输入 Markdown，右侧实时预览</div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="preview-content">
      <div className="preview-container" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}


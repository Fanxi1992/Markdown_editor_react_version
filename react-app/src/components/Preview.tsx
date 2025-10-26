import React from 'react';

export function Preview({ html }: { html: string }) {
  if (!html) {
    return (
      <div style={{padding: 16}}>
        <div style={{
          border: '1px dashed #e5e7eb',
          borderRadius: 8,
          padding: 24,
          color: '#666',
          textAlign: 'center'
        }}>
          <div style={{fontSize: 48, opacity: 0.2, lineHeight: 1}}>📄</div>
          <div style={{marginTop: 8}}>开始编辑</div>
          <div style={{fontSize: 12, color: '#999'}}>左侧输入 Markdown，右侧实时预览</div>
        </div>
      </div>
    );
  }
  return (
    <div style={{padding: 16, overflow: 'auto'}}>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}

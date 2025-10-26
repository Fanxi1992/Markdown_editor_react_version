import React from 'react';

export function Preview({ html }: { html: string }) {
  if (!html) {
    return (
      <div style={{padding: 16}}>
        <div style={{color: '#666'}}>开始编辑，右侧将实时预览</div>
      </div>
    );
  }
  return (
    <div style={{padding: 16, overflow: 'auto'}}>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}


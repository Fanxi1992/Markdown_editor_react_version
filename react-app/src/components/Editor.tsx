import React, { useCallback } from 'react';

export function Editor({
  value,
  onChange,
  onToast
}: {
  value: string;
  onChange: (v: string) => void;
  onToast: (msg: string, type?: 'success' | 'error') => void;
}) {
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

  return (
    <div style={{display: 'flex', flexDirection: 'column', borderRight: '1px solid #eee'}}>
      <div style={{padding: 12}}>
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
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


import React from 'react';
import { STYLES } from '../lib/styles';

export function Toolbar({
  styleKey,
  setStyleKey,
  starred,
  toggleStar,
  canCopy,
  onCopy,
  charCount
}: {
  styleKey: keyof typeof STYLES;
  setStyleKey: (k: keyof typeof STYLES) => void;
  starred: string[];
  toggleStar: (k: keyof typeof STYLES) => void;
  canCopy: boolean;
  onCopy: () => void;
  charCount: number;
}) {
  return (
    <div style={{gridColumn: '1 / -1', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 12px', borderBottom: '1px solid #eee'}}>
      <div style={{display: 'flex', gap: 8, alignItems: 'center', overflowX: 'auto'}}>
        <div style={{fontSize: 12, color: '#999'}}>样式</div>
        {Object.entries(STYLES).map(([key, cfg]) => (
          <button
            key={key}
            onClick={() => setStyleKey(key as keyof typeof STYLES)}
            style={{
              padding: '6px 10px',
              border: '1px solid',
              borderColor: styleKey === key ? '#06f' : '#eee',
              background: styleKey === key ? '#06f' : '#fff',
              color: styleKey === key ? '#fff' : '#333',
              borderRadius: 6,
              cursor: 'pointer'
            }}
            title={cfg.name}
          >
            {cfg.name}
            {starred.includes(key) ? ' ★' : ''}
          </button>
        ))}
        <button
          onClick={() => toggleStar(styleKey)}
          style={{padding: '6px 10px', border: '1px solid #eee', background: '#fff', borderRadius: 6, cursor: 'pointer'}}
          title="收藏当前样式"
        >
          {starred.includes(styleKey) ? '取消收藏' : '收藏样式'}
        </button>
      </div>

      <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
        <div style={{fontSize: 12, color: '#666'}}>{charCount} 字符</div>
        <button
          onClick={onCopy}
          disabled={!canCopy}
          style={{
            padding: '6px 12px',
            border: '1px solid #06f',
            background: canCopy ? '#06f' : '#8fb9ff',
            color: '#fff',
            borderRadius: 6,
            cursor: canCopy ? 'pointer' : 'not-allowed'
          }}
        >
          复制到公众号
        </button>
      </div>
    </div>
  );
}


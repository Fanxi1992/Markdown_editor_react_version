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
  const recommended = new Set(['nikkei', 'wechat-anthropic', 'wechat-ft', 'wechat-nyt', 'latepost-depth', 'wechat-tech']);
  return (
    <div style={{gridColumn: '1 / -1', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 12px', borderBottom: '1px solid #eee', background: '#fff'}}>
      <div style={{display: 'flex', alignItems: 'center', gap: 8, overflowX: 'auto', paddingBottom: 2}}>
        <div style={{fontSize: 12, color: '#999', flex: '0 0 auto'}}>选择样式</div>
        {Object.entries(STYLES).map(([key, cfg]) => {
          const active = styleKey === (key as keyof typeof STYLES);
          const isStar = starred.includes(key);
          const isRec = recommended.has(key);
          return (
            <div key={key} style={{position: 'relative', flex: '0 0 auto'}}>
              <button
                onClick={() => setStyleKey(key as keyof typeof STYLES)}
                style={{
                  padding: '6px 10px',
                  border: '1px solid',
                  borderColor: active ? '#06f' : '#e6e6e6',
                  background: active ? '#06f' : '#fff',
                  color: active ? '#fff' : '#333',
                  borderRadius: 999,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap'
                }}
                title={cfg.name}
              >
                {cfg.name}
              </button>
              {isRec && (
                <span style={{position: 'absolute', top: -6, right: -6, fontSize: 10}}>✨</span>
              )}
              {isStar && (
                <span style={{position: 'absolute', bottom: -6, right: -6, fontSize: 10}}>★</span>
              )}
            </div>
          );
        })}
        <button
          onClick={() => toggleStar(styleKey)}
          style={{padding: '6px 10px', border: '1px solid #eee', background: '#fff', borderRadius: 999, cursor: 'pointer'}}
          title="收藏当前样式"
        >
          {starred.includes(styleKey) ? '取消收藏' : '收藏样式'}
        </button>
      </div>

      <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
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

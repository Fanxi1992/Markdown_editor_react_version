import React from 'react';
import { STYLES } from '../lib/styles';

export function Toolbar({
  styleKey,
  setStyleKey,
  starred,
}: {
  styleKey: keyof typeof STYLES;
  setStyleKey: (k: keyof typeof STYLES) => void;
  starred: string[];
}) {
  const recommended = new Set(['nikkei', 'wechat-anthropic', 'wechat-ft', 'wechat-nyt', 'latepost-depth', 'wechat-tech']);
  return (
    <section className="styles-section">
      <div className="styles-container">
        <div className="styles-label">选择样式</div>
        <div className="styles-scroll-wrapper">
          <div className="styles-list">
            {Object.entries(STYLES).map(([key, cfg]) => {
              const active = styleKey === (key as keyof typeof STYLES);
              const isStar = starred.includes(key);
              const isRec = recommended.has(key);
              return (
                <div
                  key={key}
                  className={[
                    'style-card',
                    active ? 'active' : '',
                    isStar ? 'starred' : '',
                    isRec ? 'recommended' : ''
                  ].filter(Boolean).join(' ')}
                  onClick={() => setStyleKey(key as keyof typeof STYLES)}
                  title={cfg.name}
                >
                  {cfg.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}


import React from 'react';

export function PreviewHeader({
  canCopy,
  onCopy,
  isStarred,
  onToggleStar
}: {
  canCopy: boolean;
  onCopy: () => void;
  isStarred: boolean;
  onToggleStar: () => void;
}) {
  return (
    <div className="preview-header">
      <div className="preview-title">预览</div>
      <div className="preview-actions">
        <button
          className={["star-btn", isStarred ? 'active' : ''].filter(Boolean).join(' ')}
          onClick={onToggleStar}
          title={isStarred ? '取消收藏当前样式' : '收藏当前样式'}
          aria-label={isStarred ? '取消收藏当前样式' : '收藏当前样式'}
        >
          ★
        </button>
        <button className="copy-btn" onClick={onCopy} disabled={!canCopy}>
          复制到公众号
        </button>
      </div>
    </div>
  );
}


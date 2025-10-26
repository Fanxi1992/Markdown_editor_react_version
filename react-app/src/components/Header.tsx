import React from 'react';

export function Header() {
  return (
    <header className="header">
      <div className="logo">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20" aria-hidden>
          <rect width="32" height="32" rx="6" fill="#0066FF"/>
          <path d="M6 10 L6 22 L9 22 L9 15 L13 20 L17 15 L17 22 L20 22 L20 10 L16 10 L13 14 L10 10 Z" fill="white"/>
          <rect x="6" y="24" width="20" height="2" rx="1" fill="white" opacity="0.7"/>
        </svg>
        <span>公众号排版器（React）</span>
        <span className="creator-info">Created by <a href="https://huasheng.ai" target="_blank" rel="noopener noreferrer">SF</a></span>
      </div>
      <a
        className="github-link"
        href="https://github.com/Fanxi1992/Markdown_editor_react_version"
        target="_blank"
        rel="noreferrer"
        title="查看源码"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      </a>
    </header>
  );
}

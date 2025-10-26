import React from 'react';

export function Header() {
  return (
    <div style={{
      gridColumn: '1 / -1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 16px',
      borderBottom: '1px solid #eee',
      background: '#fff'
    }}>
      <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
        <div style={{width: 24, height: 24, borderRadius: 6, background: '#06f'}} />
        <div style={{fontWeight: 700, color: '#222'}}>公众号排版器（React）</div>
        <div style={{fontSize: 12, color: '#999'}}>Created by You · React + Vite</div>
      </div>
      <a href="https://github.com" target="_blank" rel="noreferrer" title="GitHub"
         style={{color: '#666', textDecoration: 'none', border: '1px solid #eee', padding: '6px 10px', borderRadius: 6}}>
        GitHub
      </a>
    </div>
  );
}


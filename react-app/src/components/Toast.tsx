import React from 'react';

export function Toast({ open, type = 'success', children }: { open: boolean; type?: 'success' | 'error'; children: React.ReactNode }) {
  if (!open) return null;
  return (
    <div style={{
      position: 'fixed',
      bottom: 20,
      left: '50%',
      transform: 'translateX(-50%)',
      padding: '8px 12px',
      borderRadius: 8,
      background: type === 'success' ? 'rgba(0, 128, 0, 0.9)' : 'rgba(204, 0, 0, 0.9)',
      color: '#fff',
      fontSize: 14,
      zIndex: 9999
    }}>
      {children}
    </div>
  );
}


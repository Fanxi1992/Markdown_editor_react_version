import { useCallback, useEffect, useState } from 'react';
import { STYLES } from '../lib/styles';

const KEY_STYLE = 'currentStyle';
const KEY_STARRED = 'starredStyles';

export function usePreferences() {
  const [currentStyle, setCurrentStyleState] = useState<keyof typeof STYLES>('wechat-default');
  const [starredStyles, setStarredStyles] = useState<string[]>([]);

  useEffect(() => {
    try {
      const s = localStorage.getItem(KEY_STYLE);
      if (s && STYLES[s]) setCurrentStyleState(s as keyof typeof STYLES);
    } catch {}
    try {
      const f = localStorage.getItem(KEY_STARRED);
      if (f) setStarredStyles(JSON.parse(f));
    } catch {}
  }, []);

  useEffect(() => {
    try { localStorage.setItem(KEY_STYLE, String(currentStyle)); } catch {}
  }, [currentStyle]);

  useEffect(() => {
    try { localStorage.setItem(KEY_STARRED, JSON.stringify(starredStyles)); } catch {}
  }, [starredStyles]);

  const setCurrentStyle = useCallback((k: keyof typeof STYLES) => {
    setCurrentStyleState(k);
  }, []);

  const toggleStarStyle = useCallback((k: keyof typeof STYLES) => {
    setStarredStyles(prev => prev.includes(k) ? prev.filter(i => i !== k) : [...prev, k]);
  }, []);

  return { currentStyle, setCurrentStyle, starredStyles, toggleStarStyle };
}


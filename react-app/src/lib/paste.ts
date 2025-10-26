import TurndownService from 'turndown';

export function isMarkdown(text?: string) {
  if (!text) return false;
  const patterns = [
    /^#{1,6}\s+/m,
    /\*\*[^*]+\*\*/,
    /\*[^*\n]+\*/,
    /\[[^\]]+\]\([^)]+\)/,
    /!\[[^\]]*\]\([^)]+\)/,
    /^[\*\-\+]\s+/m,
    /^\d+\.\s+/m,
    /^>\s+/m,
    /`[^`]+`/,
    /```[\s\S]*?```/,
    /^\|.*\|$/m,
    /<!--.*?-->/,
    /^---+$/m
  ];
  return patterns.filter(p => p.test(text)).length >= 2 || text.includes('<!-- img:');
}

export function initTurndown() {
  const td = new TurndownService({
    headingStyle: 'atx',
    bulletListMarker: '-',
    codeBlockStyle: 'fenced',
    fence: '```',
    emDelimiter: '*',
    strongDelimiter: '**',
    linkStyle: 'inlined'
  });
  td.keep(['table', 'thead', 'tbody', 'tfoot', 'tr', 'th', 'td']);
  return td;
}

// Simple heuristics to detect IDE-like HTML is omitted for now; we rely on
// isMarkdown to bypass conversion when plain text already looks like MD.

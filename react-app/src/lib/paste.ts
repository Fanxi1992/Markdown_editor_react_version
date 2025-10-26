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
  // 保留常见结构
  td.keep(['thead', 'tbody', 'tfoot']);

  // 自定义：将简单 table 转为 Markdown 表格
  td.addRule('tableToMarkdown', {
    filter: (node) => (node as HTMLElement).tagName === 'TABLE',
    replacement: (_content, node) => {
      const table = node as HTMLTableElement;
      const rows = Array.from(table.querySelectorAll('tr'));
      if (rows.length === 0) return '\n\n';
      let out = '\n\n';
      rows.forEach((tr, idx) => {
        const cells = Array.from(tr.querySelectorAll('th,td'));
        const parts = cells.map((c) => (c.textContent || '').replace(/\s+/g, ' ').trim());
        if (parts.length === 0) return;
        out += `| ${parts.join(' | ')} |\n`;
        if (idx === 0) {
          out += `| ${parts.map(() => '---').join(' | ')} |\n`;
        }
      });
      return out + '\n';
    }
  });
  return td;
}

// Simple heuristics to detect IDE-like HTML is omitted for now; we rely on
// isMarkdown to bypass conversion when plain text already looks like MD.
export function isIDEFormattedHTML(htmlData?: string, textData?: string) {
  if (!htmlData) return false;
  // VS Code/编辑器常见特征
  const signatures: (RegExp | ((h: string) => boolean))[] = [
    /<meta\s+charset=['"]utf-8['"]/i,
    /<div\s+class=["']ace_line["']/i,
    /style=["'][^"']*font-family:\s*['"]?(?:Consolas|Monaco|Menlo|Courier)/i,
    (h: string) => {
      const hasDivSpan = /<(?:div|span)[\s>]/i.test(h);
      const hasSemantic = /<(?:p|h[1-6]|strong|em|ul|ol|li|blockquote|table|thead|tbody|tr|td|th)[\s>]/i.test(h);
      return hasDivSpan && !hasSemantic;
    },
    (h: string) => {
      const stripped = h.replace(/<[^>]+>/g, '').trim();
      return !!textData && stripped === textData.trim();
    }
  ];
  let matches = 0;
  for (const s of signatures) {
    if (typeof s === 'function') {
      if (s(htmlData)) matches++;
    } else if (s.test(htmlData)) {
      matches++;
    }
  }
  return matches >= 2; // 两个以上特征即视为 IDE 导出的 HTML
}

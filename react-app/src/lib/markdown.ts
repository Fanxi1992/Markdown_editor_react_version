import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import json from 'highlight.js/lib/languages/json';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('json', json);

export function initMarkdown() {
  const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: false,
    highlight: (str: string, lang?: string) => {
      try {
        if (lang && hljs.getLanguage(lang)) {
          const { value } = hljs.highlight(str, { language: lang });
          return `<pre style="margin:20px 0;padding:16px;background:#383a42;border-radius:8px;overflow:auto;line-height:1.6;">`+
                 `<code style=\"color:#abb2bf;font-family:'SF Mono',Monaco,'Cascadia Code',Consolas,monospace;\">${value}</code>`+
                 `</pre>`;
        }
      } catch { /* noop */ }
      const escaped = md.utils.escapeHtml(str);
      return `<pre style="margin:20px 0;padding:16px;background:#383a42;border-radius:8px;overflow:auto;line-height:1.6;">`+
             `<code style=\"color:#abb2bf;font-family:'SF Mono',Monaco,'Cascadia Code',Consolas,monospace;\">${escaped}</code>`+
             `</pre>`;
    }
  });
  return md;
}


import type { StyleMap } from './styles';

export function applyInlineStyles(html: string, style: StyleMap): string {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');

  Object.keys(style).forEach(selector => {
    if (selector === 'pre' || selector === 'code' || selector === 'pre code' || selector === 'container') return;
    const elements = doc.querySelectorAll(selector);
    elements.forEach((el) => {
      const current = el.getAttribute('style') || '';
      el.setAttribute('style', `${current}; ${style[selector]}`);
    });
  });

  return doc.body.innerHTML;
}

export function wrapWithContainer(innerHtml: string, containerStyle: string): string {
  const container = `<div style="${containerStyle}">${innerHtml}</div>`;
  return container;
}


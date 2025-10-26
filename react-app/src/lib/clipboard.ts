export async function copyHtmlAndText(html: string, textFallback?: string) {
  if (typeof window === 'undefined' || !('clipboard' in navigator)) {
    throw new Error('Clipboard API 不可用');
  }
  try {
    const htmlBlob = new Blob([html], { type: 'text/html' });
    const textBlob = new Blob([textFallback ?? stripHtml(html)], { type: 'text/plain' });
    // @ts-expect-error ClipboardItem global
    const item = new ClipboardItem({ 'text/html': htmlBlob, 'text/plain': textBlob });
    await navigator.clipboard.write([item]);
  } catch (e) {
    // fallback plain text
    await navigator.clipboard.writeText(textFallback ?? stripHtml(html));
  }
}

function stripHtml(html: string) {
  const div = document.createElement('div');
  div.innerHTML = html;
  return (div.textContent || div.innerText || '').trim();
}


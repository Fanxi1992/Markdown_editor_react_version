import { copyHtmlAndText } from './clipboard';
import type { StyleMap } from './styles';
import { ImageStore } from './images/imageStore';

export async function copyForWeChat(html: string, style: StyleMap, imageStore: ImageStore) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');

  // 1) grid -> table for WeChat
  convertGridToTable(doc);

  // 2) inline images as Base64
  const { successCount, failCount } = await inlineAllImages(doc, imageStore);

  // 3) wrap with section if container background is not white
  const containerStyle = style.container || '';
  const bg = extractBackgroundColor(containerStyle);
  if (bg && !/^#?fff(?:fff)?$/i.test(bg)) {
    const section = doc.createElement('section');
    const padding = matchCss(containerStyle, /padding:\s*([^;]+)/);
    const maxWidth = matchCss(containerStyle, /max-width:\s*([^;]+)/);
    section.setAttribute('style', [
      `background-color: ${bg}`,
      `padding: ${padding || '40px 20px'}`,
      `max-width: ${maxWidth || '100%'}`,
      'margin: 0 auto',
      'box-sizing: border-box',
      'word-wrap: break-word'
    ].join('; '));

    while (doc.body.firstChild) section.appendChild(doc.body.firstChild);

    // remove redundant styles inside
    section.querySelectorAll('*').forEach((el) => {
      const s = el.getAttribute('style') || '';
      let ns = s.replace(/max-width:\s*[^;]+;?/g, '')
                .replace(/margin:\s*0\s+auto;?/g, '');
      ns = ns.replace(/;\s*;/g, ';').replace(/^\s*;|;\s*$/g, '');
      if (ns) el.setAttribute('style', ns); else el.removeAttribute('style');
    });

    doc.body.innerHTML = '';
    doc.body.appendChild(section);
  }

  const processedHTML = doc.body.innerHTML;
  const plain = doc.body.textContent || '';
  await copyHtmlAndText(processedHTML, plain);

  return { successCount, failCount };
}

function matchCss(input: string, re: RegExp) {
  const m = input.match(re);
  return m ? m[1].trim() : '';
}

export function extractBackgroundColor(styleString?: string | null) {
  if (!styleString) return null;
  const m1 = styleString.match(/background-color:\s*([^;]+)/);
  if (m1) return m1[1].trim();
  const m2 = styleString.match(/background:\s*([#rgb][^;]+)/);
  if (m2) {
    const v = m2[1].trim();
    if (v.startsWith('#') || v.startsWith('rgb')) return v;
  }
  return null;
}

export function convertGridToTable(doc: Document) {
  const grids = doc.querySelectorAll('.image-grid');
  grids.forEach((grid) => {
    const columnsAttr = (grid.getAttribute('data-columns') || '').trim();
    const wrappers = Array.from(grid.children);
    const count = wrappers.length;
    let columns = parseInt(columnsAttr) || 2;
    if (!columnsAttr) {
      if (count === 2) columns = 2;
      else if (count === 3) columns = 3;
      else if (count === 4) columns = 2;
      else columns = 3;
    }

    const table = doc.createElement('table');
    table.setAttribute('style', [
      'width: 100% !important',
      'border-collapse: collapse !important',
      'margin: 20px auto !important',
      'table-layout: fixed !important',
      'border: none !important',
      'background: transparent !important'
    ].join('; '));

    const rows = Math.ceil(count / columns);
    for (let i = 0; i < rows; i++) {
      const tr = doc.createElement('tr');
      for (let j = 0; j < columns; j++) {
        const td = doc.createElement('td');
        td.setAttribute('style', [
          'padding: 4px !important',
          'vertical-align: top !important',
          `width: ${100 / columns}% !important`,
          'border: none !important',
          'background: transparent !important'
        ].join('; '));

        const index = i * columns + j;
        if (index < count) {
          const img = (wrappers[index] as HTMLElement).querySelector('img');
          if (img) {
            const wrapper = doc.createElement('div');
            wrapper.setAttribute('style', [
              'width: 100% !important',
              'height: 360px !important',
              'text-align: center !important',
              'background-color: #f5f5f5 !important',
              'border-radius: 4px !important',
              'padding: 10px !important',
              'box-sizing: border-box !important',
              'overflow: hidden !important',
              'display: table !important'
            ].join('; '));

            const inner = doc.createElement('div');
            inner.setAttribute('style', 'display: table-cell !important; vertical-align: middle !important; text-align: center !important;');

            const newImg = img.cloneNode(true) as HTMLImageElement;
            newImg.setAttribute('style', [
              'max-width: calc(100% - 20px) !important',
              'max-height: 340px !important',
              'width: auto !important',
              'height: auto !important',
              'display: inline-block !important',
              'margin: 0 auto !important',
              'border-radius: 4px !important',
              'object-fit: contain !important'
            ].join('; '));

            inner.appendChild(newImg);
            wrapper.appendChild(inner);
            td.appendChild(wrapper);
          }
        }

        tr.appendChild(td);
      }
      table.appendChild(tr);
    }

    grid.parentNode?.replaceChild(table, grid);
  });
}

async function inlineAllImages(doc: Document, imageStore: ImageStore) {
  const imgs = Array.from(doc.querySelectorAll('img')) as HTMLImageElement[];
  let successCount = 0;
  let failCount = 0;

  await Promise.all(
    imgs.map(async (img) => {
      try {
        const src = img.getAttribute('src') || '';
        if (src.startsWith('data:')) { successCount++; return; }
        const id = img.getAttribute('data-image-id');
        let blob: Blob | null = null;
        if (id) {
          try { blob = await imageStore.getImageBlob(id); } catch {}
        }
        if (!blob) {
          const resp = await fetch(src, { mode: 'cors', cache: 'default' });
          if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
          blob = await resp.blob();
        }
        const base64 = await blobToDataURL(blob!);
        img.setAttribute('src', base64);
        successCount++;
      } catch {
        failCount++;
      }
    })
  );

  return { successCount, failCount };
}

function blobToDataURL(blob: Blob) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(String(reader.result));
    reader.onerror = (e) => reject(e);
    reader.readAsDataURL(blob);
  });
}


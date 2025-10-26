export function groupConsecutiveImages(doc: Document) {
  const body = doc.body;
  const children = Array.from(body.children);

  type Item = { element: Element; img: HTMLImageElement; index: number; inSameParagraph: boolean };
  const items: Item[] = [];

  children.forEach((child, index) => {
    if (child.tagName === 'P') {
      const images = child.querySelectorAll('img');
      if (images.length > 0) {
        if (images.length > 1) {
          Array.from(images).forEach((img) => items.push({ element: child, img, index, inSameParagraph: true }));
        } else {
          items.push({ element: child, img: images[0] as HTMLImageElement, index, inSameParagraph: false });
        }
      }
    } else if (child.tagName === 'IMG') {
      items.push({ element: child, img: child as HTMLImageElement, index, inSameParagraph: false });
    }
  });

  const groups: Item[][] = [];
  let current: Item[] = [];
  items.forEach((it, i) => {
    if (i === 0) current.push(it);
    else {
      const prev = items[i - 1];
      const isContinuous = it.index === prev.index || it.index - prev.index === 1;
      if (isContinuous) current.push(it);
      else {
        if (current.length > 0) groups.push([...current]);
        current = [it];
      }
    }
  });
  if (current.length > 0) groups.push(current);

  groups.forEach((group) => {
    if (group.length < 2) return;
    const imageCount = group.length;
    const firstElement = group[0].element;

    const grid = doc.createElement('div');
    grid.setAttribute('class', 'image-grid');
    let columns = 2;
    let style = '';
    if (imageCount === 2) {
      columns = 2;
      style = `display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:20px auto;max-width:100%;align-items:start;`;
    } else if (imageCount === 3) {
      columns = 3;
      style = `display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin:20px auto;max-width:100%;align-items:start;`;
    } else if (imageCount === 4) {
      columns = 2;
      style = `display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:20px auto;max-width:100%;align-items:start;`;
    } else {
      columns = 3;
      style = `display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin:20px auto;max-width:100%;align-items:start;`;
    }
    grid.setAttribute('style', style);
    grid.setAttribute('data-columns', String(columns));

    group.forEach((item) => {
      const wrap = doc.createElement('div');
      wrap.setAttribute('style', 'width:100%;height:auto;overflow:hidden;');
      const img = item.img.cloneNode(true) as HTMLImageElement;
      img.setAttribute('style', 'width:100%;height:auto;display:block;border-radius:8px;');
      wrap.appendChild(img);
      grid.appendChild(wrap);
    });

    firstElement.parentNode?.insertBefore(grid, firstElement);
    const removeSet = new Set<Element>();
    group.forEach((it) => removeSet.add(it.element));
    removeSet.forEach((el) => el.parentNode?.removeChild(el));
  });
}


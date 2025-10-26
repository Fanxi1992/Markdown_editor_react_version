import { ImageStore } from './imageStore';

export type ResolveResult = {
  html: string;
  usedIds: Set<string>;
  newUrls: Map<string, string>;
};

export async function resolveImageProtocol(
  html: string,
  imageStore: ImageStore,
  existingMap: Map<string, string>
): Promise<ResolveResult> {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');

  const usedIds = new Set<string>();
  const newUrls = new Map<string, string>();

  const imgs = Array.from(doc.querySelectorAll('img')) as HTMLImageElement[];
  for (const img of imgs) {
    const src = img.getAttribute('src') || '';
    if (!src.startsWith('img://')) continue;
    const id = src.replace('img://', '');
    usedIds.add(id);
    try {
      const blob = await imageStore.getImageBlob(id);
      if (!blob) continue;
      let url = existingMap.get(id);
      if (!url) {
        url = URL.createObjectURL(blob);
      }
      newUrls.set(id, url);
      img.setAttribute('src', url);
      img.setAttribute('data-image-id', id);
      // Default inline style for preview
      const cur = img.getAttribute('style') || '';
      img.setAttribute('style', `${cur}; width:100%; height:auto; display:block; border-radius:8px;`.trim());
    } catch {
      // put a placeholder
      img.setAttribute(
        'src',
        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="120"%3E%3Crect fill="%23eee" width="200" height="120"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%23999" font-size="12"%3EImage Missing%3C/text%3E%3C/svg%3E'
      );
    }
  }

  return { html: doc.body.innerHTML, usedIds, newUrls };
}


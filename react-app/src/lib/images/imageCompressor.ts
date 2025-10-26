export class ImageCompressor {
  private maxWidth: number;
  private maxHeight: number;
  private quality: number;
  private mimeType: string;

  constructor(options: { maxWidth?: number; maxHeight?: number; quality?: number; mimeType?: string } = {}) {
    this.maxWidth = options.maxWidth ?? 1920;
    this.maxHeight = options.maxHeight ?? 1920;
    this.quality = options.quality ?? 0.85;
    this.mimeType = options.mimeType ?? 'image/jpeg';
  }

  async compress(file: File): Promise<Blob> {
    // Skip for GIF/SVG
    if (file.type === 'image/gif' || file.type === 'image/svg+xml') {
      return file;
    }

    const dataURL = await this.readAsDataURL(file);
    const img = await this.loadImage(dataURL);

    let width = img.width;
    let height = img.height;

    let scale = 1;
    if (width > this.maxWidth) scale = this.maxWidth / width;
    if (height > this.maxHeight) scale = Math.min(scale, this.maxHeight / height);

    width = Math.floor(width * scale);
    height = Math.floor(height * scale);

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d')!;

    // Fill white background to avoid black for transparent PNG → JPEG
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, width, height);
    ctx.drawImage(img, 0, 0, width, height);

    const targetMime = file.type === 'image/png' ? 'image/png' : this.mimeType;
    const blob = await this.canvasToBlob(canvas, targetMime, this.quality);

    // If compression worse, return original
    if (blob && blob.size < file.size) return blob;
    return file;
  }

  private readAsDataURL(file: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result));
      reader.onerror = () => reject(new Error('FileReader failed'));
      reader.readAsDataURL(file);
    });
  }

  private loadImage(src: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error('Image load failed'));
      img.src = src;
    });
  }

  private canvasToBlob(canvas: HTMLCanvasElement, type: string, quality?: number): Promise<Blob> {
    return new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (blob) resolve(blob);
        else reject(new Error('canvas.toBlob failed'));
      }, type, quality);
    });
  }
}

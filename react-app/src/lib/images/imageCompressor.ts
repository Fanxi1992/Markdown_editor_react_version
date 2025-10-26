export class ImageCompressor {
  constructor(
    private options: { maxWidth?: number; maxHeight?: number; quality?: number; mimeType?: string } = {}
  ) {}

  async compress(file: File | Blob): Promise<Blob> {
    // Baseline: return original; implement full canvas pipeline later
    return file instanceof Blob ? file : new Blob([file]);
  }
}


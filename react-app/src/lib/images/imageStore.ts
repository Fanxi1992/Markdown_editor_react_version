// Minimal placeholder IndexedDB store; full logic can be ported later
export type StoredImage = {
  id: string;
  blob: Blob;
  name?: string;
  originalSize?: number;
  compressedSize?: number;
  createdAt?: number;
  mimeType?: string;
};

export class ImageStore {
  private dbName = 'ReactEditorImages';
  private storeName = 'images';
  private version = 1;
  private db: IDBDatabase | null = null;

  async init() {
    if (this.db) return;
    await new Promise<void>((resolve, reject) => {
      const req = indexedDB.open(this.dbName, this.version);
      req.onerror = () => reject(req.error);
      req.onsuccess = () => { this.db = req.result; resolve(); };
      req.onupgradeneeded = (e) => {
        const db = (e.target as IDBOpenDBRequest).result;
        if (!db.objectStoreNames.contains(this.storeName)) {
          const os = db.createObjectStore(this.storeName, { keyPath: 'id' });
          os.createIndex('createdAt', 'createdAt', { unique: false });
        }
      };
    });
  }

  async saveImage(image: StoredImage) {
    await this.init();
    await new Promise<void>((resolve, reject) => {
      const tx = this.db!.transaction([this.storeName], 'readwrite');
      const os = tx.objectStore(this.storeName);
      const req = os.put(image);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  }

  async getImageBlob(id: string): Promise<Blob | null> {
    await this.init();
    return await new Promise<Blob | null>((resolve, reject) => {
      const tx = this.db!.transaction([this.storeName], 'readonly');
      const os = tx.objectStore(this.storeName);
      const req = os.get(id);
      req.onsuccess = () => {
        const res = req.result as StoredImage | undefined;
        resolve(res?.blob ?? null);
      };
      req.onerror = () => reject(req.error);
    });
  }
}


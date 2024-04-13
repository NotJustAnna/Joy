export class ObjectCache<T> {
  constructor(private readonly ttl: number) {}

  private readonly cache = new Map<string, {
    lastAccess: number;
    value: T;
  }>();

  has(key: string) {
    const entry = this.cache.get(key);
    if (entry) {
      entry.lastAccess = Date.now();
    }
    return entry !== undefined;
  }

  get(key: string): T | undefined {
    const entry = this.cache.get(key);
    if (entry) {
      entry.lastAccess = Date.now();
    }
    return entry?.value;
  }

  set(key: string, value: T): void {
    this.cache.set(key, {
      lastAccess: Date.now(),
      value,
    });
    this.cleanup();
  }

  private cleanupInterval: any;

  private cleanup(): void {
    if (this.cleanupInterval) {
      clearInterval(this.cleanupInterval);
    }
    this.cleanupInterval = setInterval(() => {
      const now = Date.now();
      this.cache.forEach((entry, key) => {
        if (now - entry.lastAccess > this.ttl) {
          this.cache.delete(key);
        }
      });
      if (this.cache.size === 0) {
        clearInterval(this.cleanupInterval);
      }
    }, this.ttl);
  }
}
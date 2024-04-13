export class EventService extends EventTarget {
  private wasInit: boolean = false;

  private cleaners: (() => void)[] = [];

  init() {
    if (this.wasInit) {
      this.stop();
    }

    this.wasInit = true;
  }

  stop() {
    this.cleaners.forEach((cleaner) => cleaner());
    this.cleaners = [];
    this.wasInit = false;
  }
}

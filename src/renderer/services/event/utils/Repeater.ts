export class Repeater {
  private readonly timeouts: Record<string, string | number> = {};

  constructor(
    private readonly initialDelay: number,
    private readonly repeatDelay: number,
    private readonly handler: (key: string) => void,
  ) {}

  down(key: string) {
    if (!this.timeouts[key]) {
      this.timeouts[key] = window.setTimeout(
        this.looper,
        this.initialDelay,
        key,
      );
      this.handler(key);
    }
  }

  up(key: string) {
    clearTimeout(this.timeouts[key]);
    delete this.timeouts[key];
  }

  private readonly looper = (key: string) => {
    this.handler(key);
    this.timeouts[key] = window.setTimeout(this.looper, this.repeatDelay, key);
  };
}

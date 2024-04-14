export abstract class InitLifecycle {
  protected destroyers: (() => void)[] = [];

  constructor(public isInit: boolean = false) {}

  init() {
    if (this.isInit) {
      this.destroy();
    }

    this.onInit();

    this.isInit = true;
  }

  // eslint-disable-next-line class-methods-use-this
  protected onInit(): void {}

  // eslint-disable-next-line class-methods-use-this
  protected onDestroy(): void {}

  protected addDestroyer(...destroyer: (() => void)[]) {
    this.destroyers.push(...destroyer);
  }

  protected addLifecycle<T extends InitLifecycle>(lifecycle: T): T {
    this.addDestroyer(lifecycle.destroy.bind(lifecycle));
    return lifecycle;
  }

  destroy() {
    this.destroyers.forEach((it) => it());
    this.destroyers = [];
    this.onDestroy();
    this.isInit = false;
  }
}

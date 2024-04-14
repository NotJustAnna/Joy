import { InitLifecycle } from '../../utils/InitLifecycle';
import { GamepadEventListener } from './listeners/GamepadEventListener';
import { KeyboardEventListener } from './listeners/KeyboardEventListener';

export class EventService extends InitLifecycle {
  public readonly target = new EventTarget();

  protected onInit(): void {
    this.addLifecycle(new KeyboardEventListener(this.target)).init();

    this.addLifecycle(new GamepadEventListener(this.target)).init();

    this.target.addEventListener('input', (event) => {
      if (event instanceof CustomEvent) {
        console.log('input', event.detail.code);
      }
    });

    this.target.addEventListener('gamepad', (event) => {
      if (event instanceof CustomEvent) {
        console.log('gamepad', event.detail);
      }
    });
  }
}

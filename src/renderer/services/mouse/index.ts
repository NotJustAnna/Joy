import { InitLifecycle } from '../../utils/InitLifecycle';
import { MouseVisibleDetail } from '../event/details/MouseVisibleDetail';

export class MouseService extends InitLifecycle {
  private mouseTimer: number | string | null = null;

  private mouseVisible: boolean = true;

  constructor(private readonly onMouseVisible?: (visible: boolean) => void) {
    super();
  }

  protected onInit(): void {
    const handleMouseMove = this.handleMouseMove.bind(this);
    document.addEventListener('mousemove', handleMouseMove);
    this.addDestroyer(() =>
      document.removeEventListener('mousemove', handleMouseMove),
    );
  }

  private handleMouseMove(): void {
    if (this.mouseTimer) {
      window.clearTimeout(this.mouseTimer);
    }

    if (!this.mouseVisible) {
      document.body.style.cursor = 'default';
      this.mouseVisible = true;

      if (this.onMouseVisible) {
        this.onMouseVisible(true);
      }
    }

    this.mouseTimer = window.setTimeout(() => {
      document.body.style.cursor = 'none';
      this.mouseVisible = false;

      if (this.onMouseVisible) {
        this.onMouseVisible(false);
      }
    }, 3000);
  }

  public static emitEvent(target: EventTarget): (visible: boolean) => void {
    return (visible: boolean) => {
      target.dispatchEvent(
        new CustomEvent<MouseVisibleDetail>('mouse-visible', {
          detail: { visible },
        }),
      );
    };
  }
}

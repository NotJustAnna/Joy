import { ShootingStar } from './ShootingStar';
import { clamp, nextGaussian } from './math';

export class ShootingStarsScene {
  objs: ShootingStar[] = [];

  private lastRenderTime: number = 0;

  private deltaAcc: number = 0;

  pausedImageUrl?: string;

  paused: boolean = false;

  loop(ctx: CanvasRenderingContext2D) {
    ctx.imageSmoothingEnabled = false;

    if (this.paused) {
      return;
    }

    const now = performance ? performance.now() : Date.now();
    const delta =
      this.lastRenderTime === 0 ? 1 : (now - this.lastRenderTime) / 20;
    this.lastRenderTime = now;
    this.deltaAcc += delta;
    if (this.deltaAcc > 1) {
      this.deltaAcc -= Math.floor(this.deltaAcc);
      this.objs.push(
        ShootingStar.ofColor(
          ShootingStarsScene.randomColor(),
          ShootingStarsScene.randomColor(),
        ),
      );
    }
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    this.objs = this.objs.filter((r) => r.render(ctx, delta));
  }

  private static randomColor() {
    return ShootingStarsScene.hslToRgb(
      Math.random(),
      1,
      clamp(nextGaussian() * 0.15 + 0.5, 0.1, 1),
    );
  }

  /**
   * Converts an HSL color value to RGB. Conversion formula
   * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
   * Assumes h, s, and l are contained in the set [0, 1] and
   * returns r, g, and b in the set [0, 255].
   *
   * @param   {number}  h       The hue
   * @param   {number}  s       The saturation
   * @param   {number}  l       The lightness
   * @return  {Array}           The RGB representation
   */
  private static hslToRgb(h: number, s: number, l: number) {
    let r;
    let g;
    let b;

    if (s === 0) {
      // eslint-disable-next-line no-multi-assign
      r = g = b = l; // achromatic
    } else {
      const hue2rgb = (p: number, q: number, t: number) => {
        // eslint-disable-next-line no-param-reassign
        if (t < 0) t += 1;
        // eslint-disable-next-line no-param-reassign
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };

      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }

    return `#${[r, g, b]
      .map((v) =>
        Math.round(v * 255)
          .toString(16)
          .padStart(2, '0'),
      )
      .join('')}`;
  }
}

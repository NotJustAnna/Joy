import { type CanvasHTMLAttributes, useEffect, useRef } from 'react';

type BuiltInCanvasProps = CanvasHTMLAttributes<HTMLCanvasElement>;

type CanvasProps = BuiltInCanvasProps & {
  draw: (ctx: CanvasRenderingContext2D) => void;
};

export default function Canvas(props: CanvasProps) {
  const { draw, ...rest } = props;
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const context = canvas.getContext('2d', { alpha: false })!;
    let animationFrameId: number;

    const render = () => {
      if (
        canvas.width !== canvas.clientWidth ||
        canvas.height !== canvas.clientHeight
      ) {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
      }
      draw(context);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <canvas ref={canvasRef} {...rest} />;
}

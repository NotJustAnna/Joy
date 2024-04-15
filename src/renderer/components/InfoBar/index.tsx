import Input from './Input';
import Time from './Time';

export enum Position {
  TopLeft = 'top-left',
  TopRight = 'top-right',
  BottomLeft = 'bottom-left',
  BottomRight = 'bottom-right',
}

interface InfoBarProps {
  position: Position;
}

const mappings: Record<Position, string> = {
  [Position.TopLeft]: 'top-0 left-0 flex-row',
  [Position.TopRight]: 'top-0 right-0 flex-row-reverse',
  [Position.BottomLeft]: 'bottom-0 left-0 flex-row',
  [Position.BottomRight]: 'bottom-0 right-0 flex-row-reverse',
};

export default function InfoBar({ position }: InfoBarProps) {
  return (
    <div className={`absolute flex gap-3 ${mappings[position]} m-4`}>
      <p className="font-bold text-4xl">
        <Time />
      </p>
      <p className="my-1 flex flex-row gap-2">
        <Input />
      </p>
    </div>
  );
}

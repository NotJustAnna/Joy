/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { ReactNode } from 'react';

export interface MenuGridItemProps {
  active: boolean;
  onEnter: () => void;
  onClick: () => void;
  children: ReactNode;
}

export default function MenuGridItem({
  children,
  active,
  onClick,
  onEnter,
}: MenuGridItemProps) {
  return (
    <div
      className={active ? 'border-s-4 border-e-4 rounded-3xl p-5' : 'p-5'}
      onClick={() => onClick()}
      onMouseEnter={() => onEnter()}
    >
      {children}
    </div>
  );
}

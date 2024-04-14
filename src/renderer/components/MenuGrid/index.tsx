import { ReactNode } from 'react';

export interface MenuGridProps {
  children: ReactNode;
}

export default function MenuGrid({ children }: MenuGridProps) {
  return (
    <main className="grid grid-flow-col auto-cols-fr gap-3">{children}</main>
  );
}

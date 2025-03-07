import type { Position } from '../renderer/components/InfoBar';

export interface Item {
  id: string;
  icon: string;
  title: string;
  actionType: 'url' | 'command' | 'internal';
  action: string;
  selected?: boolean;
}

export interface Config {
  items: Item[];
  showDesktopOption?: boolean;
  infoBarPosition?: Position;
}

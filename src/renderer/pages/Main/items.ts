import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faSteam } from '@fortawesome/free-brands-svg-icons';
import {
  faDesktop,
  faGamepad,
  faPowerOff,
  faQuestionCircle,
  faTelevision,
} from '@fortawesome/free-solid-svg-icons';

import { NavigateFunction } from 'react-router-dom';
import { Item as MenuItem } from '../../components/Menu';
import { Item as ConfigItem } from '../../utils/config';

const icons: Record<string, IconProp> = {
  'fontawesome/steam': faSteam,
  'fontawesome/desktop': faDesktop,
  'fontawesome/gamepad': faGamepad,
  'fontawesome/television': faTelevision,
  'fontawesome/power-off': faPowerOff,
};

const actions: Record<
  string,
  (action: string, navigate: NavigateFunction) => void
> = {
  url: (action: string) => {
    window.location.href = action;
  },
  command: (action: string) => {
    window.electron.ipcRenderer.sendMessage('command', action);
  },
  internal: (action: string, navigate: NavigateFunction) => {
    if (action === 'system') {
      navigate('/system');
    }
    if (action === 'back') {
      navigate(-1);
    }
    console.error(`Internal action not found: ${action}`);
  },
};

const actionTypeNotFound = (type: string) => () => {
  console.error(`Action type not found: ${type}`);
};

export function parseItems(
  items: ConfigItem[],
  navigate: NavigateFunction,
): MenuItem[] {
  return items.map((item) => ({
    id: item.id ?? Math.random().toString(16),
    icon: icons[item.icon] ?? faQuestionCircle,
    title: item.title ?? 'No title',
    onSelect:
      actions[item.actionType]?.bind(null, item.action, navigate) ??
      actionTypeNotFound(item.actionType),
  }));
}

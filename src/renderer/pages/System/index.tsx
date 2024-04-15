import {
  faDesktop,
  faEllipsis,
  faPowerOff,
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Menu, { Item } from '../../components/Menu';
import { useConfig } from '../../utils/config/context';

export default function System() {
  const config = useConfig();
  const navigate = useNavigate();
  const items: Item[] = [
    {
      id: 'back',
      icon: faEllipsis,
      title: 'Back',
      onSelect: () => navigate(-1),
    },
  ];

  if (config.showDesktopOption !== false) {
    items.push({
      id: 'desktop',
      icon: faDesktop,
      title: 'Desktop',
      onSelect: () => window.close(),
    });
  }

  items.push(
    {
      id: 'reboot',
      icon: faPowerOff,
      title: 'Reboot',
      onSelect: () => navigate('reboot'),
    },
    {
      id: 'shutdown',
      icon: faPowerOff,
      title: 'Shutdown',
      onSelect: () => navigate('shutdown'),
    },
  );

  return <Menu items={items} initialSelected={0} />;
}

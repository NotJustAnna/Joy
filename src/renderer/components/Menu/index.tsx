import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { useState } from 'react';
import { useEvents } from '../../services/event/context';
import { useEvent } from '../../utils/useEvent';
import { isInputEvent } from '../../services/event/details/InputDetail';
import MenuGrid from '../MenuGrid';
import MenuGridItem from '../MenuGridItem';
import ItemContents from '../ItemContents';
import { clamp } from '../ShootingStarScene/gfx/math';

export interface Item {
  id: string;
  icon: IconProp;
  title: string;
  onSelect: () => void;
}

export interface MenuProps {
  items: Item[];
  // eslint-disable-next-line react/require-default-props
  initialSelected?: number;
}

export default function Menu({ items, initialSelected }: MenuProps) {
  if (initialSelected === undefined)
    // eslint-disable-next-line no-param-reassign
    initialSelected = Math.floor(items.length / 2);
  const events = useEvents();
  const [selected, setSelected] = useState<number>(
    clamp(initialSelected, 0, items.length - 1),
  );

  useEvent(events, 'input', (event) => {
    if (!isInputEvent(event)) return;
    const { code } = event.detail;

    if (code === 'enter') {
      const selectedItem = items[selected];
      if (!selectedItem) return;
      selectedItem.onSelect();
    }

    // eslint-disable-next-line no-nested-ternary
    const offset = code === 'left' ? -1 : code === 'right' ? 1 : 0;
    if (offset === 0) return;
    setSelected((prev) => {
      const next = prev + offset;
      // eslint-disable-next-line no-nested-ternary
      return next < 0 ? items.length - 1 : next >= items.length ? 0 : next;
    });
  });

  return (
    <MenuGrid>
      {items.map((item, index) => (
        <MenuGridItem
          key={item.id}
          active={selected === index}
          onClick={() => item.onSelect()}
          onEnter={() => setSelected(index)}
        >
          <ItemContents icon={item.icon} title={item.title} />
        </MenuGridItem>
      ))}
    </MenuGrid>
  );
}

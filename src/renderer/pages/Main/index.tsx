import { faSteam } from '@fortawesome/free-brands-svg-icons';
import {
  faDesktop,
  faGamepad,
  faPlayCircle,
  faPowerOff,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import MenuGrid from '../../components/MenuGrid';
import MenuGridItem from '../../components/MenuGridItem';
import { useEvents } from '../../services/event/context';
import { useEvent } from '../../utils/useEvent';
import { isInputEvent } from '../../services/event/details/InputDetail';

export default function Main() {
  const items = [
    <>
      <FontAwesomeIcon size="6x" fixedWidth icon={faGamepad} />
      <p className="mt-4 font-bold">RetroArch</p>
    </>,
    <>
      <FontAwesomeIcon size="6x" fixedWidth icon={faPlayCircle} />
      <p className="mt-4 font-bold">Kodi</p>
    </>,
    <>
      <FontAwesomeIcon size="6x" fixedWidth icon={faSteam} />
      <p className="mt-4 font-bold">Big Picture</p>
    </>,
    <>
      <FontAwesomeIcon size="6x" fixedWidth icon={faDesktop} />
      <p className="mt-4 font-bold">Desktop</p>
    </>,
    <>
      <FontAwesomeIcon size="6x" fixedWidth icon={faPowerOff} />
      <p className="mt-4 font-bold">System</p>
    </>,
  ];
  const events = useEvents();
  const [selected, setSelected] = useState<number>(
    Math.floor(items.length / 2),
  );

  useEvent(events, 'input', (event) => {
    if (!isInputEvent(event)) return;
    const { code } = event.detail;
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
          key={index}
          active={selected === index}
          onClick={() => setSelected(index)}
          onEnter={() => setSelected(index)}
        >
          {item}
        </MenuGridItem>
      ))}
    </MenuGrid>
  );
}

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faKeyboard } from '@fortawesome/free-solid-svg-icons';
import { useEvents } from '../../services/event/context';
import { useEvent } from '../../utils/useEvent';
import { isInputEvent } from '../../services/event/details/InputDetail';
import { isGamepadEvent } from '../../services/event/details/GamepadDetail';

export default function Time() {
  const events = useEvents();
  const [inputType, setInputType] = useState<'keyboard' | 'gamepad' | 'none'>(
    'none',
  );
  const [gamepadCount, setGamepadCount] = useState(0);

  useEvent(events, 'input', (event) => {
    if (!isInputEvent(event)) return;
    setInputType(event.detail.source.type);
  });

  useEvent(events, 'gamepad', (event) => {
    if (!isGamepadEvent(event)) return;
    const { connectedCount } = event.detail;
    setGamepadCount(connectedCount);
    if (connectedCount === 0) {
      setInputType('none');
    }
  });

  if (inputType === 'keyboard') {
    return <FontAwesomeIcon icon={faKeyboard} className="text-2xl" />;
  }

  if (inputType === 'gamepad') {
    return new Array(gamepadCount).fill(null).map((_, i) => (
      <FontAwesomeIcon
        // eslint-disable-next-line react/no-array-index-key
        key={`input-${i}`}
        icon={faGamepad}
        className="text-2xl"
      />
    ));
  }

  return false;
}

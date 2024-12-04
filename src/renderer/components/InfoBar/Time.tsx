import { useEffect, useState } from 'react';

export default function Time() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const nextMinute = new Date();
    nextMinute.setSeconds(0);
    nextMinute.setMilliseconds(0);
    nextMinute.setMinutes(nextMinute.getMinutes() + 1);
    const delay = nextMinute.getTime() - new Date().getTime();

    const timeout = setTimeout(() => {
      setTime(new Date());
    }, delay);

    return () => clearTimeout(timeout);
  }, [time]);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');

  return `${hours}:${minutes}`;
}

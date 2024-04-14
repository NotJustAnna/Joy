import { useEffect, useState } from 'react';

export default function Time() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const nextMinute = new Date();
    nextMinute.setSeconds(0);
    nextMinute.setMilliseconds(0);
    nextMinute.setMinutes(nextMinute.getMinutes() + 1);
    const delay = nextMinute.getTime() - new Date().getTime();

    const interval = setInterval(() => {
      setTime(new Date());
    }, delay);

    return () => clearInterval(interval);
  }, []);

  const timeStr = time.toLocaleTimeString().substring(0, 5);

  return <span>{timeStr}</span>;
}

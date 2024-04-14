import { useEffect } from 'react';

export function useEvent(
  target: EventTarget,
  type: string,
  listener: (event: Event) => void,
) {
  useEffect(() => {
    target.addEventListener(type, listener);
    return () => {
      target.removeEventListener(type, listener);
    };
  }, [target, type, listener]);
}

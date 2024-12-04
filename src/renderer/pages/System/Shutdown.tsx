import { useEffect, useState } from 'react';

export default function Shutdown() {
  const [text, setText] = useState('');
  const [queuedText, setQueuedText] = useState('Shutting down...');

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (queuedText.length === 0) {
        clearTimeout(timeout);
        window.electron.ipcRenderer.sendMessage('shutdown');
        return;
      }

      setText((it) => it + queuedText[0]);
      setQueuedText((it) => it.slice(1));
    }, 75);

    return () => clearTimeout(timeout);
  }, [text, queuedText]);

  return <span className="font-bold text-4xl">{text}</span>;
}

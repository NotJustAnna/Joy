import { createRoot } from 'react-dom/client';
import App from './App';
import { ConfigContext } from './utils/config/context';
import { parseConfig } from './utils/config';

window.electron.ipcRenderer.once('config', (json) => {
  const config = parseConfig(json as string);
  console.log('config', config);
  const container = document.getElementById('root') as HTMLElement;
  const root = createRoot(container);

  root.render(
    <ConfigContext.Provider value={config}>
      <App />
    </ConfigContext.Provider>,
  );
});
window.electron.ipcRenderer.sendMessage('config');

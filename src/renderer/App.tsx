import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import './App.css';
import { useEffect, useState } from 'react';
import Main from './pages/Main';
import ShootingStarScene from './components/ShootingStarScene';
import InfoBar, { Position } from './components/InfoBar';
import { EventService } from './services/event/EventService';
import { EventContext } from './services/event/context';
import System from './pages/System';
import Shutdown from './pages/System/Shutdown';
import Reboot from './pages/System/Reboot';
import { MouseService } from './services/mouse';
import { useConfig } from './utils/config/context';

export default function App() {
  const [eventService] = useState(() => new EventService());
  useEffect(() => {
    eventService.init();
    return () => eventService.destroy();
  }, [eventService]);

  const [mouseService] = useState(
    () => new MouseService(MouseService.emitEvent(eventService.target)),
  );
  useEffect(() => {
    mouseService.init();
    return () => mouseService.destroy();
  }, [mouseService]);

  const config = useConfig();

  return (
    <>
      <ShootingStarScene paused={false} />
      <EventContext.Provider value={eventService}>
        <InfoBar position={config.infoBarPosition ?? Position.TopRight} />
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/system" element={<System />} />
            <Route path="/system/reboot" element={<Reboot />} />
            <Route path="/system/shutdown" element={<Shutdown />} />
          </Routes>
        </Router>
      </EventContext.Provider>
    </>
  );
}

import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import './App.css';
import { useEffect, useState } from 'react';
import Main from './pages/Main';
import ShootingStarScene from './components/ShootingStarScene';
import TopBar from './components/TopBar';
import { EventService } from './services/event/EventService';
import { EventContext } from './services/event/context';

export default function App() {
  const [eventService] = useState(() => new EventService());
  useEffect(() => {
    eventService.init();
    return () => eventService.destroy();
  }, [eventService]);

  return (
    <>
      <ShootingStarScene paused={false} />
      <EventContext.Provider value={eventService}>
        <TopBar />
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </Router>
      </EventContext.Provider>
    </>
  );
}

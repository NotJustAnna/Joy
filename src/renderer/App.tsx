import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import ShootingStarScene from './components/ShootingStarScene';

export default function App() {


  return (
    <div>
      <ShootingStarScene paused={false} />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
    </div>
  );
}

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import MenuButtonComponent from './components/menu-button/MenuButtonComponent';

import ProfileScreen from './pages/profile-screen/ProfileScreen';

export default function App() {
  return (
    <main>
      <MenuButtonComponent />
      <Router>
        <Routes>
          <Route path='/' element={<ProfileScreen />} />
        </Routes>
      </Router>
    </main>
  );
}

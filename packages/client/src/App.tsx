import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import MenuButtonComponent from './components/menu-button/MenuButtonComponent';
import MenuLanguages from './components/menu-languages/MenuLanguages';

import ProfileScreen from './pages/profile-screen/ProfileScreen';

export default function App() {
  return (
    <main>
      <MenuLanguages />
      <MenuButtonComponent />
      {process.env.REACT_APP_DEV === 'true' && (
        <span>Em desenvoldimento...</span>
      )}
      <Router>
        <Routes>
          <Route path='/' element={<ProfileScreen />} />
        </Routes>
      </Router>
    </main>
  );
}

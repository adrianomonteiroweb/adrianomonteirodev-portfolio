import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import MenuComponent from './components/menu/MenuComponent';
import MenuLanguages from './components/menu-languages/MenuLanguages';

import ProfileScreen from './pages/profile-screen/ProfileScreen';

export default function App() {
  return (
    <main>
      {process.env.REACT_APP_DEV === 'true' && (
        <span>Em desenvoldimento...</span>
      )}
      <Router>
        <MenuLanguages />
        <section className='content'>
          <MenuComponent />
          <Routes>
            <Route path='/' element={<ProfileScreen />} />
          </Routes>
        </section>
      </Router>
    </main>
  );
}

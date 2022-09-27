import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import './App.css';

import MenuComponent from './components/menu/MenuComponent';
import MenuLanguages from './components/menu-languages/MenuLanguages';

import ProfileScreen from './pages/profile-screen/ProfileScreen';
import { useState } from 'react';
import { darkTheme, lightTheme } from './styled-components/themes';
import { Container, Content } from './styled-components/styledComponents';
import { GlobalStyles } from './styled-components/GlobalStyles';
import { useTranslation } from 'react-i18next';

export default function App() {
  const { t } = useTranslation();
  const [theme, setTheme] = useState('Light');

  function changeTheme() {
    theme === 'Light' ? setTheme('Dark') : setTheme('Light');
  }

  return (
    <ThemeProvider theme={theme === 'Light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Container>
        <main>
          {<span>Em desenvoldimento...</span>}
          <Router>
            <MenuLanguages />
            <Content className='content'>
              {
                <button className='theme-button' onClick={() => changeTheme()}>
                  {t(`${theme} Theme`)}
                </button>
              }
              <MenuComponent />
              <Routes>
                <Route path='/' element={<ProfileScreen />} />
              </Routes>
            </Content>
          </Router>
        </main>
      </Container>
    </ThemeProvider>
  );
}

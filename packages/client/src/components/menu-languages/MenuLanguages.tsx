import { useEffect } from 'react';
import {
  brazilianFlag,
  koreanFlag,
  spainFlag,
  unitStatesFlag,
} from '../../data/images';
import i18next from '../../i18next';

import './menuLanguages.css';

export default function MenuLanguages() {
  useEffect(() => {
    Object.values(document.querySelectorAll('.menu-languages-flag')).map(
      (flag) => {
        if (flag.id === i18next.language) {
          flag.classList.add('active');
        } else {
          flag.classList.remove('active');
        }
      }
    );
  }, [i18next.language]);

  return (
    <div data-cy='menu-languages' className='menu-languages'>
      <button
        className='menu-languages-button'
        onClick={() => i18next.changeLanguage('pt-BR')}
      >
        <img
          id='pt-BR'
          className='menu-languages-flag'
          src={brazilianFlag}
          alt='Brazilian Flag'
        />
      </button>
      <button
        className='menu-languages-button'
        onClick={() => i18next.changeLanguage('en-US')}
      >
        <img
          id='en-US'
          className='menu-languages-flag'
          src={unitStatesFlag}
          alt='Unit State Flag'
        />
      </button>
      <button
        className='menu-languages-button'
        onClick={() => i18next.changeLanguage('es-ES')}
      >
        <img
          id='es-ES'
          className='menu-languages-flag'
          src={spainFlag}
          alt='Spain Flag'
        />
      </button>
      <button
        className='menu-languages-button'
        onClick={() => i18next.changeLanguage('ko-KR')}
      >
        <img
          id='ko-KR'
          className='menu-languages-flag'
          src={koreanFlag}
          alt='Korean Flag'
        />
      </button>
    </div>
  );
}

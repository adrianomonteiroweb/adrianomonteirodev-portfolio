import {
  brazilianFlag,
  koreanFlag,
  spainFlag,
  unitStatesFlag,
} from '../../data/images';
import i18next from '../../i18next';

import './menuLanguages.css';

export default function MenuLanguages() {
  return (
    <div data-cy='menu-languages' className='menu-languages'>
      <button
        className='menu-languages-button'
        onClick={() => i18next.changeLanguage('pt-BR')}
      >
        <img
          className='menu-languages-flag'
          src={brazilianFlag}
          alt='Brazilian Flag'
        />
      </button>
      <button
        className='menu-languages-button'
        onClick={() => i18next.changeLanguage('us-US')}
      >
        <img
          className='menu-languages-flag'
          src={unitStatesFlag}
          alt='Unit State Flag'
        />
      </button>
      <button
        className='menu-languages-button'
        onClick={() => i18next.changeLanguage('es-ES')}
      >
        <img className='menu-languages-flag' src={spainFlag} alt='Spain Flag' />
      </button>
      <button
        className='menu-languages-button'
        onClick={() => i18next.changeLanguage('ko-KR')}
      >
        <img
          className='menu-languages-flag'
          src={koreanFlag}
          alt='Korean Flag'
        />
      </button>
    </div>
  );
}

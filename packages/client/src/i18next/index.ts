import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import PTBR from './locales/pt-br/pt-br.json';
import ENUS from './locales/en-us/en-us.json';
import ESES from './locales/es-es/es-es.json';
import KOKR from './locales/ko-kr/ko-kr.json';

const resources = {
  'pt-BR': PTBR,
  'en-US': ENUS,
  'es-ES': ESES,
  'ko-KR': KOKR,
};

function InitI18next() {
  i18next.use(initReactI18next).init({
    resources,
    // lng para pegar da navegação a linguagem
    lng: navigator.language,
    interpolation: {
      // interpolation para evitar injeção xls
      escapeValue: false,
    },
  });

  return i18next;
}

export default InitI18next();

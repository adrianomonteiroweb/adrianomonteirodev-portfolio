import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import PTBR from './locales/pt-br/pt-br.json';
import ENUS from './locales/en-us/en-us.json';

const resources = {
  'pt-BR': PTBR,
  'en-US': ENUS,
};

i18next.use(initReactI18next).init({
  resources,
  // lng para pegar da navegação a linguagem
  lng: navigator.language,
  interpolation: {
    // interpolation para evitar injeção xls
    escapeValue: false,
  },
});

export default i18next;

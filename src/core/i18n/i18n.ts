import * as Localization from 'expo-localization';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import {en} from './resources/en';
import {es} from './resources/es';

const getDeviceLanguage = () => {
  const locales = Localization.getLocales();

  const languageCode = locales[0]?.languageCode;

  if (languageCode === 'es') {
    return 'es';
  }

  return 'en';
};

void i18n.use(initReactI18next).init({
  compatibilityJSON: 'v4',
  lng: getDeviceLanguage(),
  fallbackLng: 'en',

  resources: {
    en: {
      translation: en,
    },
    es: {
      translation: es,
    },
  },

  interpolation: {
    escapeValue: false,
  },

  react: {
    useSuspense: false,
  },
});

export default i18n;

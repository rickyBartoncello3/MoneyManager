// src/core/i18n/i18next.d.ts

import 'i18next';
import {en} from './resources/en';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: {
      translation: typeof en;
    };
  }
}

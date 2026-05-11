import {CurrencyCode} from '@/src/domain/currencies/Currency';

export type CurrencyRow = {
  code: CurrencyCode;
  name: string;
  symbol: string;
  minor_units: number;
  is_base: number;
  created_at: string;
  updated_at: string;
};

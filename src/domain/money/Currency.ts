export type CurrencyCode =
  | 'ARS'
  | 'USD'
  | 'EUR'
  | 'GBP'
  | 'JPY'
  | 'CNY'
  | 'BRL'
  | 'INR'
  | 'AUD'
  | 'CAD';

export type Currency = {
  code: CurrencyCode;
  name: string;
  symbol: string;
  minorUnits: number;
  isBase: boolean;
  createdAt: string;
  updatedAt: string;
};

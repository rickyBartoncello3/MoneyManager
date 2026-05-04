export type CurrencyCode = 'ARS' | 'USD' | 'EUR';

export type AccountType = 'cash' | 'bank' | 'creditCard' | 'wallet';

export interface AccountItem {
  id: string;
  name: string;
  type: AccountType;
  currency: CurrencyCode;
  balance: number;
  equivalentInMainCurrency?: number;
  mainCurrency: CurrencyCode;
}

export interface AccountsSummaryProps {
  accounts: AccountItem[];
  mainCurrency?: CurrencyCode;
  title?: string;
  onPressSeeAll?: () => void;
  onPressAccount?: (account: AccountItem) => void;
}

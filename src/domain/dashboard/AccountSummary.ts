import {CurrencyCode} from '@/src/domain/money/Currency';
import {AccountType} from '@/src/domain/accounts/AccountType';

export type AccountSummary = {
  id: string;
  name: string;
  type: AccountType;
  currency: CurrencyCode;
  balance: number;
};

import {CurrencyCode} from '@/src/domain/currencies/Currency';
import {AccountType} from '@/src/domain/accounts/AccountType';
import {IconName} from '@/src/shared/constants/iconNames';

export type AccountSummary = {
  id: string;
  name: string;
  icon: IconName;
  type: AccountType;
  currency: CurrencyCode;
  symbol: string;
  balance: number;
  income: number;
  expense: number;
};

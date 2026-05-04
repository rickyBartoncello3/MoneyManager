import {CurrencyCode} from '../money/Currency';
import {AccountType} from './AccountType';

export type Account = {
  id: string;
  name: string;
  type: AccountType;
  icon: string;
  currencyCode: CurrencyCode;
  initialBalanceMinor: number;
  includeInTotal: boolean;
  archivedAt: string | null;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
};

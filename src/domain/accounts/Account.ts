import {CurrencyCode} from '@/src/domain/currencies/Currency';
import {AccountType} from './AccountType';
import {IconName} from '@/src/shared/constants/iconNames';

export type Account = {
  id: string;
  name: string;
  type: AccountType;
  icon: IconName;
  currencyCode: CurrencyCode;
  initialBalanceMinor: number;
  includeInTotal: boolean;
  archivedAt: string | null;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
};

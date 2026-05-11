import {AccountType} from '@/src/domain/accounts/AccountType';
import {CurrencyCode} from '@/src/domain/currencies/Currency';

export type AccountRow = {
  id: string;
  name: string;
  type: AccountType;
  icon: string;
  currency_code: CurrencyCode;
  initial_balance_minor: number;
  include_in_total: number;
  archived_at: string | null;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
};

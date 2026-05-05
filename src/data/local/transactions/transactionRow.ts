import {CurrencyCode} from '@/src/domain/money/Currency';
import {TransactionType} from '@/src/domain/transactions/TransactionType';

export type TransactionRow = {
  id: string;
  type: TransactionType;
  amount: number;
  currency: CurrencyCode;
  amount_in_main_currency: number;
  main_currency: CurrencyCode;
  account_id: string;
  category_id: string | null;
  occurred_at: string;
  note: string | null;
  exchange_rate_to_main_currency: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
};

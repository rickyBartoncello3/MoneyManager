import {CurrencyCode} from '@/src/domain/currencies/Currency';
import {TransactionType} from '@/src/domain/transactions/TransactionType';

export type TransactionFilters = {
  date?: string;
  type?: TransactionType;
  accountId?: string;
  categoryId?: string;
  currency?: CurrencyCode;
};

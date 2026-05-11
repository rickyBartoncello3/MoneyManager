// src/domain/transactions/TransactionFilters.ts

import {CurrencyCode} from '@/src/domain/currencies/Currency';
import {TransactionType} from '@/src/domain/transactions/TransactionType';

export type TransactionFilters = {
  month?: string;
  type?: TransactionType;
  accountId?: string;
  categoryId?: string;
  currency?: CurrencyCode;
};

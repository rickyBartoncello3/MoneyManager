import {Money} from '@/src/domain/currencies/Money';
import {TransactionType} from './TransactionType';

export type Transaction = {
  id: string;
  type: TransactionType;
  amount: Money;
  amountInMainCurrency: Money;
  accountId: string;
  categoryId?: string;
  occurredAt: string;
  note?: string;
  exchangeRateToMainCurrency: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
};

export interface TransactionCategoryWithTotal {
  id: string;
  total: number;
  type: TransactionType;
}

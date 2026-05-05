import {Money} from '@/src/domain/money/Money';
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

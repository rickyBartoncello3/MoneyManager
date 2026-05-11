import {CurrencyCode} from '@/src/domain/currencies/Currency';
import {TransactionType} from './TransactionType';

export type CreateTransactionInput = {
  type: TransactionType;
  amount: number;
  currency: CurrencyCode;
  accountId: string;
  categoryId?: string;
  occurredAt: string;
  note?: string;
  mainCurrency: CurrencyCode;
  exchangeRateToMainCurrency: number;
};

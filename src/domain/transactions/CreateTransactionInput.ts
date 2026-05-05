import {CurrencyCode} from '@/src/domain/money/Currency';
import {TransactionType} from './TransactionType';

export type CreateTransactionInput = {
  type: Exclude<TransactionType, 'transfer'>;
  amount: number;
  currency: CurrencyCode;
  accountId: string;
  categoryId?: string;
  occurredAt: string;
  note?: string;
  mainCurrency: CurrencyCode;
  exchangeRateToMainCurrency: number;
};

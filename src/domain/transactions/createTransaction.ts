import {generateId} from '@/src/core/id/generateId';
import {now} from '@/src/core/date/now';
import {Transaction} from './Transaction';
import {CreateTransactionInput} from './CreateTransactionInput';

export function createTransaction(input: CreateTransactionInput): Transaction {
  const createdAt = now();

  return {
    id: generateId('tx'),
    type: input.type,
    amount: {
      amount: input.amount,
      currency: input.currency,
    },
    amountInMainCurrency: {
      amount: input.amount * input.exchangeRateToMainCurrency,
      currency: input.mainCurrency,
    },
    accountId: input.accountId,
    categoryId: input.categoryId,
    occurredAt: input.occurredAt,
    note: input.note,
    exchangeRateToMainCurrency: input.exchangeRateToMainCurrency,
    createdAt,
    updatedAt: createdAt,
    deletedAt: null,
  };
}

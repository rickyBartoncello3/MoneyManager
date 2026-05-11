import {Transaction} from '@/src/domain/transactions/Transaction';
import {Account} from '@/src/domain/accounts/Account';
import {
  CategoryOption,
  TransactionMode,
} from '@/src/features/transaction/screens/interfaces';
import {normalizeAmount} from '@/src/shared/utils/normalizeAmount';
import {CurrencyCode} from '@/src/domain/currencies/Currency';
import {now} from '@/src/core/date/now';

type BuildUpdatedTransactionParams = {
  transaction: Transaction;
  transactionId: string;
  selectedAccount: Account;
  transactionMode: TransactionMode;
  selectedCategory: CategoryOption | null;
  amount: string;
  currencyCode: CurrencyCode;
  occurredAt: string;
  note?: string;
};

export const buildUpdatedTransaction = ({
  transaction,
  transactionId,
  selectedAccount,
  transactionMode,
  selectedCategory,
  amount,
  currencyCode,
  note,
  occurredAt,
}: BuildUpdatedTransactionParams): Transaction => {
  const normalizedAmount = normalizeAmount(amount);

  return {
    ...transaction,
    id: transactionId,
    accountId: selectedAccount.id,
    type: transactionMode,
    categoryId: selectedCategory?.id,
    amount: {
      amount: normalizedAmount,
      currency: currencyCode,
    },
    amountInMainCurrency: {
      amount: normalizedAmount,
      currency: currencyCode,
    },
    note,
    occurredAt: occurredAt,
    updatedAt: now(),
  };
};

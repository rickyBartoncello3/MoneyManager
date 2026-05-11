import {Transaction} from '@/src/domain/transactions/Transaction';
import {Account} from '@/src/domain/accounts/Account';
import {Category} from '@/src/domain/categories/Category';
import {
  CategoryOption,
  TransactionMode,
} from '@/src/features/transaction/screens/interfaces';
import dayjs, {Dayjs} from 'dayjs';
import {formatAmount} from '@/src/shared/utils/formatAmount';
import {toCategoryOption} from '@/src/shared/utils/toCategoryOption';

type HydrateTransactionFormParams = {
  transaction: Transaction;
  accounts: Account[];
  categories: Category[];
  setSelectedAccount: (account: Account | undefined) => void;
  setTransactionMode: (mode: TransactionMode) => void;
  setAmount: (amount: string) => void;
  setSelectedDate: (date: Dayjs) => void;
  setNote: (note?: string) => void;
  setSelectedCategory: (category: CategoryOption | null) => void;
};

export const hydrateTransactionForm = ({
  transaction,
  accounts,
  categories,
  setSelectedAccount,
  setTransactionMode,
  setAmount,
  setSelectedDate,
  setNote,
  setSelectedCategory,
}: HydrateTransactionFormParams) => {
  const account = accounts.find(item => item.id === transaction.accountId);

  const category = categories.find(item => item.id === transaction.categoryId);

  setSelectedAccount(account);
  setTransactionMode(transaction.type);
  setAmount(formatAmount(transaction.amount.amount));
  setSelectedDate(dayjs(transaction.occurredAt));
  setNote(transaction.note);
  setSelectedCategory(category ? toCategoryOption(category) : null);
};

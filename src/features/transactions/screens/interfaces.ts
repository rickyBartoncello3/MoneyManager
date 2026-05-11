// src/features/transactions/components/TransactionMovementRow/interfaces.ts

import {Transaction} from '@/src/domain/transactions/Transaction';
import {Category} from '@/src/domain/categories/Category';
import {TransactionGroup} from '@/src/features/transactions/components/TransactionGroupCard/interfaces';

export type GroupMode = 'day' | 'category';

type GroupTransactionsParams = {
  transactions: Transaction[];
  categories: Category[];
  mode: GroupMode;
};

export const formatDay = (date: string) => {
  const parsedDate = new Date(date);

  return parsedDate.toLocaleDateString('es-ARG', {
    month: 'short',
    day: 'numeric',
  });
};

const getSignedAmount = (transaction: Transaction) => {
  if (transaction.type === 'income') {
    return transaction.amountInMainCurrency.amount;
  }

  if (transaction.type === 'expense') {
    return -transaction.amountInMainCurrency.amount;
  }

  return 0;
};

const getCategoryName = (categoryId: string | undefined, categories: Category[]) => {
  if (!categoryId) {
    return 'No category';
  }

  const category = categories.find(item => item.id === categoryId);

  return category?.name ?? 'No category';
};

const getCategorySubtitle = (categoryId: string | undefined, categories: Category[]) => {
  if (!categoryId) {
    return 'Without category';
  }

  const category = categories.find(item => item.id === categoryId);

  if (!category) {
    return 'Without category';
  }

  return category.type === 'income' ? 'Income category' : 'Expense category';
};

export const interfaces = ({
  transactions,
  categories,
  mode,
}: GroupTransactionsParams): TransactionGroup[] => {
  const groups = transactions.reduce<Record<string, TransactionGroup>>(
    (acc, transaction) => {
      let groupId = '';
      let title = '';
      let subtitle = '';

      if (mode === 'day') {
        const dateKey = transaction.occurredAt.slice(0, 10);

        groupId = dateKey;
        title = formatDay(transaction.occurredAt);
        subtitle = dateKey;
      }

      if (mode === 'category') {
        groupId = transaction.categoryId ?? 'no_category';
        title = getCategoryName(transaction.categoryId, categories);
        subtitle = getCategorySubtitle(transaction.categoryId, categories);
      }

      if (!acc[groupId]) {
        acc[groupId] = {
          id: groupId,
          title,
          subtitle,
          total: 0,
          count: 0,
          transactions: [],
        };
      }

      acc[groupId].transactions.push(transaction);
      acc[groupId].total += getSignedAmount(transaction);
      acc[groupId].count += 1;

      return acc;
    },
    {},
  );

  return Object.values(groups).sort((a, b) => {
    if (mode === 'day') {
      return b.id.localeCompare(a.id);
    }

    return Math.abs(b.total) - Math.abs(a.total);
  });
};

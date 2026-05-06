import {
  Transaction,
  TransactionCategoryWithTotal,
} from '@/src/domain/transactions/Transaction';
import {
  CategoryExpenseTotalRow,
  TransactionRow,
} from '@/src/data/local/transactions/transactionRow';

export const transactionMapper = {
  domainToLocalRow(transaction: Transaction): TransactionRow {
    return {
      id: transaction.id,
      type: transaction.type,
      amount: transaction.amount.amount,
      currency: transaction.amount.currency,
      amount_in_main_currency: transaction.amountInMainCurrency.amount,
      main_currency: transaction.amountInMainCurrency.currency,
      account_id: transaction.accountId,
      category_id: transaction.categoryId ?? null,
      occurred_at: transaction.occurredAt,
      note: transaction.note ?? null,
      exchange_rate_to_main_currency: transaction.exchangeRateToMainCurrency,
      created_at: transaction.createdAt,
      updated_at: transaction.updatedAt,
      deleted_at: transaction.deletedAt,
    };
  },

  localRowToDomain(row: TransactionRow): Transaction {
    return {
      id: row.id,
      type: row.type,
      amount: {
        amount: row.amount,
        currency: row.currency,
      },
      amountInMainCurrency: {
        amount: row.amount_in_main_currency,
        currency: row.main_currency,
      },
      accountId: row.account_id,
      categoryId: row.category_id ?? undefined,
      occurredAt: row.occurred_at,
      note: row.note ?? undefined,
      exchangeRateToMainCurrency: row.exchange_rate_to_main_currency,
      createdAt: row.created_at,
      updatedAt: row.updated_at,
      deletedAt: row.deleted_at,
    };
  },

  localRowToCategorySummary(row: CategoryExpenseTotalRow): TransactionCategoryWithTotal {
    return {
      id: row.category_id,
      total: row.total,
      type: row.type,
    };
  },
};

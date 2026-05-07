// src/data/mappers/dashboardMapper.ts

import {AccountSummary} from '@/src/domain/dashboard/AccountSummary';
import {CategoryExpenseSummary} from '@/src/domain/dashboard/CategoryExpenseSummary';
import {
  AccountSummaryRow,
  CategoryExpenseSummaryRow,
} from '@/src/data/local/dashboard/dashboardRows';

export const dashboardMapper = {
  accountSummaryRowToDomain(row: AccountSummaryRow): AccountSummary {
    const income = Number(row.income_total ?? 0);
    const expense = Number(row.expense_total ?? 0);

    return {
      id: row.id,
      name: row.name,
      type: row.type,
      currency: row.currency_code,
      symbol: row.symbol,
      balance: row.initial_balance_minor + income - expense,
    };
  },

  categoryExpenseSummaryRowToDomain(
    row: CategoryExpenseSummaryRow,
    totalSpent: number,
  ): CategoryExpenseSummary {
    return {
      categoryId: row.category_id,
      name: row.category_name,
      color: row.category_color,
      total: Number(row.total),
      percentage: totalSpent === 0 ? 0 : (Number(row.total) / totalSpent) * 100,
    };
  },
};

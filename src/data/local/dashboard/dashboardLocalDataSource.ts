import {db} from '@/src/core/database/db';
import {
  AccountSummaryRow,
  CategoryExpenseSummaryRow,
  SpendingTotalRow,
} from './dashboardRows';
import {getMonthRange} from '@/src/shared/utils/getMonthRange';

export const dashboardLocalDataSource = {
  async getAccountsSummary(): Promise<AccountSummaryRow[]> {
    return db.getAll<AccountSummaryRow>(`
      SELECT
        a.id,
        a.name,
        a.type,
        a.icon,
        a.currency_code,
        c.symbol,
        a.initial_balance_minor,
        COALESCE(SUM(
          CASE
            WHEN t.type = 'income' THEN t.amount
            ELSE 0
          END
        ), 0) as income_total,
        COALESCE(SUM(
          CASE
            WHEN t.type = 'expense' THEN t.amount
            ELSE 0
          END
        ), 0) as expense_total
      FROM accounts a
      LEFT JOIN transactions t
        ON t.account_id = a.id
        AND t.deleted_at IS NULL
      LEFT JOIN currencies c
        ON c.code = a.currency_code
      WHERE a.deleted_at IS NULL
      GROUP BY a.id, a.name, a.type, a.currency_code, a.initial_balance_minor
      ORDER BY a.created_at ASC;
    `);
  },

  async getSpentByMonth(month: string): Promise<number> {
    const {start, end} = getMonthRange(month);
    return this.getSpentBetween(start, end);
  },

  async getIncomeByMonth(month: string): Promise<number> {
    const {start, end} = getMonthRange(month);

    const row = await db.getFirst<SpendingTotalRow>(
      `
      SELECT
        COALESCE(SUM(amount_in_main_currency), 0) as total
      FROM transactions
      WHERE deleted_at IS NULL
        AND type = 'income'
        AND occurred_at >= ?
        AND occurred_at <= ?;
      `,
      [start, end],
    );

    return Number(row?.total ?? 0);
  },

  async getCategoryBreakdownByMonth(
    month: string,
    account_id: string,
  ): Promise<CategoryExpenseSummaryRow[]> {
    const {start, end} = getMonthRange(month);

    return db.getAll<CategoryExpenseSummaryRow>(
      `
      SELECT
        c.id as category_id,
        c.name as category_name,
        c.color as category_color,
        c.icon as category_icon,
        t.account_id,
        t.type,
        COALESCE(SUM(t.amount), 0) as total
      FROM transactions t
      LEFT JOIN categories c ON c.id = t.category_id
      WHERE t.deleted_at IS NULL
        AND t.category_id IS NOT NULL
        AND t.occurred_at >= ?
        AND t.occurred_at <= ?
        AND t.account_id = ?
      GROUP BY c.id, c.name, c.color, c.icon
      ORDER BY total DESC;
      `,
      [start, end, account_id],
    );
  },

  async getSpentBetween(start: string, end: string): Promise<number> {
    const row = await db.getFirst<SpendingTotalRow>(
      `
      SELECT
        COALESCE(SUM(amount), 0) as total
      FROM transactions
      WHERE deleted_at IS NULL
        AND type = 'expense'
        AND occurred_at >= ?
        AND occurred_at <= ?;
      `,
      [start, end],
    );

    return Number(row?.total ?? 0);
  },
};

import {db} from '@/src/core/database/db';
import {TransactionRow} from './transactionRow';

export const transactionLocalDataSource = {
  async findAll(): Promise<TransactionRow[]> {
    return db.getAll<TransactionRow>(`
      SELECT *
      FROM transactions
      WHERE deleted_at IS NULL
      ORDER BY occurred_at DESC;
    `);
  },

  async findByMonth(month: string): Promise<TransactionRow[]> {
    const start = `${month}-01T00:00:00.000Z`;
    const end = `${month}-31T23:59:59.999Z`;

    return db.getAll<TransactionRow>(
      `
      SELECT *
      FROM transactions
      WHERE deleted_at IS NULL
        AND occurred_at >= ?
        AND occurred_at <= ?
      ORDER BY occurred_at DESC;
      `,
      [start, end],
    );
  },

  async insert(row: TransactionRow) {
    await db.run(
      `
      INSERT INTO transactions (
        id,
        type,
        amount,
        currency,
        amount_in_main_currency,
        main_currency,
        account_id,
        category_id,
        occurred_at,
        note,
        exchange_rate_to_main_currency,
        created_at,
        updated_at,
        deleted_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
      `,
      [
        row.id,
        row.type,
        row.amount,
        row.currency,
        row.amount_in_main_currency,
        row.main_currency,
        row.account_id,
        row.category_id,
        row.occurred_at,
        row.note,
        row.exchange_rate_to_main_currency,
        row.created_at,
        row.updated_at,
        row.deleted_at,
      ],
    );
  },
};

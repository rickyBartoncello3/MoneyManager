import {db} from '@/src/core/database/db';
import {AccountRow} from './accountRow';

export const accountLocalDataSource = {
  async count(): Promise<number> {
    const row = await db.getFirst<{total: number}>(`
      SELECT COUNT(*) as total
      FROM accounts
      WHERE deleted_at IS NULL;
    `);

    return Number(row?.total ?? 0);
  },

  async findAll(): Promise<AccountRow[]> {
    return db.getAll<AccountRow>(`
      SELECT *
      FROM accounts
      WHERE deleted_at IS NULL
      ORDER BY created_at ASC;
    `);
  },

  async insertMany(rows: AccountRow[]) {
    await Promise.all(
      rows.map(async row => {
        await db.run(
          `
        INSERT OR IGNORE INTO accounts (
          id,
          name,
          type,
          icon,
          currency_code,
          initial_balance_minor,
          include_in_total,
          archived_at,
          created_at,
          updated_at,
          deleted_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
        `,
          [
            row.id,
            row.name,
            row.type,
            row.icon,
            row.currency_code,
            row.initial_balance_minor,
            row.include_in_total,
            row.archived_at,
            row.created_at,
            row.updated_at,
            row.deleted_at,
          ],
        );
      }),
    );
  },
};

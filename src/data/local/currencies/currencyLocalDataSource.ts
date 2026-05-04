import {db} from '@/src/core/database/db';
import {CurrencyRow} from './currencyRow';

export const currencyLocalDataSource = {
  async count(): Promise<number> {
    const row = await db.getFirst<{total: number}>(`
      SELECT COUNT(*) as total
      FROM currencies;
    `);

    return Number(row?.total ?? 0);
  },

  async findAll(): Promise<CurrencyRow[]> {
    return db.getAll<CurrencyRow>(`
      SELECT *
      FROM currencies
      ORDER BY is_base DESC, code ASC;
    `);
  },

  async insertMany(rows: CurrencyRow[]) {
    for (const row of rows) {
      await db.run(
        `
        INSERT OR IGNORE INTO currencies (
          code,
          name,
          symbol,
          minor_units,
          is_base,
          created_at,
          updated_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?);
        `,
        [
          row.code,
          row.name,
          row.symbol,
          row.minor_units,
          row.is_base,
          row.created_at,
          row.updated_at,
        ],
      );
    }
  },
};

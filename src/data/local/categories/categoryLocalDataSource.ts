import {db} from '@/src/core/database/db';
import {CategoryRow} from './categoryRow';

export const categoryLocalDataSource = {
  async count(): Promise<number> {
    const row = await db.getFirst<{total: number}>(`
            SELECT COUNT(*) as total
            FROM categories
            WHERE deleted_at IS NULL;
        `);

    return Number(row?.total ?? 0);
  },

  async findAll(): Promise<CategoryRow[]> {
    return db.getAll<CategoryRow>(`
            SELECT *
            FROM categories
            WHERE deleted_at IS NULL
            ORDER BY type ASC, name ASC;
        `);
  },

  async insertMany(rows: CategoryRow[]) {
    for (const row of rows) {
      await db.run(
        `
                    INSERT OR IGNORE INTO categories (
          id,
          name,
          type,
          icon,
          color,
          archived_at,
          created_at,
          updated_at,
          deleted_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);
                `,
        [
          row.id,
          row.name,
          row.type,
          row.icon,
          row.color,
          row.archived_at,
          row.created_at,
          row.updated_at,
          row.deleted_at,
        ],
      );
    }
  },
};

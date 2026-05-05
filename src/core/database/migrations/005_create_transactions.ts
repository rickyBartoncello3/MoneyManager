import {db} from '@/src/core/database/db';

export async function createTransactionsTable() {
  await db.exec(`
    CREATE TABLE IF NOT EXISTS transactions (
      id TEXT PRIMARY KEY NOT NULL,
      type TEXT NOT NULL,
      amount REAL NOT NULL,
      currency TEXT NOT NULL,
      amount_in_main_currency REAL NOT NULL,
      main_currency TEXT NOT NULL,
      account_id TEXT NOT NULL,
      category_id TEXT,
      occurred_at TEXT NOT NULL,
      note TEXT,
      exchange_rate_to_main_currency REAL NOT NULL,
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL,
      deleted_at TEXT
    );
  `);
}

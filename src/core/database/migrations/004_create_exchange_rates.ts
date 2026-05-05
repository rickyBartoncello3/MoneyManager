import {db} from '@/src/core/database/db';

export async function createExchangeRatesTable() {
  await db.exec(`
    CREATE TABLE IF NOT EXISTS exchange_rates (
      id TEXT PRIMARY KEY NOT NULL,
      from_currency TEXT NOT NULL,
      to_currency TEXT NOT NULL,
      buy REAL NOT NULL,
      sell REAL NOT NULL,
      fetched_at TEXT NOT NULL,
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL
    );
  `);
}

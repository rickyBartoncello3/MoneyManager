import {db} from '../db';

export async function createCurrenciesTable() {
  await db.exec(`
    CREATE TABLE IF NOT EXISTS currencies (
      code TEXT PRIMARY KEY NOT NULL,
      name TEXT NOT NULL,
      symbol TEXT NOT NULL,
      minor_units INTEGER NOT NULL DEFAULT 2,
      is_base INTEGER NOT NULL DEFAULT 0,
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL
    );
  `);
}

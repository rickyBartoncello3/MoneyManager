import {db} from '../db';

export async function createAccountsTable() {
  await db.exec(`
        CREATE TABLE IF NOT EXISTS accounts (
                                                id TEXT PRIMARY KEY NOT NULL,
                                                name TEXT NOT NULL,
                                                type TEXT NOT NULL,
                                                icon TEXT NOT NULL,
                                                currency_code TEXT NOT NULL,
                                                initial_balance_minor INTEGER NOT NULL DEFAULT 0,
                                                include_in_total INTEGER NOT NULL DEFAULT 1,
                                                archived_at TEXT,
                                                created_at TEXT NOT NULL,
                                                updated_at TEXT NOT NULL,
                                                deleted_at TEXT,

                                                FOREIGN KEY (currency_code) REFERENCES currencies(code)
            );
    `);
}

import {db} from '../db';

export async function createCategoriesTable() {
  await db.exec(`
        CREATE TABLE IF NOT EXISTS categories (
                                                  id TEXT PRIMARY KEY NOT NULL,
                                                  name TEXT NOT NULL,
                                                  type TEXT NOT NULL,
                                                  icon TEXT NOT NULL,
                                                  color TEXT NOT NULL,
                                                  background_color TEXT NOT NULL, 
                                                  archived_at TEXT,
                                                  created_at TEXT NOT NULL,
                                                  updated_at TEXT NOT NULL,
                                                  deleted_at TEXT
        );
    `);
}

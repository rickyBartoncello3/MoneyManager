import * as SQLite from 'expo-sqlite';

let database: SQLite.SQLiteDatabase | null = null;

export async function getDatabase() {
  if (!database) {
    database = await SQLite.openDatabaseAsync('finance_v2.db');
  }

  return database;
}

export const db = {
  async exec(sql: string) {
    const database = await getDatabase();
    return database.execAsync(sql);
  },

  async run(sql: string, params: SQLite.SQLiteBindParams = []) {
    const database = await getDatabase();
    return database.runAsync(sql, params);
  },

  async getAll<T>(sql: string, params: SQLite.SQLiteBindParams = []) {
    const database = await getDatabase();
    return database.getAllAsync<T>(sql, params);
  },

  async getFirst<T>(sql: string, params: SQLite.SQLiteBindParams = []) {
    const database = await getDatabase();
    return database.getFirstAsync<T>(sql, params);
  },
};

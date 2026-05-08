import {CurrencyCode} from '@/src/domain/money/Currency';
import {storage} from '@/src/core/storage/asyncStorage';
export type ThemeMode = 'light' | 'dark' | 'system';

export const settingsLocalDataSource = {
  async getTheme(): Promise<ThemeMode> {
    const theme = await storage.getString('theme');

    return (theme as ThemeMode) ?? 'system';
  },

  async setTheme(theme: ThemeMode) {
    await storage.set('theme', theme);
  },

  async getAccountCurrency(): Promise<CurrencyCode> {
    const currency = await storage.getString('accountCurrency');

    return (currency as CurrencyCode) ?? 'ARS';
  },

  async setAccountCurrency(account: string) {
    await storage.set('accountCurrency', account);
  },
};

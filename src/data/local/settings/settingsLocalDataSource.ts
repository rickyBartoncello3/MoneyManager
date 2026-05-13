import {CurrencyCode} from '@/src/domain/currencies/Currency';
import {storage} from '@/src/core/storage/asyncStorage';
import {DEFAULT_CURRENCY_CODE} from '@/src/constants/settings';
import {now} from '@/src/core/date/now';
export type ThemeMode = 'light' | 'dark' | 'system';

export const settingsLocalDataSource = {
  async getTheme(): Promise<ThemeMode> {
    const theme = await storage.getString('theme');

    return (theme as ThemeMode) ?? 'system';
  },

  async setTheme(theme: ThemeMode) {
    await storage.set('theme', theme);
  },

  async getAccountCurrent(): Promise<CurrencyCode> {
    const currency = await storage.getString('accountCurrency');

    return (currency as CurrencyCode) ?? DEFAULT_CURRENCY_CODE;
  },

  async setAccountCurrent(account: string) {
    await storage.set('accountCurrency', account);
  },

  async getFocusDate(): Promise<string> {
    const focusDate = await storage.getString('focusDate');

    return (focusDate as string) ?? now();
  },

  async setFocusDate(focusDate: string) {
    await storage.set('focusDate', focusDate);
  },
};

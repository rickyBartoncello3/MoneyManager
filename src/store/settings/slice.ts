import {create} from 'zustand';
import {
  settingsLocalDataSource,
  ThemeMode,
} from '@/src/data/local/settings/settingsLocalDataSource';

type State = {
  theme: ThemeMode;
  accountIdCurrency: string;
};

const initialState: State = {
  theme: 'system',
  accountIdCurrency: 'acc_cash_ars',
};

type Action = {
  theme: ThemeMode;
  accountIdCurrency: string;
  setTheme: (theme: ThemeMode) => void;
  setAccountCurrency: (account: string) => void;
  hydrate: () => Promise<void>;
};

export const useSettingsStore = create<State & Action>(set => ({
  ...initialState,

  setTheme: theme => {
    settingsLocalDataSource.setTheme(theme);
    set({theme});
  },

  setAccountCurrency: account => {
    settingsLocalDataSource.setAccountCurrency(account);
    set({accountIdCurrency: account});
  },

  hydrate: async () => {
    const theme = await settingsLocalDataSource.getTheme();
    const currency = await settingsLocalDataSource.getAccountCurrency();

    set({
      theme,
      accountIdCurrency: currency,
    });
  },
}));

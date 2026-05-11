import {create} from 'zustand';
import {
  settingsLocalDataSource,
  ThemeMode,
} from '@/src/data/local/settings/settingsLocalDataSource';

type State = {
  theme: ThemeMode;
  accountIdCurrent: string;
};

const initialState: State = {
  theme: 'system',
  accountIdCurrent: 'acc_cash_ars',
};

type Action = {
  theme: ThemeMode;
  accountIdCurrent: string;
  setTheme: (theme: ThemeMode) => void;
  setAccountCurrent: (account: string) => void;
  hydrate: () => Promise<void>;
};

export const useSettingsStore = create<State & Action>(set => ({
  ...initialState,

  setTheme: theme => {
    settingsLocalDataSource.setTheme(theme);
    set({theme});
  },

  setAccountCurrent: account => {
    settingsLocalDataSource.setAccountCurrent(account);
    set({accountIdCurrent: account});
  },

  hydrate: async () => {
    const theme = await settingsLocalDataSource.getTheme();
    const current = await settingsLocalDataSource.getAccountCurrent();

    set({
      theme,
      accountIdCurrent: current,
    });
  },
}));

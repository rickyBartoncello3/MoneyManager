import {create} from 'zustand';
import {
  settingsLocalDataSource,
  ThemeMode,
} from '@/src/data/local/settings/settingsLocalDataSource';
import {now} from '@/src/core/date/now';

type State = {
  theme: ThemeMode;
  accountIdCurrent: string;
  focusDate: string;
};

const initialState: State = {
  theme: 'system',
  accountIdCurrent: 'acc_cash_ars',
  focusDate: now(),
};

type Action = {
  theme: ThemeMode;
  accountIdCurrent: string;
  setTheme: (theme: ThemeMode) => void;
  setAccountCurrent: (account: string) => void;
  focusDate: string;
  setFocusDate: (date: string) => void;
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

  setFocusDate: focusDate => {
    settingsLocalDataSource.setFocusDate(focusDate);
    set({focusDate});
  },

  hydrate: async () => {
    const theme = await settingsLocalDataSource.getTheme();
    const current = await settingsLocalDataSource.getAccountCurrent();
    const focusDate = await settingsLocalDataSource.getFocusDate();

    set({
      theme,
      accountIdCurrent: current,
      focusDate,
    });
  },
}));

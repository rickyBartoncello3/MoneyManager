import {PropsWithChildren, createContext, useEffect, useState} from 'react';

import {useColorScheme} from 'react-native';
import {AppTheme, darkTheme, lightTheme, ThemeColors} from '@/src/shared/theme/theme';

interface ThemeContextProps {
  currentTheme: AppTheme;
  colors: ThemeColors;
  isDark: boolean;
  setTheme: (theme: AppTheme) => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: PropsWithChildren) => {
  const colorScheme = useColorScheme();
  const [currentTheme, setCurrentTheme] = useState<AppTheme>(lightTheme);

  const isDark = currentTheme === darkTheme;
  const colors = isDark ? darkTheme.colors : lightTheme.colors;

  useEffect(() => {
    if (colorScheme === 'dark') {
      setCurrentTheme(darkTheme);
    } else {
      setCurrentTheme(lightTheme);
    }
  }, [colorScheme]);

  const setTheme = (theme: AppTheme) => {
    setCurrentTheme(theme);
  };

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        isDark,
        colors,
        setTheme: setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

import {PropsWithChildren, createContext, useContext, useEffect, useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {bootstrapApp} from '@/src/application/bootstrap/bootstrap';

type DatabaseContextValue = {
  isDatabaseReady: boolean;
};

const DatabaseContext = createContext<DatabaseContextValue>({
  isDatabaseReady: false,
});

export const DatabaseProvider = ({children}: PropsWithChildren) => {
  const [isDatabaseReady, setIsDatabaseReady] = useState(false);

  useEffect(() => {
    const initializeDatabase = async () => {
      try {
        await bootstrapApp();
        setIsDatabaseReady(true);
      } catch (error) {
        console.error('[DATABASE INIT ERROR]', error);
      }
    };

    initializeDatabase();
  }, []);

  if (!isDatabaseReady) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <DatabaseContext.Provider value={{isDatabaseReady}}>
      {children}
    </DatabaseContext.Provider>
  );
};

export const useDatabase = () => {
  return useContext(DatabaseContext);
};

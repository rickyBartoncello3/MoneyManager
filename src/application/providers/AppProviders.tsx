import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {QueryProvider} from '@/src/application/providers/QueryProvider';
import {DatabaseProvider} from '@/src/application/providers/DatabaseProvider';

export function AppProviders({children}: {children: React.ReactNode}) {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <DatabaseProvider>
        <QueryProvider>{children}</QueryProvider>
      </DatabaseProvider>
    </GestureHandlerRootView>
  );
}

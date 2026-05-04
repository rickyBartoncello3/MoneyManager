import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {QueryProvider} from '@/src/application/providers/QueryProvider';

export function AppProviders({children}: {children: React.ReactNode}) {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <QueryProvider>{children}</QueryProvider>
    </GestureHandlerRootView>
  );
}

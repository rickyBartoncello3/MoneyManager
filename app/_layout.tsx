import FontAwesome from '@expo/vector-icons/FontAwesome';
import {useFonts} from 'expo-font';
import {Stack} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import 'react-native-reanimated';

import {PaperProvider} from 'react-native-paper';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {AppProviders} from '@/src/application/providers/AppProviders';
import {ThemeProvider} from '@/src/application/providers/ThemeProvider';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../src//assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <AppProviders>
      <ThemeProvider>
        <PaperProvider>
          <BottomSheetModalProvider>
            <Stack screenOptions={{headerShown: false}}>
              <Stack.Screen name="(tabs)" />
              <Stack.Screen name="modal" options={{presentation: 'modal'}} />
            </Stack>
          </BottomSheetModalProvider>
        </PaperProvider>
      </ThemeProvider>
    </AppProviders>
  );
}

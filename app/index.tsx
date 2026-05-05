import {StyleSheet, Text, View} from 'react-native';
import {DashboardScreen} from '@/src/features/dashboard/screens/DashboardScreen';
import {Redirect} from 'expo-router';

export default function Page() {
  return <Redirect href="/(tabs)" />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    maxWidth: 960,
    marginHorizontal: 'auto',
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 36,
    color: '#38434D',
  },
});

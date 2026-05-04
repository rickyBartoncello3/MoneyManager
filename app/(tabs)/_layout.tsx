import React from 'react';
import {Tabs} from 'expo-router';
import TabBar from '@/src/shared/components/ui/TabBar/TabBar';
import {TabRoutes} from '@/src/constants/tabRoutes';

export default function TabLayout() {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <TabBar {...props} />}
    >
      <Tabs.Screen
        name={TabRoutes.HOME}
        options={{
          title: 'Home',
          tabBarLabel: 'Home',
        }}
      />

      <Tabs.Screen
        name={TabRoutes.TRANSACTIONS}
        options={{
          title: 'Transactions',
          tabBarLabel: 'Transactions',
        }}
      />

      <Tabs.Screen
        name={TabRoutes.ADD}
        options={{
          title: '',
          tabBarLabel: '',
        }}
      />

      <Tabs.Screen
        name={TabRoutes.REPORTS}
        options={{
          title: 'Reports',
          tabBarLabel: 'Reports',
        }}
      />

      <Tabs.Screen
        name={TabRoutes.SETTINGS}
        options={{
          title: 'More',
          tabBarLabel: 'More',
        }}
      />
    </Tabs>
  );
}

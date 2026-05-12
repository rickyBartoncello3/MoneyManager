import React from 'react';
import {Tabs} from 'expo-router';
import TabBar from '@/src/shared/components/ui/TabBar/TabBar';
import {TabRoutes} from '@/src/constants/tabRoutes';
import {useTranslation} from 'react-i18next';

export default function TabLayout() {
  const {t} = useTranslation();
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
          tabBarLabel: t('tabs.home'),
        }}
      />

      <Tabs.Screen
        name={TabRoutes.TRANSACTIONS}
        options={{
          title: 'Transactions',
          tabBarLabel: t('tabs.transactions'),
        }}
      />

      <Tabs.Screen
        name={TabRoutes.ADD}
        options={{
          title: 'Add',
          tabBarLabel: 'Add',
        }}
      />

      <Tabs.Screen
        name={TabRoutes.REPORTS}
        options={{
          title: 'Reports',
          tabBarLabel: t('tabs.reports'),
        }}
      />

      <Tabs.Screen
        name={TabRoutes.SETTINGS}
        options={{
          title: 'More',
          tabBarLabel: t('tabs.more'),
        }}
      />
    </Tabs>
  );
}

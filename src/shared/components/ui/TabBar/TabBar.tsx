import React, {useContext, useRef} from 'react';
import {View} from 'react-native';
import styles from './TabBar.styles';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {ThemeContext} from '@/src/application/providers/ThemeProvider';
import TabBarAddButton from '@/src/shared/components/ui/TabBarAddButton/TabBarAddButton';
import TabBarButton from '@/src/shared/components/ui/TabBarButton/TabBarButton';
import {TabBarIcon} from '@/src/shared/components/ui/TabBarIcon/TabBarIcon';
import {AddTransactionBottomSheet} from '@/src/shared/components/ui/AddTransactionSheet/AddTransactionSheet';
import {TabRoutes} from '@/src/constants/tabRoutes';
import {BlurView} from 'expo-blur';

const TabBar = ({state, descriptors, navigation}: BottomTabBarProps) => {
  const {isDark} = useContext(ThemeContext);
  const addSheetRef = useRef<BottomSheetModal>(null);

  const openAddSheet = () => {
    addSheetRef.current?.present();
  };

  return (
    <BlurView intensity={55} tint={isDark ? 'dark' : 'light'} style={styles.root}>
      <View
        style={[
          styles.blurOverlay,
          {
            backgroundColor: isDark
              ? 'rgba(20, 20, 20, 0.55)'
              : 'rgba(255, 255, 255, 0.55)',
          },
        ]}
      />
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented && route.name !== TabRoutes.ADD) {
            return navigation.navigate(route.name, route.params);
          }
          openAddSheet();
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return route.name === TabRoutes.ADD ? (
          <TabBarAddButton key={route.key} isFocused={isFocused} onPress={onPress} />
        ) : (
          <TabBarButton
            key={route.key}
            title={label}
            renderIcon={({color, strokeWidth}) => (
              <TabBarIcon
                name={String(label).toLowerCase()}
                color={color}
                strokeWidth={strokeWidth}
              />
            )}
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            isFocused={isFocused}
          />
        );
      })}
      <AddTransactionBottomSheet
        bottomSheetRef={addSheetRef}
        onPressIncome={() => {
          console.log('Navigate to Add Income');
        }}
        onPressExpense={() => {
          console.log('Navigate to Add Expense');
        }}
      />
    </BlurView>
  );
};

export default TabBar;

import React, {use} from 'react';
import {View} from 'react-native';
import styles from './TabBar.styles';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {ThemeContext} from '@/src/application/providers/ThemeProvider';
import TabBarAddButton from '@/src/shared/components/ui/TabBarAddButton/TabBarAddButton';
import TabBarButton from '@/src/shared/components/ui/TabBarButton/TabBarButton';
import {CustomIcon} from '@/src/shared/components/ui/TabBarIcon/CustomIcon';
import {TabRoutes} from '@/src/constants/tabRoutes';
import {BlurView} from 'expo-blur';
import {router} from 'expo-router';

const TabBar = ({state, descriptors, navigation}: BottomTabBarProps) => {
  const {isDark} = use(ThemeContext);

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

          if (!isFocused && !event.defaultPrevented) {
            if (route.name !== TabRoutes.ADD) {
              return navigation.navigate(route.name, route.params);
            } else {
              return router.push({
                pathname: '/add-transaction',
              });
            }
          }
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
              <CustomIcon
                name={String(options.title).toLowerCase()}
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
    </BlurView>
  );
};

export default TabBar;

import {BottomTabBarButtonProps} from '@react-navigation/bottom-tabs';
import {ReactNode} from 'react';

export interface TabBarButtonProps extends BottomTabBarButtonProps {
  title: string;
  isFocused: boolean;
  renderIcon: (props: {color: string; strokeWidth?: number}) => ReactNode;
}

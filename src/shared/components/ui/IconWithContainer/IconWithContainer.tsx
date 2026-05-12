import React, {use} from 'react';
import {View} from 'react-native';
import styles from './AccountSelector.styles';
import {IconWithContainerProps} from './interfaces';
import {ThemeContext} from '@/src/application/providers/ThemeProvider';
import {CustomIcon} from '@/src/shared/components/ui/TabBarIcon/CustomIcon';

export const IconWithContainer = ({
  icon,
  backgroundColor,
  color,
}: IconWithContainerProps) => {
  const {colors} = use(ThemeContext);

  return (
    <View
      style={[styles.root, {backgroundColor: backgroundColor ?? colors.badgeBackground}]}
    >
      <CustomIcon name={icon} color={color ?? colors.badgeText} />
    </View>
  );
};

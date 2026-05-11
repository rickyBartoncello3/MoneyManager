import React, {FC, use} from 'react';
import {TouchableOpacity, View, TouchableOpacityProps} from 'react-native';
import styles from './TabBarAddButton.styles';
import {TabBarButtonProps} from './interfaces';
import {AddCircleIcon} from '../../../assets/icons';
import {ThemeContext} from '@/src/application/providers/ThemeProvider';

const TabBarAddButton: FC<TabBarButtonProps & TouchableOpacityProps> = ({
  isFocused,
  ...props
}) => {
  const {currentTheme} = use(ThemeContext);

  return (
    <TouchableOpacity {...props} style={styles.root}>
      <View style={[styles.container, {backgroundColor: currentTheme.colors.background}]}>
        <AddCircleIcon
          color={'white'}
          width={60}
          height={60}
          fill={currentTheme.colors.primary}
        />
      </View>
    </TouchableOpacity>
  );
};

export default TabBarAddButton;

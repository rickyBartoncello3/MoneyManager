import React, {FC, use} from 'react';
import {View, TouchableOpacityProps} from 'react-native';
import styles from './TabBarAddButton.styles';
import {TabBarButtonProps} from './interfaces';
import {ThemeContext} from '@/src/application/providers/ThemeProvider';
import {TouchableRipple} from 'react-native-paper';
import {CustomIcon} from '@/src/shared/components/ui/TabBarIcon/CustomIcon';
import {ICON_NAMES} from '@/src/shared/constants/iconNames';

const TabBarAddButton: FC<TabBarButtonProps & TouchableOpacityProps> = ({
  isFocused,
  ...props
}) => {
  const {currentTheme} = use(ThemeContext);

  return (
    <TouchableRipple {...props} style={styles.root}>
      <View style={[styles.container, {backgroundColor: currentTheme.colors.background}]}>
        <CustomIcon
          name={ICON_NAMES.ADD_CIRCLE}
          size={60}
          color={'white'}
          fillColor={currentTheme.colors.primary}
        />
      </View>
    </TouchableRipple>
  );
};

export default TabBarAddButton;

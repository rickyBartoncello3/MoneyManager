import React, {FC, useContext, useMemo} from 'react';
import {View, TouchableOpacityProps} from 'react-native';
import styles from './TabBarButton.styles';
import {TabBarButtonProps} from './interfaces';
import {ThemeContext} from '@/src/application/providers/ThemeProvider';
import Text from '@/src/shared/components/ui/Text/Text';
import {TouchableRipple} from 'react-native-paper';

const TabBarButton: FC<TabBarButtonProps & TouchableOpacityProps> = ({
  title,
  renderIcon,
  isFocused,
  ...props
}) => {
  const {colors, currentTheme} = useContext(ThemeContext);
  const tabLabel = useMemo(() => currentTheme.tabLabel, [currentTheme.tabLabel]);

  return (
    <TouchableRipple borderless {...props} style={styles.root}>
      <View style={styles.container}>
        <View style={styles.iconWrapper}>
          {renderIcon({
            color: isFocused ? colors.tabActive : colors.tabInactive,
            strokeWidth: isFocused ? 2 : undefined,
          })}
        </View>
        <Text
          size={tabLabel.fontSize}
          weight={isFocused ? Number(tabLabel.fontWeight) : 400}
          style={[
            styles.label,
            {
              color: isFocused ? tabLabel.activeColor : tabLabel.inactiveColor,
            },
          ]}
        >
          {title}
        </Text>
      </View>
    </TouchableRipple>
  );
};

export default TabBarButton;

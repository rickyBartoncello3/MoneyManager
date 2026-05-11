import React, {use, useContext} from 'react';
import {TouchableOpacity, View} from 'react-native';

import Text from '@/src/shared/components/ui/Text/Text';
import {ThemeContext} from '@/src/application/providers/ThemeProvider';

import styles from './Box.styles';
import {CustomIcon} from '@/src/shared/components/ui/TabBarIcon/CustomIcon';
import {ICON_NAMES} from '@/src/shared/constants/iconNames';
import {BoxProps} from '@/src/features/transaction/components/Box/interfaces';
import {Card} from '@/src/shared/components/ui/Card/Card';

export const Box = ({title, subTitle, icon, onPress}: BoxProps) => {
  const {colors} = use(ThemeContext);
  return (
    <Card style={styles.root}>
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <View
          style={[
            styles.categoryEmptyIcon,
            icon &&
              icon.backgroundColor && {
                borderWidth: 0,
                backgroundColor: icon.backgroundColor,
              },
          ]}
        >
          {icon ? <CustomIcon name={icon.name} color={icon.color} size={18} /> : null}
        </View>
        <View style={styles.titleContainer}>
          <Text weight={700} size={12} style={styles.title}>
            {title}
          </Text>
          {typeof subTitle === 'string' ? (
            <Text weight={700} size={12}>
              {subTitle}
            </Text>
          ) : (
            subTitle
          )}
        </View>
        <CustomIcon name={ICON_NAMES.ARROW_RIGHT} size={20} color={colors.text} />
      </TouchableOpacity>
    </Card>
  );
};

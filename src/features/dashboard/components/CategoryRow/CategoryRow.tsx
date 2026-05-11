import React, {use} from 'react';
import styles from './CategoryRow.styles';
import {View} from 'react-native';
import {CategoryRowProps} from './interfaces';
import {ThemeContext} from '@/src/application/providers/ThemeProvider';
import Text from '@/src/shared/components/ui/Text/Text';
import {formatMoney} from '@/src/shared/utils/formatMoney';
import {TouchableRipple} from 'react-native-paper';

export const CategoryRow = ({
  category,
  currencySymbol = '$',
  onPress,
}: CategoryRowProps) => {
  const {colors} = use(ThemeContext);

  return (
    <TouchableRipple onPress={() => onPress?.(category)}>
      <View style={styles.container}>
        <View style={styles.leftContent}>
          <View
            style={[
              styles.dot,
              {
                backgroundColor: category.color,
              },
            ]}
          />
          <Text
            size={12}
            weight={700}
            numberOfLines={1}
            style={[
              styles.name,
              {
                color: colors.text,
              },
            ]}
          >
            {category.name}
          </Text>
        </View>

        <View style={styles.rightContent}>
          <Text
            size={12}
            weight={800}
            style={[
              {
                color: colors.text,
              },
            ]}
          >
            {formatMoney(category.total, currencySymbol)}
          </Text>

          <Text
            size={10}
            weight={600}
            style={[
              {
                color: colors.textSecondary,
              },
            ]}
          >
            {category.percentage.toFixed(0)}%
          </Text>
        </View>
      </View>
    </TouchableRipple>
  );
};

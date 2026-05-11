import React, {use} from 'react';
import {View} from 'react-native';
import styles from './HeroCard.styles';
import {ThemeContext} from '@/src/application/providers/ThemeProvider';
import Text from '@/src/shared/components/ui/Text/Text';
import {formatMoney} from '@/src/shared/utils/formatMoney';
import {MetricProps} from '@/src/features/dashboard/components/HeroCard/interfaces';

export const Metric = ({title, amount, currencySymbol = '$'}: MetricProps) => {
  const {colors} = use(ThemeContext);

  return (
    <View style={styles.metric}>
      <Text
        size={10}
        weight={500}
        style={[
          {
            color: colors.balanceCardMutedText,
          },
        ]}
      >
        {title}
      </Text>
      <Text
        size={14}
        weight={800}
        style={[
          {
            color: colors.balanceCardText,
          },
        ]}
      >
        {formatMoney(amount, currencySymbol)}
      </Text>
    </View>
  );
};

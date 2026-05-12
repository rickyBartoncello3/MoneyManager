import React, {use} from 'react';
import {View} from 'react-native';
import styles from './Metric.styles';
import {ThemeContext} from '@/src/application/providers/ThemeProvider';
import Text from '@/src/shared/components/ui/Text/Text';
import {formatMoney} from '@/src/shared/utils/formatMoney';
import {MetricProps} from '@/src/features/dashboard/components/Metric/interfaces';
import {IconWithContainer} from '@/src/shared/components/ui/IconWithContainer/IconWithContainer';

export const Metric = ({
  icon,
  title,
  amount,
  currencySymbol = '$',
  color,
  backgroundColor,
}: MetricProps) => {
  const {colors} = use(ThemeContext);

  return (
    <View style={styles.metric}>
      <IconWithContainer icon={icon} color={color} backgroundColor={backgroundColor} />
      <View>
        <Text size={10} weight={500} style={{color: colors.balanceCardMutedText}}>
          {title}
        </Text>
        <Text size={14} weight={800} style={{color: colors.balanceCardText}}>
          {formatMoney(amount, currencySymbol)}
        </Text>
      </View>
    </View>
  );
};

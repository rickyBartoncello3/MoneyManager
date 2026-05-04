import React, {useContext} from 'react';
import {View} from 'react-native';
import styles from './Highlight.styles';
import {ThemeContext} from '@/src/application/providers/ThemeProvider';
import {
  HighlightItem,
  HighlightsProps,
} from '@/src/features/dashboard/components/Highlight/interfaces';
import Text from '@/src/shared/components/ui/Text/Text';
import {HighlightCard} from '@/src/features/dashboard/components/HighlightCard/HighlightCard';

export const Highlights = ({
  weeklyPercentage,
  monthlyPercentage,
  weeklyValues,
  monthlyValues,
}: HighlightsProps) => {
  const {colors} = useContext(ThemeContext);

  const items: HighlightItem[] = [
    {
      id: 'weekly-spending',
      title: 'Gasto semanal',
      subtitle: 'vs. semana anterior',
      percentage: weeklyPercentage,
      trend: weeklyPercentage > 0 ? 'up' : weeklyPercentage < 0 ? 'down' : 'neutral',
      chartType: 'bar',
      values: weeklyValues,
    },
    {
      id: 'monthly-spending',
      title: 'Gasto mensual',
      subtitle: 'vs. mes anterior',
      percentage: monthlyPercentage,
      trend: monthlyPercentage > 0 ? 'up' : monthlyPercentage < 0 ? 'down' : 'neutral',
      chartType: 'line',
      values: monthlyValues,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text
          size={14}
          weight={800}
          style={[
            {
              color: colors.text,
            },
          ]}
        >
          Destacados
        </Text>
      </View>

      <View style={styles.cardsContainer}>
        {items.map(item => (
          <HighlightCard key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
};

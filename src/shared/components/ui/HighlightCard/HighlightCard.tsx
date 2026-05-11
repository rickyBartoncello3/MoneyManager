import React, {use, useContext} from 'react';
import {HighlightCardProps} from '@/src/shared/components/ui/Highlight/interfaces';
import {ThemeContext} from '@/src/application/providers/ThemeProvider';
import {Card} from '@/src/shared/components/ui/Card/Card';
import {HighlightHeader} from '@/src/shared/components/ui/HighlightHeader/HighlightHeader';
import {getPercentageLabel} from '@/src/shared/utils/getPercentageLabel';
import Text from '@/src/shared/components/ui/Text/Text';

export const HighlightCard = ({item}: HighlightCardProps) => {
  const {colors} = use(ThemeContext);

  const isPositiveForSpending = item.value < 0;

  const percentageColor = isPositiveForSpending
    ? colors.positive
    : item.value > 0
      ? colors.negative
      : colors.textSecondary;

  return (
    <Card>
      <HighlightHeader item={item} />
      <Text
        size={20}
        weight={800}
        style={{
          color: percentageColor,
        }}
      >
        {getPercentageLabel(item.value)}
      </Text>
    </Card>
  );
};

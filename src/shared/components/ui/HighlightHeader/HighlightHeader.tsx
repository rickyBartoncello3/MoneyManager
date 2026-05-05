import React, {useContext} from 'react';
import {View} from 'react-native';
import styles from './HighlightHeader.styles';
import {Chart01Icon, Chart03Icon} from '../../../assets/icons';
import {HighlightHeaderProps} from '@/src/shared/components/ui/HighlightHeader/interfaces';
import {ThemeContext} from '@/src/application/providers/ThemeProvider';
import Text from '@/src/shared/components/ui/Text/Text';

export const HighlightHeader = ({item}: HighlightHeaderProps) => {
  const {colors} = useContext(ThemeContext);
  return (
    <View style={styles.header}>
      <View
        style={[
          styles.iconBubble,
          {
            backgroundColor: colors.badgeBackground,
          },
        ]}
      >
        {item.chartType === 'bar' ? (
          <Chart01Icon color={colors.badgeText} />
        ) : (
          <Chart03Icon color={colors.badgeText} />
        )}
      </View>
      <View>
        <Text
          size={12}
          weight={700}
          numberOfLines={1}
          style={[
            {
              color: colors.text,
            },
          ]}
        >
          {item.title}
        </Text>
        <Text
          size={8}
          weight={500}
          numberOfLines={1}
          style={[
            {
              color: colors.textSecondary,
            },
          ]}
        >
          {item.subtitle}
        </Text>
      </View>
    </View>
  );
};

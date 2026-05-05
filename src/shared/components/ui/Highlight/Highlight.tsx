import React, {useContext} from 'react';
import {View} from 'react-native';
import styles from './Highlight.styles';
import {ThemeContext} from '@/src/application/providers/ThemeProvider';
import {
  HighlightItem,
  HighlightsProps,
} from '@/src/shared/components/ui/Highlight/interfaces';
import Text from '@/src/shared/components/ui/Text/Text';
import {HighlightCard} from '@/src/shared/components/ui/HighlightCard/HighlightCard';

export const Highlights = ({highlightedItems}: HighlightsProps) => {
  const {colors} = useContext(ThemeContext);

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
        {highlightedItems.map(item => (
          <HighlightCard key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
};

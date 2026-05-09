import React, {useContext} from 'react';
import styles from './Card.styles';
import {Card as RNCard} from 'react-native-paper';
import {CardProps} from '@/src/shared/components/ui/Card/interfaces';
import {ThemeContext} from '@/src/application/providers/ThemeProvider';

export const Card = ({children, style}: CardProps) => {
  const {colors} = useContext(ThemeContext);

  return (
    <RNCard
      mode="contained"
      style={[
        styles.card,
        {
          backgroundColor: colors.insightCardBackground,
          borderColor: colors.border,
        },
        style,
      ]}
    >
      <RNCard.Content style={styles.content}>{children}</RNCard.Content>
    </RNCard>
  );
};

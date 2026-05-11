import React, {use} from 'react';
import styles from './Card.styles';
import {Card as RNCard} from 'react-native-paper';
import {CardProps} from '@/src/shared/components/ui/Card/interfaces';
import {ThemeContext} from '@/src/application/providers/ThemeProvider';

export const Card = ({children, style}: CardProps) => {
  const {colors, currentTheme} = use(ThemeContext);

  return (
    <RNCard
      mode="contained"
      style={[
        styles.card,
        {
          backgroundColor: colors.insightCardBackground,
          borderColor: colors.border,
          borderRadius: currentTheme.radius.xl,
        },
        style,
      ]}
    >
      <RNCard.Content style={{padding: currentTheme.spacing.xs}}>
        {children}
      </RNCard.Content>
    </RNCard>
  );
};

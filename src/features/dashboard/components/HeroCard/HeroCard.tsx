import React, {useContext} from 'react';
import {View} from 'react-native';
import styles from './HeroCard.styles';
import {Card} from 'react-native-paper';
import type {HeroCardProps} from './interfaces.ts';
import {ThemeContext} from '@/src/application/providers/ThemeProvider';
import Text from '@/src/shared/components/ui/Text/Text';
import {Chip} from '@/src/shared/components/ui/Chip/Chip';
import {CircularProgress} from '@/src/shared/components/ui/CircularProgress/CircularProgress';
import {Metric} from '@/src/features/dashboard/components/HeroCard/Metric';

const formatMoney = (value: number, currencySymbol = '$') => {
  return `${currencySymbol}${value.toLocaleString('es-AR')}`;
};

export const HeroCard = ({
  currentBalance,
  spent,
  monthlyBudget,
  progress,
  currencySymbol = '$',
  title = 'Saldo actual',
  badgeLabel = 'Disponible ahora',
}: HeroCardProps) => {
  const {colors} = useContext(ThemeContext);

  return (
    <Card
      mode="contained"
      style={[
        styles.card,
        {
          backgroundColor: colors.balanceCardBackground,
        },
      ]}
    >
      <Card.Content style={styles.content}>
        <View style={styles.topRow}>
          <View style={styles.balanceContainer}>
            <Text
              size={16}
              weight={600}
              style={[
                styles.title,
                {
                  color: colors.balanceCardMutedText,
                },
              ]}
            >
              {title}
            </Text>
            <Text
              size={36}
              weight={800}
              style={[
                styles.amount,
                {
                  color: colors.balanceCardText,
                },
              ]}
            >
              {formatMoney(currentBalance, currencySymbol)}
            </Text>
            <Chip
              text={badgeLabel}
              color={colors.badgeText}
              backgroundColor={colors.badgeBackground}
            />
          </View>

          <CircularProgress
            progress={progress}
            color={colors.primary}
            trackColor="rgba(255,255,255,0.22)"
            textColor={colors.balanceCardText}
          />
        </View>

        <View style={styles.divider} />

        <View style={styles.bottomRow}>
          <Metric title={'Gastado este mes'} amount={spent} />
          <Metric title={'Presupuesto'} amount={monthlyBudget} />
        </View>
      </Card.Content>
    </Card>
  );
};

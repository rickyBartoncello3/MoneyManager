import React, {use} from 'react';
import {View} from 'react-native';
import styles from './HeroCard.styles';
import {Card} from 'react-native-paper';
import type {HeroCardProps} from './interfaces.ts';
import {ThemeContext} from '@/src/application/providers/ThemeProvider';
import Text from '@/src/shared/components/ui/Text/Text';
import {Chip} from '@/src/shared/components/ui/Chip/Chip';
import {CircularProgress} from '@/src/shared/components/ui/CircularProgress/CircularProgress';
import {Metric} from '@/src/features/dashboard/components/Metric/Metric';
import {useTranslation} from 'react-i18next';
import {ICON_NAMES} from '@/src/shared/constants/iconNames';

const formatMoney = (value: number, currencySymbol = '$') => {
  return `${currencySymbol}${Number(value).toLocaleString('es-AR')}`;
};

export const HeroCard = ({
  currentBalance,
  spent,
  monthlyBudget,
  progress,
  currencySymbol = '$',
}: HeroCardProps) => {
  const {t} = useTranslation();
  const {colors} = use(ThemeContext);

  return (
    <Card
      mode="contained"
      style={[styles.card, {backgroundColor: colors.balanceCardBackground}]}
    >
      <Card.Content style={styles.content}>
        <View style={styles.topRow}>
          <View style={styles.balanceContainer}>
            <Text
              size={16}
              weight={600}
              style={[styles.title, {color: colors.balanceCardMutedText}]}
            >
              {t('dashboard.currentBalance')}
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
              text={t('dashboard.availableNow')}
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
          <Metric
            icon={ICON_NAMES.ARROW_UP_2}
            title={t('dashboard.income')}
            amount={monthlyBudget}
          />
          <Metric
            icon={ICON_NAMES.ARROW_DOWN_2}
            title={t('dashboard.expense')}
            amount={spent}
            color={colors.expenseText}
            backgroundColor={colors.expenseSoft}
          />
        </View>
      </Card.Content>
    </Card>
  );
};

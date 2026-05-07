import React, {useContext} from 'react';
import {Pressable, View} from 'react-native';
import styles from './AccountRow.styles';
import {AccountRowProps} from './interfaces';
import {ThemeContext} from '@/src/application/providers/ThemeProvider';
import {ICON_NAMES} from '@/src/shared/constants/iconNames';
import Text from '@/src/shared/components/ui/Text/Text';
import {formatMoney} from '@/src/shared/utils/formatMoney';
import {iconMapper} from '@/src/data/mappers/iconMapper';

export const AccountRow = ({account, onPress}: AccountRowProps) => {
  const Icon = iconMapper[account.type] ?? iconMapper[ICON_NAMES.ADD_TRANSACTION];
  const {colors} = useContext(ThemeContext);

  const isNegative = account.balance < 0;

  const amountColor = isNegative ? colors.negative : colors.text;

  const showEquivalent =
    account.currency !== account.mainCurrency &&
    typeof account.equivalentInMainCurrency === 'number';

  return (
    <Pressable
      onPress={() => onPress?.(account)}
      style={({pressed}) => [
        styles.container,
        {
          opacity: pressed ? 0.72 : 1,
        },
      ]}
    >
      <View style={styles.leftContent}>
        <View
          style={[
            styles.iconContainer,
            {
              backgroundColor: colors.badgeBackground,
            },
          ]}
        >
          <Icon name={account.type} color={colors.icon} width={20} height={20} />
        </View>

        <View style={styles.accountInfo}>
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
            {account.name}
          </Text>
          <Text
            size={12}
            weight={500}
            style={[
              styles.accountCurrency,
              {
                color: colors.textSecondary,
              },
            ]}
          >
            {account.currency}
          </Text>
        </View>
      </View>

      <View style={styles.rightContent}>
        <Text
          size={16}
          weight={800}
          style={[
            {
              color: amountColor,
            },
          ]}
        >
          {formatMoney(account.balance, account.symbol)}
        </Text>

        {showEquivalent ? (
          <Text
            size={12}
            weight={500}
            style={[
              styles.accountEquivalent,
              {
                color: colors.textSecondary,
              },
            ]}
          >
            ≈ {formatMoney(account.equivalentInMainCurrency ?? 0, account.mainCurrency)}
          </Text>
        ) : null}
      </View>
    </Pressable>
  );
};

import {View} from 'react-native';
import Text from '@/src/shared/components/ui/Text/Text';
import {TransactionMovementRow} from '../ExpandableTransactions/TransactionMovementRow';
import styles from './TransactionGroupCard.styles';
import {TransactionGroupCardProps} from '@/src/features/transactions/components/TransactionGroupCard/interfaces';
import {useContext, useMemo} from 'react';
import {ThemeContext} from '@/src/application/providers/ThemeProvider';
import {CustomIcon} from '@/src/shared/components/ui/TabBarIcon/CustomIcon';
import {ICON_NAMES} from '@/src/shared/constants/iconNames';
import {TouchableRipple} from 'react-native-paper';
import {useCurrenciesQuery} from '@/src/features/currencies/queries/useCurrenciesQuery';

export const TransactionGroupCard = ({
  group,
  categories,
  isExpanded,
  onToggle,
  currencyCode,
}: TransactionGroupCardProps) => {
  const {currentTheme, colors} = useContext(ThemeContext);
  const isPositive = group.total >= 0;
  const {data: currencies = []} = useCurrenciesQuery();

  const currency = useMemo(
    () => currencies.find(c => c.code === currencyCode),
    [currencyCode, currencies],
  )!;

  return (
    <View style={styles.root}>
      <TouchableRipple borderless onPress={onToggle}>
        <View style={styles.groupHeader}>
          <View style={[styles.groupHeaderLeft, {gap: currentTheme.spacing.md}]}>
            <CustomIcon
              name={isExpanded ? ICON_NAMES.ARROW_UP : ICON_NAMES.ARROW_DOWN}
              color={colors.text}
            />
            <Text size={16} weight={900}>
              {group.title}
            </Text>
            <View
              style={{
                backgroundColor: colors.primary,
                borderRadius: 100,
                padding: currentTheme.spacing.xs,
              }}
            >
              <Text size={12} weight={600}>
                {group.count}
              </Text>
            </View>
          </View>
          <View style={styles.groupHeaderRight}>
            <Text
              size={15}
              weight={900}
              style={{color: isPositive ? colors.positive : colors.negative}}
            >
              {currency.symbol}
              {Math.abs(group.total).toFixed(0)}
            </Text>
          </View>
        </View>
      </TouchableRipple>

      {isExpanded ? (
        <View style={styles.movementsWrapper}>
          {group.transactions.map(transaction => (
            <TransactionMovementRow
              key={transaction.id}
              transaction={transaction}
              categories={categories}
            />
          ))}
        </View>
      ) : null}
    </View>
  );
};

import {View} from 'react-native';
import Text from '@/src/shared/components/ui/Text/Text';
import {TransactionMovementRow} from '@/src/features/transactions/components/TransactionMovementRow/TransactionMovementRow';
import styles from './TransactionGroupCard.styles';
import {TransactionGroupCardProps} from '@/src/features/transactions/components/TransactionGroupCard/interfaces';
import {useContext, useMemo} from 'react';
import {ThemeContext} from '@/src/application/providers/ThemeProvider';
import {CustomIcon} from '@/src/shared/components/ui/TabBarIcon/CustomIcon';
import {ICON_NAMES} from '@/src/shared/constants/iconNames';
import {TouchableRipple} from 'react-native-paper';
import {useCurrenciesQuery} from '@/src/features/currencies/queries/useCurrenciesQuery';
import {useCategoriesQuery} from '@/src/features/categories/queries/useCategoriesQuery';

export const TransactionGroupCard = ({
  group,
  isExpanded,
  onToggle,
  currencyCode,
  groupMode,
}: TransactionGroupCardProps) => {
  const {currentTheme, colors} = useContext(ThemeContext);
  const isPositive = group.total >= 0;
  const {data: currencies = []} = useCurrenciesQuery();
  const {data: categories = []} = useCategoriesQuery();

  const currency = useMemo(
    () => currencies.find(c => c.code === currencyCode),
    [currencyCode, currencies],
  )!;
  const category = categories.find(item => item.id === group.id);
  const icon = category?.icon
    ? category?.icon
    : isExpanded
      ? ICON_NAMES.ARROW_UP
      : ICON_NAMES.ARROW_DOWN;

  return (
    <View style={styles.root}>
      <TouchableRipple borderless onPress={onToggle}>
        <View style={styles.groupHeader}>
          <View style={[styles.groupHeaderLeft, {gap: currentTheme.spacing.md}]}>
            <CustomIcon name={icon} color={category?.color || colors.text} />
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
              style={{color: isPositive ? colors.income : colors.expense}}
            >
              {currency?.symbol || '$'}
              {Math.abs(group.total).toFixed(3)}
            </Text>
          </View>
        </View>
      </TouchableRipple>

      {isExpanded ? (
        <View style={styles.movementsWrapper}>
          {group.transactions.map(transaction => (
            <TransactionMovementRow
              symbol={currency.symbol}
              key={transaction.id}
              transaction={transaction}
              categories={categories}
              groupMode={groupMode}
            />
          ))}
        </View>
      ) : null}
    </View>
  );
};

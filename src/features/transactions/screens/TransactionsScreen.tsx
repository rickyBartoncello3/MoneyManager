import {ActivityIndicator, FlatList, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Text from '@/src/shared/components/ui/Text/Text';
import {CustomView} from '@/src/shared/components/ui/CustomView';

import {TransactionGroupCard} from '../components/TransactionGroupCard/TransactionGroupCard';
import {ToolBar} from '@/src/features/transactions/components/ToolBar/ToolBar';
import styles from './TransactionsScreen.styles';
import {useTransactionsViewModel} from '@/src/features/transactions/hooks/useTransactionsViewModel';
import {use} from 'react';
import {ThemeContext} from '@/src/application/providers/ThemeProvider';

export const TransactionsScreen = () => {
  const {top} = useSafeAreaInsets();
  const {currentTheme} = use(ThemeContext);
  const vm = useTransactionsViewModel();

  if (vm.isLoadingTransactions) {
    return (
      <CustomView>
        <View style={styles.center}>
          <ActivityIndicator size="large" />
        </View>
      </CustomView>
    );
  }

  if (vm.transactionsError) {
    return (
      <CustomView margin>
        <View style={[styles.root, {marginTop: top}]}>
          <Text size={22} weight={900}>
            Something went wrong.
          </Text>
        </View>
      </CustomView>
    );
  }

  return (
    <CustomView margin isScrolling={false}>
      <View style={[styles.root, {marginTop: top, gap: currentTheme.spacing.xxl}]}>
        <ToolBar
          accounts={vm.accounts}
          selectedAccountId={vm.selectedAccount.id}
          groupMode={vm.groupMode}
          areAllExpanded={vm.areAllExpanded}
          onSelectAccount={vm.handleSelectAccount}
          onChangeGroupMode={vm.handleChangeGroupMode}
          onToggleExpandAll={vm.handleToggleExpandAll}
        />
        <FlatList
          data={vm.groups}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <View style={styles.emptyState}>
              <Text size={18} weight={900}>
                No movements found
              </Text>

              <Text size={13} weight={600} style={styles.emptyText}>
                Try changing the account or grouping mode.
              </Text>
            </View>
          }
          renderItem={({item}) => (
            <TransactionGroupCard
              currencyCode={vm.selectedAccount.currencyCode}
              group={item}
              isExpanded={vm.expandedGroupIds.includes(item.id)}
              onToggle={() => vm.handleToggleGroup(item.id)}
              groupMode={vm.groupMode}
            />
          )}
        />
      </View>
    </CustomView>
  );
};

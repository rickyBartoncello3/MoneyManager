import {useMemo, useState} from 'react';
import {useCategoriesQuery} from '@/src/features/categories/queries/useCategoriesQuery';
import {useSettingsStore} from '@/src/store/settings/slice';
import {GroupMode, interfaces} from '@/src/features/transactions/screens/interfaces';
import {useTransactionsQuery} from '@/src/features/transactions/queries/useTransactionsQuery';
import {useAccountsQuery} from '@/src/features/accounts/queries/useAccountsQuery';
import {Account} from '@/src/domain/accounts/Account';

export const useTransactionsViewModel = () => {
  const accountIdCurrency = useSettingsStore(state => state.accountIdCurrency);
  const {data: accounts = []} = useAccountsQuery();
  const accountCurrency = accounts.find(account => account.id === accountIdCurrency)!;
  const selectedAccountId = accountIdCurrency;

  const [selectedAccount, setSelectedAccount] = useState<Account>(accountCurrency);
  console.log(accountIdCurrency, accountCurrency, selectedAccount);
  const [groupMode, setGroupMode] = useState<GroupMode>('day');

  const [expandedGroupIds, setExpandedGroupIds] = useState<string[]>([]);

  const {
    data: transactions = [],
    isLoading: isLoadingTransactions,
    error: transactionsError,
  } = useTransactionsQuery({
    accountId: selectedAccountId,
  });
  const {data: categories = []} = useCategoriesQuery();

  const groups = useMemo(() => {
    return interfaces({
      transactions,
      categories,
      mode: groupMode,
    });
  }, [transactions, categories, groupMode]);

  const areAllExpanded = groups.length > 0 && expandedGroupIds.length === groups.length;

  const handleToggleGroup = (groupId: string) => {
    setExpandedGroupIds(current => {
      if (current.includes(groupId)) {
        return current.filter(id => id !== groupId);
      }

      return [...current, groupId];
    });
  };

  const handleToggleExpandAll = () => {
    if (areAllExpanded) {
      setExpandedGroupIds([]);
      return;
    }

    setExpandedGroupIds(groups.map(group => group.id));
  };

  const handleChangeGroupMode = (nextMode: GroupMode) => {
    setGroupMode(nextMode);
    setExpandedGroupIds([]);
  };

  const handleSelectAccount = (accountId: string) => {
    const account = accounts.find(account => account.id === accountId)!;
    setSelectedAccount(account);
    setExpandedGroupIds([]);
  };

  return {
    accounts,
    transactions,
    transactionsError,
    isLoadingTransactions,
    selectedAccount: selectedAccount || accountCurrency,
    groupMode,
    areAllExpanded,
    groups,
    expandedGroupIds,
    handleChangeGroupMode,
    handleToggleGroup,
    handleToggleExpandAll,
    handleSelectAccount,
  };
};

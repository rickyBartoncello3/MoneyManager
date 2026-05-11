import {useMemo, useState} from 'react';

import {Account} from '@/src/domain/accounts/Account';
import {useAccountsQuery} from '@/src/features/accounts/queries/useAccountsQuery';
import {useCategoriesQuery} from '@/src/features/categories/queries/useCategoriesQuery';
import {GroupMode, interfaces} from '@/src/features/transactions/screens/interfaces';
import {useTransactionsQuery} from '@/src/features/transactions/queries/useTransactionsQuery';
import {useSettingsStore} from '@/src/store/settings/slice';
import {ICON_NAMES} from '@/src/shared/constants/iconNames';
import {ALL_ACCOUNTS_ID} from '@/src/constants/settings';

const allAccountsOption: Account = {
  id: ALL_ACCOUNTS_ID,
  name: 'All accounts',
  icon: ICON_NAMES.NOTE,
  type: 'cash',
  currencyCode: 'ARS',
  includeInTotal: false,
  initialBalanceMinor: 0,
  archivedAt: '',
  createdAt: '',
  deletedAt: '',
  updatedAt: '',
};

export const useTransactionsViewModel = () => {
  const currentAccountId = useSettingsStore(state => state.accountIdCurrent);

  const {data: accounts = []} = useAccountsQuery();
  const {data: categories = []} = useCategoriesQuery();

  const [selectedAccountId, setSelectedAccountId] = useState(currentAccountId);
  const [groupMode, setGroupMode] = useState<GroupMode>('day');
  const [expandedGroupIds, setExpandedGroupIds] = useState<string[]>([]);

  const accountsOptions = useMemo(() => [allAccountsOption, ...accounts], [accounts]);

  const selectedAccount = useMemo(
    () =>
      accountsOptions.find(account => account.id === selectedAccountId) ??
      accountsOptions.find(account => account.id === currentAccountId) ??
      allAccountsOption,
    [accountsOptions, selectedAccountId, currentAccountId],
  );

  const transactionFilters = useMemo(
    () => ({
      accountId: selectedAccount.id === ALL_ACCOUNTS_ID ? undefined : selectedAccount.id,
    }),
    [selectedAccount.id],
  );

  const {
    data: transactions = [],
    isLoading: isLoadingTransactions,
    error: transactionsError,
  } = useTransactionsQuery(transactionFilters);

  const groups = useMemo(
    () =>
      interfaces({
        transactions,
        categories,
        mode: groupMode,
      }),
    [transactions, categories, groupMode],
  );

  const areAllExpanded = groups.length > 0 && expandedGroupIds.length === groups.length;

  const handleToggleGroup = (groupId: string) => {
    setExpandedGroupIds(currentGroupIds =>
      currentGroupIds.includes(groupId)
        ? currentGroupIds.filter(currentGroupId => currentGroupId !== groupId)
        : [...currentGroupIds, groupId],
    );
  };

  const handleToggleExpandAll = () => {
    setExpandedGroupIds(areAllExpanded ? [] : groups.map(group => group.id));
  };

  const handleChangeGroupMode = (nextGroupMode: GroupMode) => {
    setGroupMode(nextGroupMode);
    setExpandedGroupIds([]);
  };

  const handleSelectAccount = (accountId: string) => {
    setSelectedAccountId(accountId);
    setExpandedGroupIds([]);
  };

  return {
    accounts: accountsOptions,
    transactions,
    transactionsError,
    isLoadingTransactions,
    selectedAccount,
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

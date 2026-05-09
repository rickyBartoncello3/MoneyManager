// src/features/dashboard/hooks/useDashboardViewModel.ts

import {useContext, useMemo, useRef, useState} from 'react';
import {ThemeContext} from '@/src/application/providers/ThemeProvider';
import {useCategoriesQuery} from '@/src/features/categories/queries/useCategoriesQuery';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {
  CategoryOption,
  TransactionMode,
} from '@/src/features/transaction/screens/interfaces';
import {useSettingsStore} from '@/src/store/settings/slice';
import {useDashboardQuery} from '@/src/features/dashboard/queries/useDashboardQuery';
import {AccountSummary} from '@/src/domain/dashboard/AccountSummary';
import {getCurrentMonth} from '@/src/shared/utils/getCurrentMonth';

export const useAddTransactionViewModel = () => {
  const {isDark, colors} = useContext(ThemeContext);
  const {data = [], isLoading} = useCategoriesQuery();
  const accountIdCurrency = useSettingsStore(state => state.accountIdCurrency);
  const selectedMonth = useMemo(() => getCurrentMonth(), []);

  const {data: summary} = useDashboardQuery({
    month: selectedMonth,
    accountIdCurrency,
  });

  const accountSheetRef = useRef<BottomSheetModal>(null);
  const categorySheetRef = useRef<BottomSheetModal>(null);
  const keyboardSheetRef = useRef<BottomSheetModal>(null);

  const [account, setAccount] = useState<AccountSummary>(
    summary?.accounts.find(a => a.id === accountIdCurrency)!,
  );

  console.log('account', account);

  const [mode, setMode] = useState<TransactionMode>('expense');
  const [amount, setAmount] = useState('85.60');
  const [category, setCategory] = useState<CategoryOption | null>(null);

  const categories: CategoryOption[] = useMemo(() => {
    return data
      .filter(category => category.type === mode)
      .map(category => ({
        id: category.id,
        name: category.name,
        color: category.color,
        icon: category.icon,
        backgroundColor: category.backgroundColor,
      }));
  }, [mode, data]);

  const openAccountSheet = () => {
    accountSheetRef.current?.present();
  };

  const openCategorySheet = () => {
    categorySheetRef.current?.present();
  };

  const openKeyboardSheet = () => {
    keyboardSheetRef.current?.present();
  };

  const handleSelectAccount = (account: AccountSummary) => {
    setAccount(account);
    accountSheetRef.current?.dismiss();
  };

  const handleSelectCategory = (nextCategory: CategoryOption) => {
    setCategory(nextCategory);
    categorySheetRef.current?.dismiss();
  };

  const handleSave = () => {
    console.log({
      mode,
      amount,
      categoryId: category?.id,
      accountId: 'acc_main_checking',
      date: '2024-05-15',
    });
  };

  return {
    isDark,
    colors,
    isLoading,
    accounts: summary?.accounts,
    categories,
    accountSheetRef,
    categorySheetRef,
    keyboardSheetRef,
    mode,
    account,
    amount,
    category,
    setMode,
    setAmount,
    setCategory,
    openAccountSheet,
    openCategorySheet,
    openKeyboardSheet,
    handleSelectCategory,
    handleSelectAccount,
    handleSave,
  };
};

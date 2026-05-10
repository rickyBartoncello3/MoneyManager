import {useMemo, useRef, useState} from 'react';
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
import dayjs from 'dayjs';
import {DateType} from 'react-native-ui-datepicker';
import {useCreateTransactionMutation} from '@/src/features/transactions/queries/useCreateTransactionMutation';
import {now} from '@/src/core/date/now';

export const useAddTransactionViewModel = () => {
  const {data = []} = useCategoriesQuery();
  const accountIdCurrency = useSettingsStore(state => state.accountIdCurrency);
  const selectedMonth = useMemo(() => getCurrentMonth(), []);
  const createTransactionMutation = useCreateTransactionMutation();
  const {data: summary} = useDashboardQuery({
    month: selectedMonth,
    accountIdCurrency,
  });
  const dateTimePickerSheetRef = useRef<BottomSheetModal>(null);
  const accountSheetRef = useRef<BottomSheetModal>(null);
  const categorySheetRef = useRef<BottomSheetModal>(null);
  const keyboardSheetRef = useRef<BottomSheetModal>(null);

  const accountCurrency = summary?.accounts.find(a => a.id === accountIdCurrency);

  const [account, setAccount] = useState<AccountSummary>(accountCurrency!);
  const [date, setDate] = useState(dayjs());
  const [mode, setMode] = useState<TransactionMode>('expense');
  const [amount, setAmount] = useState('0');
  const [category, setCategory] = useState<CategoryOption | null>(null);
  const [note, setNote] = useState<string>();

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

  const openDateTimePickerSheet = () => {
    dateTimePickerSheetRef.current?.present();
  };

  const openAccountSheet = () => {
    accountSheetRef.current?.present();
  };

  const openCategorySheet = () => {
    categorySheetRef.current?.present();
  };

  const openKeyboardSheet = () => {
    keyboardSheetRef.current?.present();
  };

  const handleSelectDateTimePicker = (date: DateType) => {
    setDate(date);
    dateTimePickerSheetRef.current?.dismiss();
  };

  const handleSelectAccount = (account: AccountSummary) => {
    setAccount(account);
    accountSheetRef.current?.dismiss();
  };

  const handleSelectCategory = (nextCategory: CategoryOption) => {
    setCategory(nextCategory);
    categorySheetRef.current?.dismiss();
  };

  const handleChangeAmount = (amount: string) => {
    const [integerPart, decimalPart] = amount.split(',');
    if (
      integerPart.length <= 9 &&
      ((decimalPart && decimalPart?.length <= 3) || !decimalPart)
    ) {
      setAmount(amount);
    }
  };

  const reset = () => {
    setNote(undefined);
    setDate(dayjs());
    setAmount('0');
    setCategory(null);
  };

  const handleSave = () => {
    createTransactionMutation.mutate({
      amount: Number(amount),
      currency: account.currency,
      accountId: account.id,
      categoryId: category?.id,
      occurredAt: now(),
      note,
      type: mode,
      mainCurrency: accountCurrency?.currency!,
      exchangeRateToMainCurrency: 0,
    });

    reset();
  };

  return {
    isLoading: createTransactionMutation.isPending,
    accounts: summary?.accounts,
    categories,
    dateTimePickerSheetRef,
    accountSheetRef,
    categorySheetRef,
    keyboardSheetRef,
    mode,
    date,
    account,
    amount,
    category,
    note,
    setMode,
    setCategory,
    setNote,
    openDateTimePickerSheet,
    openAccountSheet,
    openCategorySheet,
    openKeyboardSheet,
    handleSelectCategory,
    handleSelectAccount,
    handleSelectDateTimePicker,
    handleChangeAmount,
    handleSave,
  };
};

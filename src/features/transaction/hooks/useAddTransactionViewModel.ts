import {RefObject, useEffect, useMemo, useRef, useState} from 'react';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import dayjs from 'dayjs';
import {DateType} from 'react-native-ui-datepicker';

import {useAccountsQuery} from '@/src/features/accounts/queries/useAccountsQuery';
import {useCategoriesQuery} from '@/src/features/categories/queries/useCategoriesQuery';
import {useCurrenciesQuery} from '@/src/features/currencies/queries/useCurrenciesQuery';
import {useCreateTransactionMutation} from '@/src/features/transaction/queries/useCreateTransactionMutation';
import {
  CategoryOption,
  RouteParams,
  TransactionMode,
} from '@/src/features/transaction/screens/interfaces';
import {useSettingsStore} from '@/src/store/settings/slice';
import {Account} from '@/src/domain/accounts/Account';
import {DEFAULT_CURRENCY_CODE} from '@/src/constants/settings';
import {useRoute} from '@react-navigation/native';
import {useTransactionsQuery} from '@/src/features/transactions/queries/useTransactionsQuery';
import {useUpdateTransactionMutation} from '@/src/features/transaction/queries/useUpdateTransactionMutation';
import {hydrateTransactionForm} from '@/src/shared/utils/hydrateTransactionForm';
import {toCategoryOption} from '@/src/shared/utils/toCategoryOption';
import {hasValidAmountLength} from '@/src/shared/utils/hasValidAmountLength';
import {buildUpdatedTransaction} from '@/src/shared/utils/buildUpdatedTransaction';
import {buildTransactionPayload} from '@/src/shared/utils/buildTransactionPayload';
import {router} from 'expo-router';

const INITIAL_AMOUNT = '0';

export const useAddTransactionViewModel = () => {
  const useCreateBottomSheetRef = () => useRef<BottomSheetModal>(null);
  const {params} = useRoute();
  const {transactionId} = (params ?? {}) as RouteParams;

  const {data: accounts = []} = useAccountsQuery();
  const {data: categories = []} = useCategoriesQuery();
  const {data: currencies = []} = useCurrenciesQuery();
  const {data: transactions = []} = useTransactionsQuery();

  const selectedAccountId = useSettingsStore(state => state.accountIdCurrent);

  const createTransaction = useCreateTransactionMutation();
  const updateTransaction = useUpdateTransactionMutation();

  const datePickerSheetRef = useCreateBottomSheetRef();
  const accountSheetRef = useCreateBottomSheetRef();
  const categorySheetRef = useCreateBottomSheetRef();
  const keyboardSheetRef = useCreateBottomSheetRef();

  const transactionToEdit = useMemo(
    () =>
      transactionId
        ? transactions.find(transaction => transaction.id === transactionId)
        : undefined,
    [transactionId, transactions],
  );
  const defaultAccount = useMemo(
    () => accounts.find(account => account.id === selectedAccountId) ?? accounts[0],
    [accounts, selectedAccountId],
  );

  const [selectedAccount, setSelectedAccount] = useState<Account | undefined>(
    defaultAccount,
  );
  const [selectedDate, setSelectedDate] = useState(() => dayjs());
  const [transactionMode, setTransactionMode] = useState<TransactionMode>('expense');
  const [amount, setAmount] = useState(INITIAL_AMOUNT);
  const [selectedCategory, setSelectedCategory] = useState<CategoryOption | null>(null);
  const [note, setNote] = useState<string>();

  const currentCurrency = useMemo(
    () => currencies.find(currency => currency.code === selectedAccount?.currencyCode),
    [currencies, selectedAccount?.currencyCode],
  );

  const currencyCode = currentCurrency?.code ?? DEFAULT_CURRENCY_CODE;

  const availableCategories = useMemo(
    () =>
      categories
        .filter(category => category.type === transactionMode)
        .map(toCategoryOption),
    [categories, transactionMode],
  );

  useEffect(() => {
    if (!defaultAccount || transactionToEdit) {
      return;
    }

    setSelectedAccount(defaultAccount);
  }, [defaultAccount, transactionToEdit]);

  useEffect(() => {
    if (!transactionToEdit) {
      return;
    }

    hydrateTransactionForm({
      transaction: transactionToEdit,
      accounts,
      categories,
      setSelectedAccount,
      setTransactionMode,
      setAmount,
      setSelectedDate,
      setNote,
      setSelectedCategory,
    });
  }, [accounts, categories, transactionToEdit]);

  const openSheet = (sheetRef: RefObject<BottomSheetModal | null>) => {
    sheetRef.current?.present();
  };

  const closeSheet = (sheetRef: RefObject<BottomSheetModal | null>) => {
    sheetRef.current?.dismiss();
  };

  const handleDateSelection = (date: DateType) => {
    setSelectedDate(dayjs(date));
    closeSheet(datePickerSheetRef);
  };

  const handleAccountSelection = (account: Account) => {
    setSelectedAccount(account);
    closeSheet(accountSheetRef);
  };

  const handleCategorySelection = (category: CategoryOption) => {
    setSelectedCategory(category);
    closeSheet(categorySheetRef);
  };

  const handleAmountChange = (value: string) => {
    if (!hasValidAmountLength(value)) {
      return;
    }

    setAmount(value);
  };

  const resetForm = () => {
    setNote(undefined);
    setSelectedDate(dayjs());
    setAmount(INITIAL_AMOUNT);
    setSelectedCategory(null);
  };

  const handleSave = () => {
    if (!selectedAccount) {
      return;
    }

    if (transactionToEdit && transactionId) {
      updateTransaction.mutate(
        buildUpdatedTransaction({
          transaction: transactionToEdit,
          transactionId,
          selectedAccount,
          transactionMode,
          selectedCategory,
          amount,
          currencyCode,
          note,
          occurredAt: selectedDate.toISOString(),
        }),
        {
          onSuccess: () => {
            resetForm();
            router.push({
              pathname: '/transactions',
            });
          },
          onError: error => {
            console.error('[UPDATE TRANSACTION ERROR]', error);
          },
        },
      );

      resetForm();
      router.push({
        pathname: '/transactions',
      });

      return;
    }

    createTransaction.mutate(
      buildTransactionPayload({
        amount,
        currencyCode,
        accountId: selectedAccount.id,
        categoryId: selectedCategory?.id,
        occurredAt: selectedDate.toISOString(),
        note,
        type: transactionMode,
      }),
    );
    router.push({
      pathname: '/transactions',
    });
    resetForm();
  };

  const handleTransactionModeChange = (mode: TransactionMode) => {
    setTransactionMode(mode);
    setSelectedCategory(null);
  };

  return {
    isEditing: Boolean(transactionId),
    isLoading: createTransaction.isPending,

    accounts,
    categories: availableCategories,

    datePickerSheetRef,
    accountSheetRef,
    categorySheetRef,
    keyboardSheetRef,

    transactionMode,
    selectedDate,
    selectedAccount,
    amount,
    selectedCategory,
    note,

    setNote,

    openDatePicker: () => openSheet(datePickerSheetRef),
    openAccountSelector: () => openSheet(accountSheetRef),
    openCategorySelector: () => openSheet(categorySheetRef),
    openKeyboard: () => openSheet(keyboardSheetRef),

    handleDateSelection,
    handleAccountSelection,
    handleCategorySelection,
    handleAmountChange,
    handleTransactionModeChange,
    handleSave,
  };
};

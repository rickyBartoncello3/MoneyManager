// src/features/transactions/components/AddTransaction/AddTransactionScreen.tsx

import React from 'react';
import {Pressable, View} from 'react-native';
import {SegmentedButtons} from 'react-native-paper';
import {router} from 'expo-router';

import Text from '@/src/shared/components/ui/Text/Text';
import {CustomView} from '@/src/shared/components/ui/CustomView';

import styles from './AddTransactionScreen.styles';
import {TransactionMode} from '@/src/features/transaction/screens/interfaces';
import {AmountKeyboardSheet} from '@/src/features/transaction/components/AmountKeyboardSheet/AmountKeyboardSheet';
import {CategorySheet} from '@/src/features/transaction/components/CategorySheet/CategorySheet';
import {useAddTransactionViewModel} from '@/src/features/transaction/hooks/useAddTransactionViewModel';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ICON_NAMES} from '@/src/shared/constants/iconNames';
import {Box} from '@/src/features/transaction/components/Box/Box';
import {Button} from '@/src/shared/components/ui/Button';
import {AccountSheet} from '@/src/features/transaction/components/AccountSheet/AccountSheet';

export const AddTransactionScreen = () => {
  const {
    isDark,
    colors,
    categories,
    accounts,
    accountSheetRef,
    categorySheetRef,
    keyboardSheetRef,
    mode,
    amount,
    account,
    category,
    setMode,
    setAmount,
    setCategory,
    openAccountSheet,
    openCategorySheet,
    handleSelectAccount,
    openKeyboardSheet,
    handleSelectCategory,
    handleSave,
  } = useAddTransactionViewModel();
  const {top} = useSafeAreaInsets();

  return (
    <CustomView margin isScrolling={false}>
      <View style={[styles.root, {marginTop: top}]}>
        <View>
          <View style={styles.header}>
            <Pressable onPress={() => router.back()}>
              <Text weight={700} size={26}>
                ×
              </Text>
            </Pressable>

            <Text weight={700} size={17}>
              Add Transaction
            </Text>

            <Pressable onPress={handleSave}>
              <Text weight={700} size={22}>
                ✓
              </Text>
            </Pressable>
          </View>

          <SegmentedButtons
            value={mode}
            onValueChange={value => {
              setMode(value as TransactionMode);
              setCategory(null);
            }}
            buttons={[
              {value: 'expense', label: 'Expense'},
              {value: 'income', label: 'Income'},
              {value: 'transfer', label: 'Transfer'},
            ]}
            style={styles.segmented}
          />

          <Pressable onPress={openKeyboardSheet} style={styles.amountBlock}>
            <Text weight={700} size={12} style={styles.amountLabel}>
              Amount
            </Text>
            <Text
              size={46}
              weight={900}
              style={[styles.amount, {color: colors.primary}]}
            >
              {amount}
            </Text>
          </Pressable>
          <View style={styles.boxContainer}>
            <View style={styles.row}>
              <Box
                title={'Account'}
                subTitle={account.name}
                onPress={openAccountSheet}
                icon={{
                  name: account.icon,
                  color: colors.text,
                }}
              />
              <Box
                title={'Date'}
                subTitle={'May 15, 2024'}
                onPress={() => {}}
                icon={{
                  name: ICON_NAMES.CAR,
                  color: colors.text,
                }}
              />
            </View>
            <Box
              title={'Category'}
              subTitle={category?.name ?? 'Select a category'}
              onPress={openCategorySheet}
              icon={
                category
                  ? {
                      name: category?.icon,
                      color: category?.color,
                      backgroundColor: category?.backgroundColor,
                    }
                  : null
              }
            />
            <Box
              title={'Note'}
              subTitle={'Add a note'}
              onPress={() => {}}
              icon={{
                name: ICON_NAMES.ADD_TRANSACTION,
                color: colors.text,
              }}
            />
          </View>
        </View>
        <Button onPress={handleSave} text={'Save Transaction'} />

        <AccountSheet
          bottomSheetRef={accountSheetRef}
          accounts={accounts!}
          selectedAccountId={category?.id}
          onSelectAccount={handleSelectAccount}
        />

        <CategorySheet
          bottomSheetRef={categorySheetRef}
          categories={categories}
          selectedCategoryId={category?.id}
          onSelectCategory={handleSelectCategory}
        />

        <AmountKeyboardSheet
          bottomSheetRef={keyboardSheetRef}
          amount={amount}
          onChangeAmount={setAmount}
        />
      </View>
    </CustomView>
  );
};

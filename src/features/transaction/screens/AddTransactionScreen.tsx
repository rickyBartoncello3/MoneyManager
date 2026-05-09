import React from 'react';
import {Pressable, View} from 'react-native';
import {SegmentedButtons, TextInput} from 'react-native-paper';
import {router} from 'expo-router';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

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
import dayjs from 'dayjs';
import {DateTimePickerSheet} from '@/src/features/transaction/components/DateTimePickerSheet/DateTimePickerSheet';

export const AddTransactionScreen = () => {
  const {
    colors,
    categories,
    accounts,
    dateTimePickerSheetRef,
    accountSheetRef,
    categorySheetRef,
    keyboardSheetRef,
    mode,
    date,
    amount,
    account,
    category,
    setMode,
    setAmount,
    setCategory,
    openDateTimePickerSheet,
    openAccountSheet,
    openCategorySheet,
    handleSelectAccount,
    openKeyboardSheet,
    handleSelectCategory,
    handleSave,
    handleSelectDateTimePicker,
  } = useAddTransactionViewModel();
  const {top} = useSafeAreaInsets();

  return (
    <KeyboardAwareScrollView
      enableOnAndroid
      extraScrollHeight={20}
      keyboardShouldPersistTaps="handled"
      style={[styles.root, {backgroundColor: colors.background}]}
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: colors.background,
      }}
    >
      <CustomView margin isScrolling={false}>
        <View style={[styles.container, {marginTop: top}]}>
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
                  title="Date"
                  subTitle={dayjs(date).format('MMM D, YYYY')}
                  onPress={openDateTimePickerSheet}
                  icon={{
                    name: ICON_NAMES.CALENDAR,
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
                subTitle={
                  <TextInput
                    placeholder={'Add a note'}
                    mode={'outlined'}
                    outlineColor={'transparent'}
                    textColor={colors.text}
                    placeholderTextColor={colors.text}
                    activeOutlineColor={'transparent'}
                    contentStyle={{
                      backgroundColor: colors.cardBackground,
                      fontSize: 12,
                      paddingLeft: -16,
                    }}
                    textAlign={'left'}
                    textAlignVertical={'top'}
                  />
                }
                onPress={() => {}}
                icon={{
                  name: ICON_NAMES.NOTE,
                  color: colors.text,
                }}
              />
            </View>
          </View>
          <Button onPress={handleSave} text={'Save Transaction'} />

          <DateTimePickerSheet
            bottomSheetRef={dateTimePickerSheetRef}
            date={date}
            onSelectDate={handleSelectDateTimePicker}
          />

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
    </KeyboardAwareScrollView>
  );
};

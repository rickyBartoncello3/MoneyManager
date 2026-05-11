import React, {useContext} from 'react';
import {Pressable, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {router} from 'expo-router';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import Text from '@/src/shared/components/ui/Text/Text';
import {CustomView} from '@/src/shared/components/ui/CustomView';

import styles from './AddTransactionScreen.styles';
import {AmountKeyboardSheet} from '@/src/features/transaction/components/AmountKeyboardSheet/AmountKeyboardSheet';
import {CategorySheet} from '@/src/features/transaction/components/CategorySheet/CategorySheet';
import {useAddTransactionViewModel} from '@/src/features/transaction/hooks/useAddTransactionViewModel';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ICON_NAMES} from '@/src/shared/constants/iconNames';
import {Box} from '@/src/features/transaction/components/Box/Box';
import {Button} from '@/src/shared/components/ui/Button/Button';
import {AccountSheet} from '@/src/features/transaction/components/AccountSheet/AccountSheet';
import dayjs from 'dayjs';
import {DateTimePickerSheet} from '@/src/features/transaction/components/DateTimePickerSheet/DateTimePickerSheet';
import {AmountBlock} from '@/src/features/transaction/components/AmountBlock/AmountBlock';
import {ThemeContext} from '@/src/application/providers/ThemeProvider';
import {SegmentedButtons} from '@/src/shared/components/ui/SegmentedButtons/SegmentedButtons';
import {TransactionsModes} from '@/src/constants/transactionsModes';

export const AddTransactionScreen = () => {
  const vm = useAddTransactionViewModel();
  const {top} = useSafeAreaInsets();
  const {colors, currentTheme} = useContext(ThemeContext);

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
          <View style={{gap: currentTheme.spacing.md}}>
            <View style={styles.header}>
              <Pressable onPress={() => router.back()}>
                <Text weight={700} size={26}>
                  ×
                </Text>
              </Pressable>

              <Text weight={700} size={17}>
                Add Transaction
              </Text>

              <Pressable onPress={vm.handleSave}>
                <Text weight={700} size={22}>
                  ✓
                </Text>
              </Pressable>
            </View>
            <SegmentedButtons
              initialValue={vm.transactionMode}
              handleOnChange={vm.handleTransactionModeChange}
              values={TransactionsModes}
            />
            <AmountBlock amount={vm.amount} onPress={vm.openKeyboard} />
            <View style={{gap: currentTheme.spacing.md}}>
              <View style={styles.row}>
                <Box
                  title={'Account'}
                  subTitle={vm.selectedAccount?.name}
                  onPress={vm.openAccountSelector}
                  icon={{
                    name: vm.selectedAccount?.icon || ICON_NAMES.WALLET,
                    color: colors.text,
                  }}
                />
                <Box
                  title="Date"
                  subTitle={dayjs(vm.selectedDate).format('MMM D, YYYY')}
                  onPress={vm.openDatePicker}
                  icon={{
                    name: ICON_NAMES.CALENDAR,
                    color: colors.text,
                  }}
                />
              </View>
              <Box
                title={'Currency'}
                subTitle={vm.selectedCategory?.name ?? 'Select a category'}
                onPress={vm.openCategorySelector}
                icon={
                  vm.selectedCategory
                    ? {
                        name: vm.selectedCategory?.icon,
                        color: vm.selectedCategory?.color,
                        backgroundColor: vm.selectedCategory?.backgroundColor,
                      }
                    : null
                }
              />
              <Box
                title={'Note'}
                subTitle={
                  <TextInput
                    value={vm.note}
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
                    onChangeText={vm.setNote}
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
          <Button
            loading={vm.isLoading}
            disabled={Number(vm.amount) === 0 || !vm.selectedCategory}
            onPress={vm.handleSave}
            text={'Save Transaction'}
          />

          <DateTimePickerSheet
            bottomSheetRef={vm.datePickerSheetRef}
            date={vm.selectedDate}
            onSelectDate={vm.handleDateSelection}
          />

          <AccountSheet
            bottomSheetRef={vm.accountSheetRef}
            accounts={vm.accounts!}
            selectedAccountId={vm.selectedAccount?.id}
            onSelectAccount={vm.handleAccountSelection}
          />

          <CategorySheet
            bottomSheetRef={vm.categorySheetRef}
            categories={vm.categories}
            selectedCategoryId={vm.selectedCategory?.id}
            onSelectCategory={vm.handleCategorySelection}
          />

          <AmountKeyboardSheet
            bottomSheetRef={vm.keyboardSheetRef}
            amount={vm.amount}
            onChangeAmount={vm.handleAmountChange}
          />
        </View>
      </CustomView>
    </KeyboardAwareScrollView>
  );
};

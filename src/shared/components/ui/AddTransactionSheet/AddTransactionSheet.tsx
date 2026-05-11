import React, {use, useMemo, useState} from 'react';
import styles from './AddTransactionSheet.styles';
import {AddTransactionBottomSheetProps} from './interfaces';
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import {ThemeContext} from '@/src/application/providers/ThemeProvider';
import Text from '@/src/shared/components/ui/Text/Text';
import {SegmentedButtons} from 'react-native-paper';
import {useCategoriesQuery} from '@/src/features/categories/queries/useCategoriesQuery';
import {CategoriesContent} from '@/src/shared/components/ui/CategoriesContent/CategoriesContent';
import {TransactionType} from '@/src/domain/transactions/TransactionType';

export const AddTransactionBottomSheet = ({
  bottomSheetRef,
}: AddTransactionBottomSheetProps) => {
  const {colors} = use(ThemeContext);
  const [operationType, setOperationType] = useState<TransactionType>('expense');
  const {data: categories = []} = useCategoriesQuery();

  const incomeCategories = useMemo(
    () => categories.filter(category => category.type === 'income'),
    [categories],
  );

  const expenseCategories = useMemo(
    () => categories.filter(category => category.type === 'expense'),
    [categories],
  );

  const visibleCategories =
    operationType === 'income' ? incomeCategories : expenseCategories;

  const snapPoints = useMemo(() => ['32%'], []);

  const renderBackdrop = (props: BottomSheetBackdropProps) => (
    <BottomSheetBackdrop
      {...props}
      appearsOnIndex={0}
      disappearsOnIndex={-1}
      pressBehavior="close"
      opacity={0.45}
    />
  );

  return (
    <BottomSheetModal
      ref={bottomSheetRef}
      index={0}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}
      enablePanDownToClose
      backgroundStyle={{
        backgroundColor: colors.cardBackground,
        borderRadius: 28,
      }}
      handleIndicatorStyle={{
        backgroundColor: colors.border,
        width: 44,
      }}
    >
      <BottomSheetView style={styles.content}>
        <Text
          size={20}
          weight={800}
          style={[
            {
              color: colors.text,
            },
          ]}
        >
          ¿Qué querés agregar?
        </Text>
        <SegmentedButtons
          value={operationType}
          onValueChange={value => setOperationType(value as TransactionType)}
          buttons={[
            {
              value: 'income',
              label: 'Income',
            },
            {
              value: 'expense',
              label: 'Expense',
            },
            {
              value: 'transfer',
              label: 'Transfer',
            },
          ]}
          style={styles.segmented}
        />
        <CategoriesContent
          title={operationType === 'income' ? 'Income categories' : 'Expense categories'}
          categories={visibleCategories}
          onCategoryPress={category => {
            console.log(category);
          }}
        />

        {/*<View style={styles.actionsContainer}>
          <TransactionButton
            handlePressIncome={handlePressExpense}
            icon={'add'}
            text={'Agregar un ingreso'}
          />
          <TransactionButton
            handlePressIncome={handlePressExpense}
            icon={'remove'}
            text={'Agregar un retiro'}
          />
        </View>*/}
      </BottomSheetView>
    </BottomSheetModal>
  );
};
export class AddTransactionSheet {}

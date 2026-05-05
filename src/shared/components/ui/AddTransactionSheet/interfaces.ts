import {RefObject} from 'react';
import type {BottomSheetModal} from '@gorhom/bottom-sheet';
import {CategoryType} from '@/src/domain/categories/CategoryType';

export interface AddTransactionBottomSheetProps {
  bottomSheetRef: RefObject<BottomSheetModal>;
  onPressIncome: () => void;
  onPressExpense: () => void;
}

export type OperationType = CategoryType | 'transfer';

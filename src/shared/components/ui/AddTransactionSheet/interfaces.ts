import {RefObject} from 'react';
import type {BottomSheetModal} from '@gorhom/bottom-sheet';

export interface AddTransactionBottomSheetProps {
  bottomSheetRef: RefObject<BottomSheetModal>;
  onPressIncome: () => void;
  onPressExpense: () => void;
}

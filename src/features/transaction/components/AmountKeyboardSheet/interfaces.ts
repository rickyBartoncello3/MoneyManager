import {RefObject} from 'react';
import {BottomSheetModal} from '@gorhom/bottom-sheet';

export type AmountKeyboardSheetProps = {
  bottomSheetRef: RefObject<BottomSheetModal | null>;
  amount: string;
  onChangeAmount: (value: string) => void;
};

import {RefObject} from 'react';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {CategoryOption} from '@/src/features/transaction/screens/interfaces';

export type CategorySheetProps = {
  bottomSheetRef: RefObject<BottomSheetModal | null>;
  categories: CategoryOption[];
  selectedCategoryId?: string;
  onSelectCategory: (category: CategoryOption) => void;
};

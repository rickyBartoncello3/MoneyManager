import {PropsWithChildren, RefObject} from 'react';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {SharedValue} from 'react-native-reanimated';

export interface BottomSheetModalProps extends PropsWithChildren {
  bottomSheetRef: RefObject<BottomSheetModal | null>;
  snapPoints?: (string | number)[] | SharedValue<(string | number)[]> | undefined;
}

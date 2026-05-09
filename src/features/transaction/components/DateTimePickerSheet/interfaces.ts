import {RefObject} from 'react';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {DateType} from 'react-native-ui-datepicker';

export type DateTimePickerSheetProps = {
  bottomSheetRef: RefObject<BottomSheetModal | null>;
  date?: DateType;
  onSelectDate: (date: DateType) => void;
};

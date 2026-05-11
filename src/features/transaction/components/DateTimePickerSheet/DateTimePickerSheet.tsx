import React, {use, useMemo} from 'react';

import {BottomSheetModal} from '@/src/shared/components/ui/BottomSheetModal/BottomSheetModal';
import {ThemeContext} from '@/src/application/providers/ThemeProvider';
import {DateTimePickerSheetProps} from '@/src/features/transaction/components/DateTimePickerSheet/interfaces';
import DateTimePicker from 'react-native-ui-datepicker';

export const DateTimePickerSheet = ({
  bottomSheetRef,
  date,
  onSelectDate,
}: DateTimePickerSheetProps) => {
  const {colors} = use(ThemeContext);
  const snapPoints = useMemo(() => [], []);

  return (
    <BottomSheetModal bottomSheetRef={bottomSheetRef} snapPoints={snapPoints}>
      <DateTimePicker
        mode="single"
        styles={{
          selected: {backgroundColor: colors.primary, borderRadius: 16}, // Highlight the selected day
          selected_label: {color: 'white', fontWeight: 'black'},
          day_label: {color: colors.text}, // Highlight the selected day label
          weekday_label: {color: colors.text},
          year_label: {color: colors.text},
          month_label: {color: colors.text},
          month_selector_label: {color: colors.text},
          year_selector_label: {color: colors.text},
          today_label: {color: colors.text, fontWeight: 'bold'},
          today: {borderWidth: 1, borderRadius: 16, borderColor: colors.primary},
        }}
        date={date}
        onChange={({date}) => onSelectDate(date)}
      />
    </BottomSheetModal>
  );
};

import React, {useContext} from 'react';
import styles from './BottomSheetModal.styles';
import {BottomSheetModalProps} from './interfaces';
import {ThemeContext} from '@/src/application/providers/ThemeProvider';
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal as RNBottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';

export const BottomSheetModal = ({
  bottomSheetRef,
  snapPoints,
  children,
}: BottomSheetModalProps) => {
  const {colors} = useContext(ThemeContext);

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
    <RNBottomSheetModal
      ref={bottomSheetRef}
      index={0}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}
      enableDynamicSizing={true}
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
      <BottomSheetView style={styles.content}>{children}</BottomSheetView>
    </RNBottomSheetModal>
  );
};

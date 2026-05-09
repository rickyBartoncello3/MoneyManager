import React, {useContext, useMemo} from 'react';
import {View} from 'react-native';

import Text from '@/src/shared/components/ui/Text/Text';

import styles from './AccountSheet.styles';
import {BottomSheetModal} from '@/src/shared/components/ui/BottomSheetModal/BottomSheetModal';
import {Item} from '@/src/features/transaction/components/Item/Item';
import {AccountSheetProps} from '@/src/features/transaction/components/AccountSheet/interfaces';
import {ThemeContext} from '@/src/application/providers/ThemeProvider';

export const AccountSheet = ({
  bottomSheetRef,
  accounts,
  selectedAccountId,
  onSelectAccount,
}: AccountSheetProps) => {
  const {colors} = useContext(ThemeContext);
  const snapPoints = useMemo(() => [], []);

  console.log(accounts);

  return (
    <BottomSheetModal bottomSheetRef={bottomSheetRef} snapPoints={snapPoints}>
      <View style={styles.root}>
        <Text size={18} weight={800}>
          Select Account
        </Text>
        <View style={styles.categoryGrid}>
          {accounts.map((item, index) => {
            const isSelected = selectedAccountId === item.id;
            return (
              <Item
                key={index}
                item={{
                  ...item,
                  color: colors.text,
                  backgroundColor: colors.elevatedCardBackground,
                }}
                isSelected={isSelected}
                onSelect={onSelectAccount}
              />
            );
          })}
        </View>
      </View>
    </BottomSheetModal>
  );
};

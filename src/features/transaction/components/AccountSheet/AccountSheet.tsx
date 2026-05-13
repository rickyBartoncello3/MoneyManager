import React, {use, useMemo} from 'react';
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
  const {colors} = use(ThemeContext);
  const snapPoints = useMemo(() => [], []);

  return (
    <BottomSheetModal bottomSheetRef={bottomSheetRef} snapPoints={snapPoints}>
      <View style={styles.root}>
        <Text size={18} weight={800}>
          Select Account
        </Text>
        <View style={styles.categoryGrid}>
          {accounts.map(item => {
            const isSelected = selectedAccountId === item.id;
            return (
              <Item
                key={item.id}
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

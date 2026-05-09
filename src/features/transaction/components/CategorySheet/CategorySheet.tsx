import React, {useMemo} from 'react';
import {View} from 'react-native';

import Text from '@/src/shared/components/ui/Text/Text';

import styles from './CategorySheet.styles';
import {CategorySheetProps} from '@/src/features/transaction/components/CategorySheet/interfaces';
import {BottomSheetModal} from '@/src/shared/components/ui/BottomSheetModal/BottomSheetModal';
import {Item} from '@/src/features/transaction/components/Item/Item';

export const CategorySheet = ({
  bottomSheetRef,
  categories,
  selectedCategoryId,
  onSelectCategory,
}: CategorySheetProps) => {
  const snapPoints = useMemo(() => [], []);

  return (
    <BottomSheetModal bottomSheetRef={bottomSheetRef} snapPoints={snapPoints}>
      <View style={styles.root}>
        <Text size={18} weight={800}>
          Select Category
        </Text>
        <View style={styles.categoryGrid}>
          {categories.map((item, index) => {
            const isSelected = selectedCategoryId === item.id;
            return (
              <Item
                key={index}
                item={item}
                isSelected={isSelected}
                onSelect={onSelectCategory}
              />
            );
          })}
        </View>
      </View>
    </BottomSheetModal>
  );
};

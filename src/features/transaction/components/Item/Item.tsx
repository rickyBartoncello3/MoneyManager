import React from 'react';
import {Pressable, View} from 'react-native';

import Text from '@/src/shared/components/ui/Text/Text';

import styles from './Item.styles';
import {CustomIcon} from '@/src/shared/components/ui/TabBarIcon/CustomIcon';
import {ItemProps} from '@/src/features/transaction/components/Item/interfaces';

export const Item = ({key, item, isSelected, onSelect}: ItemProps) => {
  return (
    <Pressable key={key} onPress={() => onSelect(item)} style={styles.item}>
      <View
        style={[
          styles.iconContainer,
          {backgroundColor: item.backgroundColor},
          isSelected && {
            borderWidth: 1.5,
            borderColor: item.color,
          },
        ]}
      >
        <CustomIcon name={item.icon} color={item.color} size={22} />
      </View>

      <Text size={12} weight={700} style={styles.text}>
        {item.name}
      </Text>
    </Pressable>
  );
};

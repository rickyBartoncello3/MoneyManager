import React, {useContext} from 'react';
import {Pressable, View} from 'react-native';
import styles from './CategoryCard.styles';
import {CategoryCardProps} from './interfaces';
import {ThemeContext} from '@/src/application/providers/ThemeProvider';
import Text from '@/src/shared/components/ui/Text/Text';
import {Icon} from "react-native-paper/src";

export const CategoryCard = ({category, onCategoryPress}: CategoryCardProps) => {
  const {colors} = useContext(ThemeContext);
  //const Icon =
    //iconMapper[category.icon as IconName] ?? iconMapper[ICON_NAMES.ADD_TRANSACTION];
  return (
    <Pressable
      style={[
        styles.categoryCard,
        {backgroundColor: colors.cardBackground, borderColor: colors.border},
      ]}
      onPress={() => onCategoryPress(category)}
    >
      <View style={[styles.categoryIcon, {backgroundColor: colors.badgeBackground}]}>
        <Icon color={category.color} source={category.icon} size={24}/>
      </View>
      <View style={styles.categoryInfo}>
        <Text size={14} weight={600} style={{color: colors.text}}>
          {category.name}
        </Text>
        <Text size={12} weight={700} style={{color: colors.textSecondary}}>
          0 ARS
        </Text>
      </View>
    </Pressable>
  );
};

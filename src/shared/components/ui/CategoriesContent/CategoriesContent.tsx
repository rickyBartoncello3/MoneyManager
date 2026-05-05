import React, {useContext} from 'react';
import {FlatList, Pressable, View} from 'react-native';
import styles from './CategoriesContent.styles';
import {CategoriesContentProps} from './interfaces';
import {ThemeContext} from '@/src/application/providers/ThemeProvider';
import Text from '@/src/shared/components/ui/Text/Text';
import {ArrowDownRight01Icon} from '@/src/shared/assets/icons';
import {iconMapper} from '@/src/data/mappers/iconMapper';
import {ICON_NAMES, IconName} from '@/src/shared/constants/iconNames';
import {CategoryCard} from '@/src/shared/components/ui/CatergoryCard/CategoryCard';

export const CategoriesContent = ({
  title,
  categories,
  onCategoryPress,
}: CategoriesContentProps) => {
  const {colors} = useContext(ThemeContext);

  return (
    <View style={styles.content}>
      <Text size={16} weight={700} style={{color: colors.text}}>
        {title}
      </Text>

      <FlatList
        data={categories}
        keyExtractor={item => item.id}
        scrollEnabled={false}
        numColumns={2}
        columnWrapperStyle={styles.categoryRow}
        contentContainerStyle={styles.categoryList}
        renderItem={({item}) => (
          <CategoryCard category={item} onCategoryPress={onCategoryPress} />
        )}
      />
    </View>
  );
};

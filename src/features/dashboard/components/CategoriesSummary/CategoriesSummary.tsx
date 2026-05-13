import React, {use, useMemo, useState} from 'react';
import styles from './CategoriesSummary.styles';
import {View} from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import {CategoriesSummaryProps} from '@/src/features/dashboard/components/CategoriesSummary/interfaces';
import {ThemeContext} from '@/src/application/providers/ThemeProvider';
import {Card} from '@/src/shared/components/ui/Card/Card';
import Text from '@/src/shared/components/ui/Text/Text';
import {CategoryRow} from '@/src/features/dashboard/components/CategoryRow/CategoryRow';
import {useTranslation} from 'react-i18next';

export const CategoriesSummary = ({
  categories,
  maxVisible = 6,
  currencySymbol = '$',
  onPressShowMore,
  onPressCategory,
}: CategoriesSummaryProps) => {
  const {t} = useTranslation();
  const {colors} = use(ThemeContext);
  const [showAll, setShowAll] = useState(false);

  const visibleCategories = useMemo(
    () => (showAll ? categories : categories.slice(0, maxVisible)),
    [showAll, categories, maxVisible],
  );

  const hiddenCategoriesCount = Math.max(categories.length - maxVisible, 0);

  return (
    <Card>
      <View style={styles.header}>
        <Text size={14} weight={800} style={{color: colors.text}}>
          {t('dashboard.categories')}
        </Text>
        <View>
          {hiddenCategoriesCount > 0 ? (
            <TouchableRipple
              borderless
              onPress={onPressShowMore}
              style={styles.headerAction}
            >
              <Text
                size={12}
                weight={800}
                style={[
                  {
                    color: colors.primary,
                  },
                ]}
              >
                {t('dashboard.showMore')}
              </Text>
            </TouchableRipple>
          ) : null}
        </View>
      </View>
      <View style={styles.chartAndList}>
        <View style={styles.listContainer}>
          {visibleCategories.map((category, index) => (
            <CategoryRow
              key={`${category.categoryId}-${index}`}
              category={category}
              currencySymbol={currencySymbol}
              onPress={onPressCategory}
            />
          ))}
        </View>
      </View>
      {hiddenCategoriesCount > 0 ? (
        <TouchableRipple
          borderless
          onPress={() => setShowAll(prev => !prev)}
          style={[styles.showMoreButton]}
        >
          <Text size={12} weight={800} style={{color: colors.textMuted}}>
            {showAll
              ? t('dashboard.showLess')
              : `${t('dashboard.show')} ${hiddenCategoriesCount} ${t('dashboard.more')} ↓`}
          </Text>
        </TouchableRipple>
      ) : null}
    </Card>
  );
};

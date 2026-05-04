import {categoryLocalDataSource} from '@/src/data/local/categories/categoryLocalDataSource';
import {categoryMapper} from '@/src/data/mappers/categoryMapper';

export const categoryRepository = {
  async getCategories() {
    const rows = await categoryLocalDataSource.findAll();
    return rows.map(categoryMapper.localRowToDomain);
  },
};

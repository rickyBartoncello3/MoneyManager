// src/features/transactions/components/ExpandableTransactions/TransactionGroupCard.styles.ts

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    overflow: 'hidden',
  },

  groupHeader: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  groupHeaderLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  groupHeaderRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  movementsWrapper: {},
});

export default styles;

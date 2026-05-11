// src/features/transactions/components/ExpandableTransactions/TransactionGroupCard.styles.ts

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },

  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  toolbar: {
    marginBottom: 16,
  },

  toolbarHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 18,
  },

  expandButton: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: 'rgba(22, 163, 74, 0.12)',
  },

  toolbarLabel: {
    opacity: 0.62,
    marginBottom: 8,
  },

  chipsRow: {
    gap: 8,
    paddingBottom: 14,
  },

  groupModeRow: {
    flexDirection: 'row',
    gap: 8,
  },

  chip: {
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderRadius: 999,
    backgroundColor: 'rgba(148, 163, 184, 0.14)',
  },

  chipActive: {
    backgroundColor: '#006B3F',
  },

  chipText: {
    color: '#64748B',
  },

  chipTextActive: {
    color: 'white',
  },

  listContent: {
    paddingBottom: 120,
    //gap: 12,
  },

  groupCard: {
    borderRadius: 22,
    borderWidth: 1,
    borderColor: 'rgba(148, 163, 184, 0.16)',
    backgroundColor: 'rgba(148, 163, 184, 0.08)',
    overflow: 'hidden',
  },

  groupHeader: {
    //minHeight: 74,
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  groupHeaderLeft: {
    flex: 1,
    flexDirection: 'row',
  },

  groupSubtitle: {
    opacity: 0.58,
    marginTop: 4,
  },

  groupHeaderRight: {
    flexDirection: 'row',
  },

  movementsWrapper: {
    paddingHorizontal: 12,
    paddingBottom: 10,
  },

  movementRow: {
    minHeight: 64,
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.58)',
  },

  movementIcon: {
    width: 42,
    height: 42,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },

  movementInfo: {
    flex: 1,
  },

  movementMeta: {
    opacity: 0.56,
    marginTop: 3,
  },

  incomeAmount: {
    color: '#16A34A',
  },

  expenseAmount: {
    color: '#EF4444',
  },

  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 48,
  },

  emptyText: {
    opacity: 0.58,
    marginTop: 6,
    textAlign: 'center',
  },
});

export default styles;

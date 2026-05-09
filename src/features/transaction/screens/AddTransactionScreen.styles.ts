// src/features/transactions/components/AddTransaction/AddTransactionScreen.styles.ts

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingBottom: 50,
    justifyContent: 'space-between',
  },

  header: {
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  segmented: {
    marginTop: 8,
    marginBottom: 26,
  },

  amountBlock: {
    alignItems: 'center',
    marginBottom: 28,
  },

  amountLabel: {
    opacity: 0.65,
    marginBottom: 8,
  },

  amount: {
    letterSpacing: -1,
  },

    boxContainer: {gap: 16},

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  selectorCard: {
    flex: 1,
    minHeight: 78,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: 'rgba(148, 163, 184, 0.18)',
    paddingHorizontal: 12,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },

  fullSelector: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  selectorIcon: {
    width: 38,
    height: 38,
    borderRadius: 14,
    backgroundColor: 'rgba(22, 163, 74, 0.14)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },

  categoryEmptyIcon: {
    width: 38,
    height: 38,
    borderRadius: 999,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: 'rgba(148, 163, 184, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },

  selectorInfo: {
    flex: 1,
  },

  selectorLabel: {
    opacity: 0.6,
    marginBottom: 4,
  },

  selectorSubLabel: {
    opacity: 0.58,
    marginTop: 2,
  },

  saveButton: {
    height: 56,
    borderRadius: 16,
    backgroundColor: '#006B3F',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
  },

  saveButtonDisabled: {
    opacity: 0.32,
  },

  saveButtonText: {
    color: 'white',
  },
});

export default styles;

export const ICON_NAMES = {
  HOME: 'home',
  TRANSACTIONS: 'transactions',
  ADD_TRANSACTION: 'addTransaction',
  REPORTS: 'reports',
  MORE: 'more',
  ADD_CIRCLE: 'addCircle',
  REMOVE_CIRCLE: 'removeCircle',
  ADD: 'add',
  REMOVE: 'remove',
} as const;

export type IconName = (typeof ICON_NAMES)[keyof typeof ICON_NAMES];

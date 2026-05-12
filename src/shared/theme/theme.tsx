import {StyleSheet} from 'react-native';
import {moderateScale} from '@/src/shared/theme/scaling';
export type ThemeColors = {
  // Brand
  primary: string;
  primaryDark: string;
  primaryLight: string;
  primarySoft: string;
  primarySurface: string;

  // Base
  text: string;
  textSecondary: string;
  textMuted: string;
  textDisabled: string;
  background: string;
  surface: string;
  cardBackground: string;
  elevatedCardBackground: string;
  modalBackground: string;

  // Borders / dividers
  border: string;
  borderStrong: string;
  divider: string;

  // Money states
  income: string;
  incomeSoft: string;
  incomeText: string;
  expense: string;
  expenseSoft: string;
  expenseText: string;
  positive: string;
  negative: string;
  warning: string;
  warningSoft: string;
  warningText: string;
  danger: string;
  dangerSoft: string;
  dangerText: string;
  success: string;
  successSoft: string;
  successText: string;
  info: string;
  infoSoft: string;
  infoText: string;

  // UI
  buttonTextColor: string;
  buttonDisabledBackground: string;
  buttonDisabledText: string;
  tabActive: string;
  tabInactive: string;
  tabBackground: string;
  tabBorder: string;
  icon: string;
  iconMuted: string;
  iconDisabled: string;
  inputBackground: string;
  inputBorder: string;
  inputFocusedBorder: string;
  inputPlaceholder: string;
  chipBackground: string;
  chipActiveBackground: string;
  chipText: string;
  chipActiveText: string;
  overlay: string;
  shadow: string;
  skeletonBase: string;
  skeletonHighlight: string;

  // Charts
  chartGreen: string;
  chartBlue: string;
  chartYellow: string;
  chartOrange: string;
  chartPink: string;
  chartPurple: string;
  chartGray: string;
  chartCyan: string;
  chartRed: string;
  chartIndigo: string;

  // Special surfaces
  balanceCardBackground: string;
  balanceCardText: string;
  balanceCardMutedText: string;
  insightCardBackground: string;
  accountRowBackground: string;
  transactionRowBackground: string;
  transactionGroupBackground: string;
  bottomSheetBackground: string;
  keyboardButtonBackground: string;
  keyboardOperatorBackground: string;
  keyboardEqualBackground: string;
  badgeBackground: string;
  badgeText: string;

  // Calendar / date picker
  calendarSelectedBackground: string;
  calendarSelectedText: string;
  calendarTodayText: string;
  calendarDisabledText: string;

  // Category fallback colors
  categoryFood: string;
  categoryFoodBackground: string;
  categoryTransport: string;
  categoryTransportBackground: string;
  categoryShopping: string;
  categoryShoppingBackground: string;
  categoryHealth: string;
  categoryHealthBackground: string;
  categoryHome: string;
  categoryHomeBackground: string;
  categoryTravel: string;
  categoryTravelBackground: string;
  categorySalary: string;
  categorySalaryBackground: string;
};
export interface ThemeSpacing {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
}

export interface ThemeRadius {
  sm: number;
  md: number;
  lg: number;
  xl: number;
  full: number;
}

export interface ThemeFontSize {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
  display: number;
}

export interface ThemeTabLabelText {
  fontSize: number;
  fontWeight: number;
  fontFamily: string;
  activeColor: string;
  inactiveColor: string;
}

export interface AppTheme {
  colors: ThemeColors;
  spacing: ThemeSpacing;
  radius: ThemeRadius;
  fontSize: ThemeFontSize;
  tabLabel: ThemeTabLabelText;
}

export const lightColors: ThemeColors = {
  // Brand
  primary: '#16A34A',
  primaryDark: '#0F6B38',
  primaryLight: '#DCFCE7',
  primarySoft: 'rgba(22, 163, 74, 0.12)',
  primarySurface: '#F0FDF4',

  // Base
  text: '#0F172A',
  textSecondary: '#475569',
  textMuted: '#94A3B8',
  textDisabled: '#CBD5E1',
  background: '#F7F8FA',
  surface: '#FFFFFF',
  cardBackground: '#FFFFFF',
  elevatedCardBackground: '#FFFFFF',
  modalBackground: '#FFFFFF',

  // Borders / dividers
  border: '#E5E7EB',
  borderStrong: '#CBD5E1',
  divider: '#EEF0F3',

  // Money states
  income: '#16A34A',
  incomeSoft: 'rgba(22, 163, 74, 0.14)',
  incomeText: '#15803D',
  expense: '#EF4444',
  expenseSoft: 'rgba(239, 68, 68, 0.12)',
  expenseText: '#DC2626',
  positive: '#16A34A',
  negative: '#EF4444',
  warning: '#F59E0B',
  warningSoft: 'rgba(245, 158, 11, 0.14)',
  warningText: '#B45309',
  danger: '#EF4444',
  dangerSoft: 'rgba(239, 68, 68, 0.12)',
  dangerText: '#B91C1C',
  success: '#16A34A',
  successSoft: 'rgba(22, 163, 74, 0.14)',
  successText: '#15803D',
  info: '#2563EB',
  infoSoft: 'rgba(37, 99, 235, 0.12)',
  infoText: '#1D4ED8',

  // UI
  buttonTextColor: '#FFFFFF',
  buttonDisabledBackground: '#CBD5E1',
  buttonDisabledText: '#64748B',
  tabActive: '#16A34A',
  tabInactive: '#64748B',
  tabBackground: 'rgba(255, 255, 255, 0.86)',
  tabBorder: 'rgba(226, 232, 240, 0.8)',
  icon: '#0F172A',
  iconMuted: '#94A3B8',
  iconDisabled: '#CBD5E1',
  inputBackground: '#FFFFFF',
  inputBorder: '#E5E7EB',
  inputFocusedBorder: '#16A34A',
  inputPlaceholder: '#94A3B8',
  chipBackground: 'rgba(148, 163, 184, 0.14)',
  chipActiveBackground: '#006B3F',
  chipText: '#64748B',
  chipActiveText: '#FFFFFF',
  overlay: 'rgba(15, 23, 42, 0.42)',
  shadow: 'rgba(15, 23, 42, 0.12)',
  skeletonBase: '#E5E7EB',
  skeletonHighlight: '#F8FAFC',

  // Charts
  chartGreen: '#22C55E',
  chartBlue: '#2563EB',
  chartYellow: '#FACC15',
  chartOrange: '#FB923C',
  chartPink: '#F43F5E',
  chartPurple: '#8B5CF6',
  chartGray: '#CBD5E1',
  chartCyan: '#06B6D4',
  chartRed: '#EF4444',
  chartIndigo: '#6366F1',

  // Special surfaces
  balanceCardBackground: '#065F46',
  balanceCardText: '#FFFFFF',
  balanceCardMutedText: '#BBF7D0',
  insightCardBackground: '#FFFFFF',
  accountRowBackground: '#FFFFFF',
  transactionRowBackground: '#FFFFFF',
  transactionGroupBackground: 'rgba(148, 163, 184, 0.08)',
  bottomSheetBackground: '#FFFFFF',
  keyboardButtonBackground: 'rgba(148, 163, 184, 0.12)',
  keyboardOperatorBackground: 'rgba(148, 163, 184, 0.18)',
  keyboardEqualBackground: '#16A34A',
  badgeBackground: '#DCFCE7',
  badgeText: '#15803D',

  // Calendar / date picker
  calendarSelectedBackground: '#16A34A',
  calendarSelectedText: '#FFFFFF',
  calendarTodayText: '#16A34A',
  calendarDisabledText: '#CBD5E1',

  // Category fallback colors
  categoryFood: '#22C55E',
  categoryFoodBackground: 'rgba(34, 197, 94, 0.16)',
  categoryTransport: '#3B82F6',
  categoryTransportBackground: 'rgba(59, 130, 246, 0.16)',
  categoryShopping: '#FB7185',
  categoryShoppingBackground: 'rgba(251, 113, 133, 0.16)',
  categoryHealth: '#EC4899',
  categoryHealthBackground: 'rgba(236, 72, 153, 0.16)',
  categoryHome: '#F59E0B',
  categoryHomeBackground: 'rgba(245, 158, 11, 0.16)',
  categoryTravel: '#06B6D4',
  categoryTravelBackground: 'rgba(6, 182, 212, 0.16)',
  categorySalary: '#10B981',
  categorySalaryBackground: 'rgba(16, 185, 129, 0.16)',
};

export const darkColors: ThemeColors = {
  // Brand
  primary: '#22C55E',
  primaryDark: '#16A34A',
  primaryLight: '#14532D',
  primarySoft: 'rgba(34, 197, 94, 0.14)',
  primarySurface: '#052E1A',

  // Base
  text: '#F8FAFC',
  textSecondary: '#CBD5E1',
  textMuted: '#64748B',
  textDisabled: '#475569',
  background: '#070B0F',
  surface: '#0B1117',
  cardBackground: '#111827',
  elevatedCardBackground: '#172033',
  modalBackground: '#111827',

  // Borders / dividers
  border: '#1F2937',
  borderStrong: '#334155',
  divider: '#273244',

  // Money states
  income: '#22C55E',
  incomeSoft: 'rgba(34, 197, 94, 0.16)',
  incomeText: '#86EFAC',
  expense: '#F87171',
  expenseSoft: 'rgba(248, 113, 113, 0.14)',
  expenseText: '#FCA5A5',
  positive: '#22C55E',
  negative: '#F87171',
  warning: '#FBBF24',
  warningSoft: 'rgba(251, 191, 36, 0.14)',
  warningText: '#FDE68A',
  danger: '#F87171',
  dangerSoft: 'rgba(248, 113, 113, 0.14)',
  dangerText: '#FCA5A5',
  success: '#22C55E',
  successSoft: 'rgba(34, 197, 94, 0.16)',
  successText: '#86EFAC',
  info: '#60A5FA',
  infoSoft: 'rgba(96, 165, 250, 0.14)',
  infoText: '#BFDBFE',

  // UI
  buttonTextColor: '#FFFFFF',
  buttonDisabledBackground: '#334155',
  buttonDisabledText: '#94A3B8',
  tabActive: '#22C55E',
  tabInactive: '#94A3B8',
  tabBackground: 'rgba(17, 24, 39, 0.86)',
  tabBorder: 'rgba(51, 65, 85, 0.8)',
  icon: '#F8FAFC',
  iconMuted: '#64748B',
  iconDisabled: '#475569',
  inputBackground: '#111827',
  inputBorder: '#273244',
  inputFocusedBorder: '#22C55E',
  inputPlaceholder: '#64748B',
  chipBackground: 'rgba(148, 163, 184, 0.14)',
  chipActiveBackground: '#22C55E',
  chipText: '#CBD5E1',
  chipActiveText: '#052E1A',
  overlay: 'rgba(0, 0, 0, 0.58)',
  shadow: 'rgba(0, 0, 0, 0.34)',
  skeletonBase: '#1F2937',
  skeletonHighlight: '#334155',

  // Charts
  chartGreen: '#22C55E',
  chartBlue: '#3B82F6',
  chartYellow: '#EAB308',
  chartOrange: '#FB923C',
  chartPink: '#FB7185',
  chartPurple: '#A78BFA',
  chartGray: '#64748B',
  chartCyan: '#22D3EE',
  chartRed: '#F87171',
  chartIndigo: '#818CF8',

  // Special surfaces
  balanceCardBackground: '#064E3B',
  balanceCardText: '#FFFFFF',
  balanceCardMutedText: '#BBF7D0',
  insightCardBackground: '#111827',
  accountRowBackground: '#111827',
  transactionRowBackground: '#172033',
  transactionGroupBackground: 'rgba(148, 163, 184, 0.08)',
  bottomSheetBackground: '#111827',
  keyboardButtonBackground: 'rgba(148, 163, 184, 0.12)',
  keyboardOperatorBackground: 'rgba(148, 163, 184, 0.18)',
  keyboardEqualBackground: '#22C55E',
  badgeBackground: '#14532D',
  badgeText: '#BBF7D0',

  // Calendar / date picker
  calendarSelectedBackground: '#22C55E',
  calendarSelectedText: '#052E1A',
  calendarTodayText: '#22C55E',
  calendarDisabledText: '#475569',

  // Category fallback colors
  categoryFood: '#22C55E',
  categoryFoodBackground: 'rgba(34, 197, 94, 0.16)',
  categoryTransport: '#60A5FA',
  categoryTransportBackground: 'rgba(96, 165, 250, 0.16)',
  categoryShopping: '#FB7185',
  categoryShoppingBackground: 'rgba(251, 113, 133, 0.16)',
  categoryHealth: '#F472B6',
  categoryHealthBackground: 'rgba(244, 114, 182, 0.16)',
  categoryHome: '#FBBF24',
  categoryHomeBackground: 'rgba(251, 191, 36, 0.16)',
  categoryTravel: '#22D3EE',
  categoryTravelBackground: 'rgba(34, 211, 238, 0.16)',
  categorySalary: '#34D399',
  categorySalaryBackground: 'rgba(52, 211, 153, 0.16)',
};
export const spacing: ThemeSpacing = {
  xs: moderateScale(4),
  sm: moderateScale(8),
  md: moderateScale(12),
  lg: moderateScale(16),
  xl: moderateScale(20),
  xxl: moderateScale(24),
};

export const radius: ThemeRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 999,
};

export const fontSize: ThemeFontSize = {
  xs: 11,
  sm: 13,
  md: 15,
  lg: 17,
  xl: 22,
  xxl: 30,
  display: 42,
};

const lightTabLabel: ThemeTabLabelText = {
  fontSize: 12,
  fontWeight: 600,
  fontFamily: 'System',
  activeColor: '#16A34A',
  inactiveColor: '#64748B',
};

const darkTabLabel: ThemeTabLabelText = {
  fontSize: 12,
  fontWeight: 600,
  fontFamily: 'System',
  activeColor: '#22C55E',
  inactiveColor: '#94A3B8',
};

export const lightTheme: AppTheme = {
  colors: lightColors,
  spacing,
  radius,
  fontSize,
  tabLabel: lightTabLabel,
};

export const darkTheme: AppTheme = {
  colors: darkColors,
  spacing,
  radius,
  fontSize,
  tabLabel: darkTabLabel,
};

// Default theme
export const colors: ThemeColors = lightColors;

export const globalStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },

  screenContainer: {
    flex: 1,
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.lg,
  },

  globalMargin: {
    paddingHorizontal: spacing.xl,
    flex: 1,
  },

  title: {
    fontSize: fontSize.xxl,
    fontWeight: '700',
  },

  subTitle: {
    fontSize: fontSize.xl,
    fontWeight: '700',
  },

  sectionTitle: {
    fontSize: fontSize.lg,
    fontWeight: '700',
    marginBottom: spacing.md,
  },

  bodyText: {
    fontSize: fontSize.md,
    fontWeight: '400',
  },

  caption: {
    fontSize: fontSize.sm,
    fontWeight: '400',
  },

  card: {
    borderRadius: radius.lg,
    padding: spacing.lg,
    borderWidth: 1,
  },

  balanceCard: {
    borderRadius: radius.xl,
    padding: spacing.xl,
    minHeight: 170,
  },

  balanceAmount: {
    fontSize: fontSize.display,
    fontWeight: '800',
    letterSpacing: -1,
  },

  balanceLabel: {
    fontSize: fontSize.md,
    fontWeight: '500',
  },

  balanceBadge: {
    alignSelf: 'flex-start',
    borderRadius: radius.full,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    marginTop: spacing.sm,
  },

  insightContainer: {
    flexDirection: 'row',
    gap: spacing.md,
  },

  insightCard: {
    flex: 1,
    borderRadius: radius.lg,
    padding: spacing.md,
    borderWidth: 1,
    minHeight: 110,
  },

  insightValue: {
    fontSize: fontSize.xl,
    fontWeight: '800',
    marginTop: spacing.sm,
  },

  categoryCard: {
    borderRadius: radius.lg,
    padding: spacing.lg,
    borderWidth: 1,
  },

  categoryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: spacing.xs,
  },

  categoryDot: {
    width: 10,
    height: 10,
    borderRadius: radius.full,
    marginRight: spacing.sm,
  },

  accountCard: {
    borderRadius: radius.lg,
    padding: spacing.md,
    borderWidth: 1,
  },

  accountRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: spacing.md,
  },

  accountIcon: {
    width: 34,
    height: 34,
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },

  accountName: {
    fontSize: fontSize.md,
    fontWeight: '600',
  },

  accountCurrency: {
    fontSize: fontSize.xs,
    fontWeight: '500',
  },

  accountAmount: {
    fontSize: fontSize.md,
    fontWeight: '700',
  },

  accountEquivalent: {
    fontSize: fontSize.xs,
    fontWeight: '500',
    marginTop: 2,
  },

  input: {
    height: 44,
    marginVertical: spacing.sm,
    borderWidth: 1,
    paddingHorizontal: spacing.md,
    borderRadius: radius.md,
    fontSize: fontSize.md,
  },

  btnPrimary: {
    borderRadius: radius.md,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnPrimaryText: {
    fontSize: fontSize.md,
    fontWeight: '700',
  },

  floatingActionButton: {
    width: 64,
    height: 64,
    borderRadius: radius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },

  bottomTabBar: {
    height: 78,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopWidth: 1,
  },

  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },

  tabLabel: {
    fontSize: fontSize.xs,
    fontWeight: '600',
  },

  divider: {
    height: 1,
    width: '100%',
  },
});

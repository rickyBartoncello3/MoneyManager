import {StyleSheet, TextStyle} from 'react-native';
export interface ThemeColors {
  // Brand
  primary: string;
  primaryDark: string;
  primaryLight: string;

  // Base
  text: string;
  textSecondary: string;
  textMuted: string;
  background: string;
  cardBackground: string;
  elevatedCardBackground: string;

  // Borders / dividers
  border: string;
  divider: string;

  // Money states
  income: string;
  expense: string;
  positive: string;
  negative: string;
  warning: string;

  // UI
  buttonTextColor: string;
  tabActive: string;
  tabInactive: string;
  icon: string;
  iconMuted: string;

  // Charts
  chartGreen: string;
  chartBlue: string;
  chartYellow: string;
  chartOrange: string;
  chartPink: string;
  chartPurple: string;
  chartGray: string;

  // Special surfaces
  balanceCardBackground: string;
  balanceCardText: string;
  balanceCardMutedText: string;
  insightCardBackground: string;
  accountRowBackground: string;
  badgeBackground: string;
  badgeText: string;
}

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
  fontWeight: TextStyle['fontWeight'];
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

  // Base
  text: '#0F172A',
  textSecondary: '#475569',
  textMuted: '#94A3B8',
  background: '#F7F8FA',
  cardBackground: '#FFFFFF',
  elevatedCardBackground: '#FFFFFF',

  // Borders / dividers
  border: '#E5E7EB',
  divider: '#EEF0F3',

  // Money states
  income: '#16A34A',
  expense: '#EF4444',
  positive: '#16A34A',
  negative: '#EF4444',
  warning: '#F59E0B',

  // UI
  buttonTextColor: '#FFFFFF',
  tabActive: '#16A34A',
  tabInactive: '#64748B',
  icon: '#0F172A',
  iconMuted: '#94A3B8',

  // Charts
  chartGreen: '#22C55E',
  chartBlue: '#2563EB',
  chartYellow: '#FACC15',
  chartOrange: '#FB923C',
  chartPink: '#F43F5E',
  chartPurple: '#8B5CF6',
  chartGray: '#CBD5E1',

  // Special surfaces
  balanceCardBackground: '#065F46',
  balanceCardText: '#FFFFFF',
  balanceCardMutedText: '#BBF7D0',
  insightCardBackground: '#FFFFFF',
  accountRowBackground: '#FFFFFF',
  badgeBackground: '#DCFCE7',
  badgeText: '#15803D',
};

export const darkColors: ThemeColors = {
  // Brand
  primary: '#22C55E',
  primaryDark: '#16A34A',
  primaryLight: '#14532D',

  // Base
  text: '#F8FAFC',
  textSecondary: '#CBD5E1',
  textMuted: '#64748B',
  background: '#070B0F',
  cardBackground: '#111827',
  elevatedCardBackground: '#172033',

  // Borders / dividers
  border: '#1F2937',
  divider: '#273244',

  // Money states
  income: '#22C55E',
  expense: '#F87171',
  positive: '#22C55E',
  negative: '#F87171',
  warning: '#FBBF24',

  // UI
  buttonTextColor: '#FFFFFF',
  tabActive: '#22C55E',
  tabInactive: '#94A3B8',
  icon: '#F8FAFC',
  iconMuted: '#64748B',

  // Charts
  chartGreen: '#22C55E',
  chartBlue: '#3B82F6',
  chartYellow: '#EAB308',
  chartOrange: '#FB923C',
  chartPink: '#FB7185',
  chartPurple: '#A78BFA',
  chartGray: '#64748B',

  // Special surfaces
  balanceCardBackground: '#064E3B',
  balanceCardText: '#FFFFFF',
  balanceCardMutedText: '#BBF7D0',
  insightCardBackground: '#111827',
  accountRowBackground: '#111827',
  badgeBackground: '#14532D',
  badgeText: '#BBF7D0',
};

export const spacing: ThemeSpacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
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
  fontWeight: '600',
  fontFamily: 'System',
  activeColor: '#16A34A',
  inactiveColor: '#64748B',
};

const darkTabLabel: ThemeTabLabelText = {
  fontSize: 12,
  fontWeight: '600',
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
    paddingVertical: spacing.md,
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

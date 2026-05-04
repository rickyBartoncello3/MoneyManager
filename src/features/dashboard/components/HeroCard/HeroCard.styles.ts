import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  card: {
    borderRadius: 28,
    overflow: 'hidden',
  },
  content: {
    padding: 20,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
  },
  balanceContainer: {
    flex: 1,
  },
  title: {
    marginBottom: 4,
  },
  amount: {
    letterSpacing: -1.2,
  },
  badge: {
    marginTop: 10,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
  },
  badgeDot: {
    width: 7,
    height: 7,
    borderRadius: 999,
    marginRight: 6,
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.16)',
    marginVertical: 18,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  budgetContainer: {
    alignItems: 'flex-end',
  },
  metric: {
    gap: 4,
  },
});

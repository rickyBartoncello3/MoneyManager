import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    //minHeight: 58,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  accountInfo: {
    flex: 1,
  },
  accountCurrency: {},
  rightContent: {
    alignItems: 'flex-end',
  },
  accountEquivalent: {
    marginTop: 2,
  },
});

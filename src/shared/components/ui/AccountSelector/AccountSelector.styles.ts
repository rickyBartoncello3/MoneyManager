import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  accountSelector: {
    gap: 10,
  },

  accountCard: {
    minHeight: 72,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: 'rgba(148, 163, 184, 0.22)',
    backgroundColor: 'rgba(15, 23, 42, 0.05)',
    paddingHorizontal: 12,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },

  accountCardSelected: {
    borderColor: '#16A34A',
    backgroundColor: 'rgba(22, 163, 74, 0.12)',
  },

  accountIcon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#16A34A',
    marginRight: 12,
  },

  accountInfo: {
    flex: 1,
  },

  accountBalance: {
    opacity: 0.6,
    marginTop: 3,
  },
});

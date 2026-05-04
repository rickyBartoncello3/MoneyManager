import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    height: 36,
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 4,
    marginTop: 12,
  },
  barWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  bar: {
    width: '100%',
    borderRadius: 999,
  },
});

import {StyleSheet} from 'react-native';
import colors from '../../../theme/colors.ts';

export default StyleSheet.create({
  root: {
    padding: 4,
  },
  container: {
    alignItems: 'center',
    gap: 4,
  },
  iconWrapper: {
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 100,
    overflow: 'hidden',
    position: 'relative',
  },
  animatedBg: {
    flex: 1,
    borderRadius: 100,
    backgroundColor: colors.cyan_100,
  },
  label: {
    width: '100%',
    textAlign: 'center',
  },
});

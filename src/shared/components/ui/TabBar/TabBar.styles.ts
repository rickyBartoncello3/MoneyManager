import {StyleSheet} from 'react-native';
import colors from '@/src/shared/theme/colors';

export default StyleSheet.create({
  root: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 24,
    height: 72,
    borderRadius: 28,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',

    shadowColor: '#000',
    shadowOffset: {width: 0, height: 12},
    shadowOpacity: 0.12,
    shadowRadius: 24,
    elevation: 12,
  },

  blurOverlay: {
    ...StyleSheet.absoluteFillObject,
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

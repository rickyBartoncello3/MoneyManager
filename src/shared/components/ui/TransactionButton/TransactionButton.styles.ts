import {StyleSheet} from 'react-native';
import {width} from '@/src/shared/theme/scaling';

export default StyleSheet.create({
  actionButton: {
    borderRadius: 20,
    overflow: 'hidden',
  },
  actionContent: {
    alignItems: 'center',
    justifyContent: 'center',
    height: width / 2 - 22 * 2,
    width: width / 2 - 22 * 2,
    gap: 8,
  },
  iconBubble: {
    width: 50,
    height: 50,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    color: '#FFFFFF',
    lineHeight: 28,
  },
  actionTextContainer: {
    //flex: 1,
  },
});

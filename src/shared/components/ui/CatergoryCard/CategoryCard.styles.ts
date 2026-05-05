import {StyleSheet} from 'react-native';
import {horizontalScale, width} from '@/src/shared/theme/scaling';

export default StyleSheet.create({
  categoryCard: {
    flex: 1,
    minWidth: horizontalScale(width / 2 - 44),
    borderRadius: 18,
    borderWidth: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  categoryIcon: {
    width: 34,
    height: 34,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  categoryInfo: {
    flex: 1,
  },

  categorySubtitle: {
    opacity: 0.55,
    marginTop: 3,
  },
});

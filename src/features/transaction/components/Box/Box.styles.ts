import {StyleSheet} from 'react-native';
import {width} from '@/src/shared/theme/scaling';

const styles = StyleSheet.create({
  root: {
    maxHeight: 150,
    minWidth: width / 2 - 16 * 2,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  selectorIcon: {
    width: 38,
    height: 38,
    borderRadius: 14,
    backgroundColor: 'rgba(22, 163, 74, 0.14)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },

  categoryEmptyIcon: {
    width: 38,
    height: 38,
    borderRadius: 999,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: 'rgba(148, 163, 184, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },

  titleContainer: {
    flex: 1,
  },

  title: {
    opacity: 0.6,
    marginBottom: 4,
  },

  selectorSubLabel: {
    opacity: 0.58,
    marginTop: 2,
  },
});

export default styles;

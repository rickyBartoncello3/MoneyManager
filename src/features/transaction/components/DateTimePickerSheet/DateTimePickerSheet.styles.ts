import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingBottom: 16,
    gap: 16,
  },

  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 16,
  },
});

export default styles;

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  header: {
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  headerAction: {
    borderRadius: 999,
  },
  chartAndList: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  chartContainer: {
    width: 122,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    flex: 1,
    gap: 8,
  },
  showMoreButton: {
    marginTop: 8,
    alignSelf: 'center',
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 7,
  },
});

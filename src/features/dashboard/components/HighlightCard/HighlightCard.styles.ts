import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 20,
    borderWidth: 1,
  },
  content: {
    padding: 4,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 16,
  },
  iconBubble: {
    width: 34,
    height: 34,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleContainer: {
    flexDirection: 'column',
  },

  title: {},
  subtitle: {},
});

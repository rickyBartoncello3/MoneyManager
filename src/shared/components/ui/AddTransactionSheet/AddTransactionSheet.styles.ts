import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  content: {
    padding: 16,
    alignItems: 'center',
    gap: 8,
  },
  subtitle: {},
  actionsContainer: {
    gap: 12,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  actionButton: {
    borderRadius: 20,
    overflow: 'hidden',
  },
  actionContent: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    width: 150,
  },
  iconBubble: {
    width: 60,
    height: 60,
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

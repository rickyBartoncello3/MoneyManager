import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    marginTop: 20,
  },
  header: {
    marginBottom: 8,
  },
  subtitle: {
    marginTop: 2,
  },
  seeAllButton: {
    borderRadius: 999,
    paddingHorizontal: 6,
    paddingVertical: 4,
  },
  card: {
    borderRadius: 22,
    borderWidth: 1,
  },
  cardContent: {
    padding: 14,
  },
  totalContainer: {
    borderRadius: 18,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  totalAmount: {
    marginTop: 2,
    letterSpacing: -0.4,
  },
  totalCurrency: {
    opacity: 0.72,
  },
  list: {
    gap: 4,
  },
  divider: {
    marginTop: 4,
    height: 1,
    marginLeft: 15,
  },
});

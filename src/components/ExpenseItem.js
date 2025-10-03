import { StyleSheet, Text, View } from 'react-native';

function formatAmount(amount) {
  const n = Number(amount);
  if (isNaN(n)) return '₦0.00';
  return `₦${n.toFixed(2)}`;
}

export default function ExpenseItem({ title, amount, category }) {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <View style={styles.left}>
          <Text style={styles.title} numberOfLines={1}>{title}</Text>
          <Text style={styles.category}>{category}</Text>
        </View>
        <Text style={styles.amount}>{formatAmount(amount)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginVertical: 6,
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    // Elevation for Android
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
    minWidth: 0,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
  },
  category: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
  },
  amount: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1a7f37',
    marginLeft: 12,
  },
});

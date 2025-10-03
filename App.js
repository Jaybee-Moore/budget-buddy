import { useEffect, useState } from 'react';
import { Alert, Button, Dimensions, FlatList, Image, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import CategoryChips from './components/CategoryChips';
import ExpenseItem from './components/ExpenseItem';
import { loadExpenses, saveExpenses } from './storage/expenses';
import { formatCurrency } from './utils/currency';

const CATEGORIES = ['Food', 'Transport', 'Bills', 'Other'];

export default function App() {
  const [expenses, setExpenses] = useState([]);
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState(CATEGORIES[0]);

  // Responsive paddings for small screens
  const screenWidth = Dimensions.get('window').width;
  const horizontalPadding = screenWidth < 350 ? 8 : 16;

  useEffect(() => {
    (async () => {
      const data = await loadExpenses();
      setExpenses(Array.isArray(data) ? data : []);
    })();
  }, []);

  useEffect(() => {
    saveExpenses(expenses);
  }, [expenses]);

  function addExpense() {
    if (!title.trim() || isNaN(Number(amount)) || !amount.trim()) {
      Alert.alert('Invalid input', 'Please enter a valid title and numeric amount.');
      return;
    }
    const newExpense = {
      id: Date.now().toString(),
      title: title.trim(),
      amount: Number(amount),
      category,
      created: Date.now(),
    };
    setExpenses([newExpense, ...expenses]);
    // Clear inputs after add
    setTitle('');
    setAmount('');
    setCategory(CATEGORIES[0]);
  }

  function getTotals() {
    let total = 0;
    const perCat = { Food: 0, Transport: 0, Bills: 0, Other: 0 };
    for (const e of expenses) {
      const cat = CATEGORIES.includes(e.category) ? e.category : 'Other';
      perCat[cat] += Number(e.amount) || 0;
      total += Number(e.amount) || 0;
    }
    return { total, perCat };
  }

  const { total, perCat } = getTotals();

  return (
    <SafeAreaView style={[styles.container, { paddingHorizontal: horizontalPadding }]}> 
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 24}
      >
        <View style={styles.logoContainer}>
          <Image
            source={require('./assets/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.header}>Budget Buddy</Text>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Add Expense</Text>
          <View style={styles.divider} />
          <TextInput
            style={[styles.input, screenWidth < 350 && styles.inputSmall]}
            placeholder="Title"
            value={title}
            onChangeText={setTitle}
            returnKeyType="next"
          />
          <TextInput
            style={[styles.input, screenWidth < 350 && styles.inputSmall]}
            placeholder="Amount"
            value={amount}
            onChangeText={setAmount}
            keyboardType="numeric"
            returnKeyType="done"
          />
          <CategoryChips value={category} onChange={setCategory} />
          <Button title="Add" onPress={addExpense} />
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Totals</Text>
          <View style={styles.divider} />
          <Text style={styles.total}>Total Spent: {formatCurrency(total, 'NGN')}</Text>
          <View style={styles.totalsRow}>
            {CATEGORIES.map(cat => (
              <View key={cat} style={styles.totalsItem}>
                <Text style={styles.totalsLabel}>{cat}</Text>
                <Text style={styles.totalsValue}>{formatCurrency(perCat[cat], 'NGN')}</Text>
              </View>
            ))}
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Expenses</Text>
          <View style={styles.divider} />
          <FlatList
            data={expenses}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <ExpenseItem title={item.title} amount={item.amount} category={item.category} />
            )}
            ListEmptyComponent={<Text style={styles.empty}>No expenses yet — add your first one!</Text>}
            contentContainerStyle={expenses.length === 0 ? { flex: 1, justifyContent: 'center' } : null}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 4,
  },
  logo: {
    width: 120,
    height: 120,
  },
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    paddingTop: Platform.OS === 'android' ? 32 : 0,
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 16,
    color: '#1a7f37',
  },
  section: {
    marginBottom: 18,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    color: '#222',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#eee',
  },
  inputSmall: {
    padding: 8,
    fontSize: 15,
  },
  total: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 8,
    color: '#1a7f37',
  },
  totalsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
  totalsItem: {
    alignItems: 'center',
    flex: 1,
  },
  totalsLabel: {
    fontSize: 13,
    color: '#888',
  },
  totalsValue: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1a7f37',
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 8,
  },
  empty: {
    textAlign: 'center',
    color: '#888',
    marginTop: 32,
    fontSize: 16,
  },
});

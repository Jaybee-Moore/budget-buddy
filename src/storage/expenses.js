import AsyncStorage from '@react-native-async-storage/async-storage';

const EXPENSES_KEY = 'bb:expenses:v1';

export async function loadExpenses() {
  try {
    const jsonValue = await AsyncStorage.getItem(EXPENSES_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error('Failed to load expenses:', e);
    return [];
  }
}

export async function saveExpenses(expenses) {
  try {
    const jsonValue = JSON.stringify(expenses);
    await AsyncStorage.setItem(EXPENSES_KEY, jsonValue);
    return true;
  } catch (e) {
    console.error('Failed to save expenses:', e);
    return false;
  }
}

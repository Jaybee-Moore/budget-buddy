import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';

const CATEGORIES = ['Food', 'Transport', 'Bills', 'Other'];

export default function CategoryChips({ value, onChange }) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.row}>
      {CATEGORIES.map((cat) => {
        const selected = value === cat;
        return (
          <TouchableOpacity
            key={cat}
            style={[styles.chip, selected && styles.selectedChip]}
            onPress={() => onChange(cat)}
            activeOpacity={0.7}
          >
            <Text style={[styles.chipText, selected && styles.selectedText]}>{cat}</Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    paddingVertical: 4,
    gap: 8,
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
    backgroundColor: '#f2f2f2',
    borderWidth: 1,
    borderColor: 'transparent',
  },
  selectedChip: {
    borderColor: '#888',
    backgroundColor: '#e6e6e6',
  },
  chipText: {
    fontWeight: '400',
    color: '#333',
  },
  selectedText: {
    fontWeight: '700',
    color: '#222',
  },
});

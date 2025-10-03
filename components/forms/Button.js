import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { PRIMARY_COLOR, ACCENT_COLOR } from '../../constants/theme';

export default function Button({ title, onPress, style }) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: PRIMARY_COLOR,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  text: {
    color: ACCENT_COLOR,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
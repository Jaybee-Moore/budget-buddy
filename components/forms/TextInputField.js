import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Controller } from 'react-hook-form';
import { ACCENT_COLOR, SECONDARY_COLOR } from '../../constants/theme';

export default function TextInputField({
  label,
  name,
  control,
  rules,
  error,
  ...inputProps
}) {
  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.input, error && styles.inputError]}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            {...inputProps}
          />
        )}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  field: { marginBottom: 18 },
  label: { fontWeight: '600', marginBottom: 6, color: SECONDARY_COLOR },
  input: {
    borderWidth: 1,
    borderColor: ACCENT_COLOR,
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#fff',
    color: '#222',
  },
  inputError: { borderColor: '#E63946' },
  error: { color: '#E63946', marginTop: 4, fontSize: 12 },
});
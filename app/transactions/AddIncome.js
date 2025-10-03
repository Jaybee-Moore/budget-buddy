import React from 'react';
import { useForm } from 'react-hook-form';
import { StyleSheet } from 'react-native';
import TextInputField from '../../components/forms/TextInputField';
import Button from '../../components/forms/Button';
import { required } from '../../utils/validation';
import { ThemedText, ThemedView } from '../../components/Themed';

export default function AddIncomeScreen() {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log('Add Income:', data);
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Add Income</ThemedText>
      <TextInputField
        label="Amount"
        name="amount"
        control={control}
        rules={{ required: required('Amount') }}
        error={errors.amount?.message}
        keyboardType="numeric"
      />
      <TextInputField
        label="Source"
        name="source"
        control={control}
        rules={{ required: required('Source') }}
        error={errors.source?.message}
      />
      <TextInputField
        label="Description"
        name="description"
        control={control}
        rules={{ required: required('Description') }}
        error={errors.description?.message}
      />
      <TextInputField
        label="Date"
        name="date"
        control={control}
        rules={{ required: required('Date') }}
        error={errors.date?.message}
        placeholder="YYYY-MM-DD"
      />
      <Button title="Save Income" onPress={handleSubmit(onSubmit)} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 24, textAlign: 'center' },
});
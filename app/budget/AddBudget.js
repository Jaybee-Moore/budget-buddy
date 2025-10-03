import React from 'react';
import { useForm } from 'react-hook-form';
import { StyleSheet } from 'react-native';
import TextInputField from '../../components/forms/TextInputField';
import Button from '../../components/forms/Button';
import { required } from '../../utils/validation';
import { ThemedText, ThemedView } from '../../components/Themed';

export default function AddBudgetScreen() {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log('Add Budget:', data);
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Add Budget</ThemedText>
      <TextInputField
        label="Category"
        name="category"
        control={control}
        rules={{ required: required('Category') }}
        error={errors.category?.message}
      />
      <TextInputField
        label="Amount"
        name="amount"
        control={control}
        rules={{ required: required('Amount') }}
        error={errors.amount?.message}
        keyboardType="numeric"
      />
      <TextInputField
        label="Start Date"
        name="startDate"
        control={control}
        rules={{ required: required('Start Date') }}
        error={errors.startDate?.message}
        placeholder="YYYY-MM-DD"
      />
      <TextInputField
        label="End Date"
        name="endDate"
        control={control}
        rules={{ required: required('End Date') }}
        error={errors.endDate?.message}
        placeholder="YYYY-MM-DD"
      />
      <Button title="Save Budget" onPress={handleSubmit(onSubmit)} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 24, textAlign: 'center' },
});
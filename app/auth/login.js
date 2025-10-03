import React from 'react';
import { useForm } from 'react-hook-form';
import { View, StyleSheet } from 'react-native';
import TextInputField from '../../components/forms/TextInputField';
import Button from '../../components/forms/Button';
import { validateEmail, required } from '../../utils/validation';
import { ThemedText, ThemedView } from '../../components/Themed';

export default function LoginScreen() {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log('Login:', data);
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Login</ThemedText>
      <TextInputField
        label="Email"
        name="email"
        control={control}
        rules={{ required: required('Email'), validate: validateEmail }}
        error={errors.email?.message}
      />
      <TextInputField
        label="Password"
        name="password"
        control={control}
        rules={{ required: required('Password') }}
        error={errors.password?.message}
        secureTextEntry
      />
      <Button title="Login" onPress={handleSubmit(onSubmit)} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 24, textAlign: 'center' },
});
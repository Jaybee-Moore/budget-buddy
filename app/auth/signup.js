import React from 'react';
import { useForm } from 'react-hook-form';
import { StyleSheet } from 'react-native';
import TextInputField from '../../components/forms/TextInputField';
import Button from '../../components/forms/Button';
import { validateEmail, required } from '../../utils/validation';
import { ThemedText, ThemedView } from '../../components/Themed';

export default function SignupScreen() {
  const { control, handleSubmit, watch, formState: { errors } } = useForm();
  const password = watch('password');

  const onSubmit = data => {
    console.log('Signup:', data);
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Sign Up</ThemedText>
      <TextInputField
        label="Name"
        name="name"
        control={control}
        rules={{ required: required('Name') }}
        error={errors.name?.message}
      />
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
      <TextInputField
        label="Confirm Password"
        name="confirmPassword"
        control={control}
        rules={{
          required: required('Confirm Password'),
          validate: value => value === password || 'Passwords do not match',
        }}
        error={errors.confirmPassword?.message}
        secureTextEntry
      />
      <Button title="Sign Up" onPress={handleSubmit(onSubmit)} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 24, textAlign: 'center' },
});
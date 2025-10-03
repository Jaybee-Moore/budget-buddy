import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ACCENT_COLOR, PRIMARY_COLOR, SECONDARY_COLOR } from '../../constants/theme';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Welcome to Budget Buddy</Text>
      <Text style={styles.subtitle}>Track your expenses and stay in control 💰</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  logo: {
    width: 140,
    height: 140,
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: ACCENT_COLOR,
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: SECONDARY_COLOR,
    textAlign: 'center',
  },
});

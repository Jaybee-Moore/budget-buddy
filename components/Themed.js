import React from 'react';
import { Text, View, useColorScheme } from 'react-native';

export function ThemedText({ style, ...props }) {
  const scheme = useColorScheme();
  return (
    <Text
      style={[
        { color: scheme === 'dark' ? '#fff' : '#222' },
        style,
      ]}
      {...props}
    />
  );
}

export function ThemedView({ style, ...props }) {
  const scheme = useColorScheme();
  return (
    <View
      style={[
        { backgroundColor: scheme === 'dark' ? '#222' : '#fff' },
        style,
      ]}
      {...props}
    />
  );
}
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { colors, spacing } from './src/factory/factory';

import { Ionicons } from '@expo/vector-icons';
import { Button } from './src/factory/Button/Button';

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        title="Launch Factory"
        size='sm'
        leftIcon={<Ionicons name="rocket" size={20} color="white" />}
        onPress={() => console.log('Pressed')}
      />
      <Button
        title="Processing..."
        size='md'
        loading={true}
        leftIcon={<Ionicons name="rocket" size={20} color="white" />}
        onPress={() => console.log('Pressed')}
      />
      <Button
        title="Success State"
        variant="success"
        size='md'
        onPress={() => console.log('Success')}
      />
      <Button
        title="Error State"
        variant="error"
        size='md'
        onPress={() => console.log('Error')}
      />
      <Button
        title="Secondary State"
        variant="base"
        size='md'
        onPress={() => console.log('Slate')}
      />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing[4],
  },
  text: {
    color: colors.common.white,
    fontSize: 20,
    fontWeight: '600',
    letterSpacing: -0.5,
  },
});

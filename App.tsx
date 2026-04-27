import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { colors, spacing, Button, Header } from './src/factory';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const [activeTab, setActiveTab] = React.useState('Iphone');

  return (
    <View style={styles.container}>
      <Header
        title="Header title"
        onBackPress={() => console.log('Back pressed')}
        activeTab={activeTab}
        onTabPress={setActiveTab}
        tabs={['Iphone', 'Ipad', 'Macbook', 'Apple', 'Android', 'Samsung', 'Xiaomi', 'Realme', 'Vivo']}
        actions={[
          { icon: <Ionicons name="flash" size={22} color="white" />, onPress: () => {} },
          { icon: <Ionicons name="notifications" size={22} color="white" />, onPress: () => {} },
          { icon: <Ionicons name="settings" size={22} color="white" />, onPress: () => {} },
          { icon: <Ionicons name="book" size={22} color="white" />, onPress: () => {} },
        ]}
      />

      <View style={styles.content}>
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
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    gap: 16,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing[6],
  },
  text: {
    color: colors.common.white,
    fontSize: 20,
    fontWeight: '600',
    letterSpacing: -0.5,
  },
});

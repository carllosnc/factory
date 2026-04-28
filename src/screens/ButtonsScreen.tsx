import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header, Button, spacing, colors, uiColors } from '../factory';
import { Ionicons } from '@expo/vector-icons';

export const ButtonsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header
        title="Buttons"
        onBackPress={() => navigation.goBack()}
      />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sizes</Text>
          <View style={styles.row}>
            <Button title="Small" size="sm" onPress={() => {}} />
            <Button title="Medium" size="md" onPress={() => {}} />
            <Button title="Large" size="lg" onPress={() => {}} />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Variants</Text>
          <View style={styles.column}>
            <Button title="Primary" variant="primary" onPress={() => {}} />
            <Button title="Success" variant="success" onPress={() => {}} />
            <Button title="Error" variant="error" onPress={() => {}} />
            <Button title="Base" variant="base" onPress={() => {}} />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>States</Text>
          <View style={styles.column}>
            <Button title="Loading State" loading={true} onPress={() => {}} />
            <Button title="Disabled State" disabled={true} onPress={() => {}} />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Icons</Text>
          <View style={styles.column}>
            <Button
              title="Launch Rocket"
              leftIcon={<Ionicons name="rocket" size={20} color="white" />}
              onPress={() => {}}
            />
            <Button
              title="Notifications"
              variant="success"
              leftIcon={<Ionicons name="notifications" size={20} color="white" />}
              onPress={() => {}}
            />
          </View>
        </View>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: uiColors.theme.background,
  },
  content: {
    padding: spacing.s6,
    gap: spacing.s8,
  },
  section: {
    gap: spacing.s4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: uiColors.theme.foreground,
    marginBottom: spacing.s2,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.s4,
    alignItems: 'center',
  },
  column: {
    gap: spacing.s4,
  },
});

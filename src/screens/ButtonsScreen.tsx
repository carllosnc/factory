import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header, Button, spacing, Text, useTheme, Page } from '../factory';
import { Feather } from '@expo/vector-icons';

export const ButtonsScreen = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();

  return (
    <Page
      scrollable
      contentContainerStyle={styles.content}
      header={
        <Header
          title="Buttons"
          onBackPress={() => navigation.goBack()}
        />
      }
    >
      <View style={styles.section}>
        <Text size="lg" weight="bold" style={{ color: colors.foreground }}>Sizes</Text>
        <View style={styles.row}>
          <Button title="Small" size="sm" onPress={() => {}} />
          <Button title="Medium" size="md" onPress={() => {}} />
          <Button title="Large" size="lg" onPress={() => {}} />
        </View>
      </View>

      <View style={styles.section}>
        <Text size="lg" weight="bold" style={{ color: colors.foreground }}>Variants</Text>
        <View style={styles.column}>
          <Button title="Primary" variant="primary" onPress={() => {}} />
          <Button title="Success" variant="success" onPress={() => {}} />
          <Button title="Error" variant="error" onPress={() => {}} />
          <Button title="Base" variant="base" onPress={() => {}} />
        </View>
      </View>

      <View style={styles.section}>
        <Text size="lg" weight="bold" style={{ color: colors.foreground }}>States</Text>
        <View style={styles.column}>
          <Button title="Loading State" loading={true} onPress={() => {}} />
          <Button title="Disabled State" disabled={true} onPress={() => {}} />
        </View>
      </View>

      <View style={styles.section}>
        <Text size="lg" weight="bold" style={{ color: colors.foreground }}>Icons</Text>
        <View style={styles.column}>
          <Button
            title="Launch Rocket"
            leftIcon={<Feather name="send" size={20} color="white" />}
            onPress={() => {}}
          />
          <Button
            title="Notifications"
            variant="success"
            leftIcon={<Feather name="bell" size={20} color="white" />}
            onPress={() => {}}
          />
        </View>
      </View>
    </Page>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: spacing.s9,
    gap: spacing.s10,
  },
  section: {
    gap: spacing.s7,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.s7,
    alignItems: 'center',
  },
  column: {
    gap: spacing.s7,
  },
});

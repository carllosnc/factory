import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Header, Text, spacing, uiColors, Divider, colors } from '../factory';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export const TextScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header
        title="Typography"
        onBackPress={() => navigation.goBack()}
      />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sizes</Text>
          <View style={styles.sectionContent}>
            <Text size="xl3" weight="bold">xl3 Bold</Text>
            <Text size="xl2" weight="semibold">xl2 Semibold</Text>
            <Text size="xl" weight="medium">xl Medium</Text>
            <Text size="lg">lg Regular</Text>
            <Text size="base">base Regular</Text>
            <Text size="sm">sm Regular</Text>
            <Text size="xs">xs Regular</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Weights</Text>
          <View style={styles.sectionContent}>
            <Text weight="black">Black 900</Text>
            <Text weight="bold">Bold 700</Text>
            <Text weight="semibold">Semibold 600</Text>
            <Text weight="medium">Medium 500</Text>
            <Text weight="normal">Normal 400</Text>
            <Text weight="light">Light 300</Text>
            <Text weight="thin">Thin 100</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Colors</Text>
          <View style={styles.sectionContent}>
            <Text color="foreground">Foreground (Primary Text)</Text>
            <Text color="muted">Muted (Secondary Text)</Text>
            <Text color="primary">Primary Color</Text>
            <Text color="success">Success Color</Text>
            <Text color="error">Error Color</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Truncation</Text>
          <View style={styles.sectionContent}>
            <View style={styles.row}>
              <Text weight="bold" size="sm">Truncate (1 line):</Text>
              <Text color="muted" truncate>
                This is a very long piece of text that will definitely exceed the width of a single line on most devices.
              </Text>
            </View>
            <View style={styles.row}>
              <Text weight="bold" size="sm">Truncate (2 lines):</Text>
              <Text color="muted" truncate={2}>
                This is another long piece of text, but this time we are allowing it to wrap to a second line before we apply the ellipsis at the end of the second line.
              </Text>
            </View>
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
    padding: spacing.s7,
  },
  section: {
    marginBottom: spacing.s9,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: uiColors.theme.foreground,
    marginBottom: spacing.s5,
  },
  sectionContent: {
    gap: spacing.s5,
  },
  row: {
    gap: spacing.s2,
  },
});

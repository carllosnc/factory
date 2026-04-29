import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Header, Text, spacing, Divider, Page, useTheme } from '../factory';
import { useNavigation } from '@react-navigation/native';

export const TextScreen = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();

  return (
    <Page
      scrollable
      contentContainerStyle={styles.content}
      header={
        <Header
          title="Typography"
          onBackPress={() => navigation.goBack()}
        />
      }
    >
      <View style={styles.section}>
        <Text size="lg" weight="bold" style={{ color: colors.foreground }}>Font Sizes</Text>
        <View style={styles.list}>
          <Text size="xs">Extra Small (xs)</Text>
          <Text size="sm">Small (sm)</Text>
          <Text size="base">Base (default)</Text>
          <Text size="lg">Large (lg)</Text>
          <Text size="xl">Extra Large (xl)</Text>
          <Text size="xl2">2X Large (xl2)</Text>
          <Text size="xl3">3X Large (xl3)</Text>
        </View>
      </View>

      <Divider size="s8" />

      <View style={styles.section}>
        <Text size="lg" weight="bold" style={{ color: colors.foreground }}>Font Weights</Text>
        <View style={styles.list}>
          <Text weight="thin">Thin (100)</Text>
          <Text weight="light">Light (300)</Text>
          <Text weight="normal">Normal (400)</Text>
          <Text weight="medium">Medium (500)</Text>
          <Text weight="semibold">Semibold (600)</Text>
          <Text weight="bold">Bold (700)</Text>
          <Text weight="black">Black (900)</Text>
        </View>
      </View>

      <Divider size="s8" />

      <View style={styles.section}>
        <Text size="lg" weight="bold" style={{ color: colors.foreground }}>Colors</Text>
        <View style={styles.list}>
          <Text color="foreground">Foreground Color</Text>
          <Text color="muted">Muted Color</Text>
          <Text color="primary">Primary Color</Text>
          <Text color="success">Success Color</Text>
          <Text color="error">Error Color</Text>
        </View>
      </View>

      <Divider size="s8" />

      <View style={styles.section}>
        <Text size="lg" weight="bold" style={{ color: colors.foreground }}>Truncation</Text>
        <View style={styles.list}>
          <Text truncate style={{ width: 200 }}>
            This is a long text that should be truncated with an ellipsis after one line.
          </Text>
          <Text truncate={2} style={{ width: 250 }}>
            This text should be truncated after two lines of content to show how multi-line truncation works in our system.
          </Text>
        </View>
      </View>
    </Page>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: spacing.s7,
  },
  section: {
    gap: spacing.s5,
  },
  list: {
    gap: spacing.s3,
  }
});

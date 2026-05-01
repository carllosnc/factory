import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Header, Text, spacing, Divider, Page, useTheme, typography } from '../factory';
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
        <Text variant="h3">Semantic Variants</Text>
        <View style={styles.list}>
          <Text variant="h1">Heading 1 (h1)</Text>
          <Text variant="h2">Heading 2 (h2)</Text>
          <Text variant="h3">Heading 3 (h3)</Text>
          <Text variant="body">Body text (body)</Text>
          <Text variant="caption">Caption text (caption)</Text>
          <Text variant="label">Label text (label)</Text>
        </View>
      </View>

      <Divider size="s8" />

      <View style={styles.section}>
        <Text variant="h3">Font Weights</Text>
        <View style={styles.list}>
          <Text weight="thin">Thin (100)</Text>
          <Text weight="light">Light (300)</Text>
          <Text weight="regular">Regular (400)</Text>
          <Text weight="medium">Medium (500)</Text>
          <Text weight="semibold">Semibold (600)</Text>
          <Text weight="bold">Bold (700)</Text>
          <Text weight="black">Black (900)</Text>
        </View>
      </View>

      <Divider size="s8" />

      <View style={styles.section}>
        <Text variant="h3">Colors & States</Text>
        <View style={styles.list}>
          <Text>Default (Foreground)</Text>
          <Text muted>Muted Text</Text>
          <Text color={colors.primary}>Primary Color</Text>
          <Text color={colors.success}>Success Color</Text>
          <Text color={colors.error}>Error Color</Text>
        </View>
      </View>

      <Divider size="s8" />

      <View style={styles.section}>
        <Text variant="h3">Truncation</Text>
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

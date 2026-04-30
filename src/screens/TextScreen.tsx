import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Header, Text, spacing, Divider, Page, useTheme, typography } from '../factory';
import { useNavigation } from '@react-navigation/native';

export const TextScreen = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();

  const titleStyle = {
    fontSize: typography.lg,
    fontWeight: '700' as const,
    color: colors.foreground,
  };

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
        <Text style={titleStyle}>Font Sizes</Text>
        <View style={styles.list}>
          <Text style={{ fontSize: typography.xs, color: colors.foreground }}>Extra Small (xs)</Text>
          <Text style={{ fontSize: typography.sm, color: colors.foreground }}>Small (sm)</Text>
          <Text style={{ fontSize: typography.base, color: colors.foreground }}>Base (default)</Text>
          <Text style={{ fontSize: typography.lg, color: colors.foreground }}>Large (lg)</Text>
          <Text style={{ fontSize: typography.xl, color: colors.foreground }}>Extra Large (xl)</Text>
          <Text style={{ fontSize: typography.xl2, color: colors.foreground }}>2X Large (xl2)</Text>
          <Text style={{ fontSize: typography.xl3, color: colors.foreground }}>3X Large (xl3)</Text>
        </View>
      </View>

      <Divider size="s8" />

      <View style={styles.section}>
        <Text style={titleStyle}>Font Weights</Text>
        <View style={styles.list}>
          <Text style={{ fontWeight: '100', color: colors.foreground }}>Thin (100)</Text>
          <Text style={{ fontWeight: '300', color: colors.foreground }}>Light (300)</Text>
          <Text style={{ fontWeight: '400', color: colors.foreground }}>Normal (400)</Text>
          <Text style={{ fontWeight: '500', color: colors.foreground }}>Medium (500)</Text>
          <Text style={{ fontWeight: '600', color: colors.foreground }}>Semibold (600)</Text>
          <Text style={{ fontWeight: '700', color: colors.foreground }}>Bold (700)</Text>
          <Text style={{ fontWeight: '900', color: colors.foreground }}>Black (900)</Text>
        </View>
      </View>

      <Divider size="s8" />

      <View style={styles.section}>
        <Text style={titleStyle}>Colors</Text>
        <View style={styles.list}>
          <Text style={{ color: colors.foreground }}>Foreground Color</Text>
          <Text style={{ color: colors.muted }}>Muted Color</Text>
          <Text style={{ color: colors.primary }}>Primary Color</Text>
          <Text style={{ color: colors.success }}>Success Color</Text>
          <Text style={{ color: colors.error }}>Error Color</Text>
        </View>
      </View>

      <Divider size="s8" />

      <View style={styles.section}>
        <Text style={titleStyle}>Truncation</Text>
        <View style={styles.list}>
          <Text truncate style={{ width: 200, color: colors.foreground }}>
            This is a long text that should be truncated with an ellipsis after one line.
          </Text>
          <Text truncate={2} style={{ width: 250, color: colors.foreground }}>
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

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Header, Text, spacing, Divider, colors as baseColors, useTheme, Page } from '../factory';
import { useNavigation } from '@react-navigation/native';

export const DividerScreen = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();

  return (
    <Page
      scrollable
      contentContainerStyle={styles.content}
      header={
        <Header
          title="Dividers"
          onBackPress={() => navigation.goBack()}
        />
      }
    >
      <View style={styles.section}>
        <Text size="lg" weight="bold" style={{ color: colors.foreground, marginBottom: spacing.s5 }}>Horizontal Dividers</Text>
        <View style={styles.sectionContent}>
          <Text size="sm" color="muted">Default Divider</Text>
          <Divider />
          
          <Text size="sm" color="muted">With s4 Spacing</Text>
          <Divider size="s4" />
          
          <Text size="sm" color="muted">Thick (4px) with s8 Spacing</Text>
          <Divider size="s8" thickness={4} />

          <Text size="sm" color="muted">Custom Primary Color</Text>
          <Divider size="s4" color={baseColors.primary.t500} thickness={2} />

          <Text size="sm" color="muted">With Text</Text>
          <Divider text="OR" size="s4" />

          <Text size="sm" color="muted">With Text and Custom Color</Text>
          <Divider text="CONTINUE" size="s4" color={baseColors.primary.t500} thickness={1} />
        </View>
      </View>

      <View style={styles.section}>
        <Text size="lg" weight="bold" style={{ color: colors.foreground, marginBottom: spacing.s5 }}>Vertical Dividers</Text>
        <View style={styles.sectionContent}>
          <View style={[styles.row, { backgroundColor: colors.surface, borderColor: colors.border }]}>
            <View style={[styles.box, { backgroundColor: colors.background }]} />
            <Divider orientation="vertical" />
            <View style={[styles.box, { backgroundColor: colors.background }]} />
            <Divider orientation="vertical" thickness={2} color={baseColors.success.t500} />
            <View style={[styles.box, { backgroundColor: colors.background }]} />
            <Divider orientation="vertical" thickness={4} color={baseColors.error.t500} />
            <View style={[styles.box, { backgroundColor: colors.background }]} />
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text size="lg" weight="bold" style={{ color: colors.foreground, marginBottom: spacing.s5 }}>Use Cases</Text>
        <View style={styles.sectionContent}>
          <View style={[styles.card, { backgroundColor: colors.surface, borderColor: colors.border }]}>
            <Text weight="bold">Item One</Text>
            <Divider size="s2" />
            <Text weight="bold">Item Two</Text>
            <Divider size="s2" />
            <Text weight="bold">Item Three</Text>
          </View>
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
    marginBottom: spacing.s9,
  },
  sectionContent: {
    gap: spacing.s4,
  },
  row: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    gap: spacing.s4,
    padding: spacing.s4,
    borderRadius: 12,
    borderWidth: 1,
  },
  box: {
    width: 40,
    height: 40,
    borderRadius: 8,
  },
  card: {
    padding: spacing.s5,
    borderRadius: 12,
    borderWidth: 1,
    gap: spacing.s2,
  }
});

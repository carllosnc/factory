import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Header, Text, spacing, uiColors, Divider, colors } from '../factory';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export const DividerScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header
        title="Dividers"
        onBackPress={() => navigation.goBack()}
      />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Horizontal Dividers</Text>
          <View style={styles.sectionContent}>
            <Text size="sm" color="muted">Default Divider</Text>
            <Divider />
            
            <Text size="sm" color="muted">With s4 Spacing</Text>
            <Divider size="s4" />
            
            <Text size="sm" color="muted">Thick (4px) with s8 Spacing</Text>
            <Divider size="s8" thickness={4} />

            <Text size="sm" color="muted">Custom Primary Color</Text>
            <Divider size="s4" color={colors.primary.t500} thickness={2} />

            <Text size="sm" color="muted">With Text</Text>
            <Divider text="OR" size="s4" />

            <Text size="sm" color="muted">With Text and Custom Color</Text>
            <Divider text="CONTINUE" size="s4" color={colors.primary.t500} thickness={1} />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Vertical Dividers</Text>
          <View style={styles.sectionContent}>
            <View style={styles.row}>
              <View style={styles.box} />
              <Divider orientation="vertical" />
              <View style={styles.box} />
              <Divider orientation="vertical" thickness={2} color={colors.success.t500} />
              <View style={styles.box} />
              <Divider orientation="vertical" thickness={4} color={colors.error.t500} />
              <View style={styles.box} />
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Use Cases</Text>
          <View style={styles.sectionContent}>
            <View style={styles.card}>
              <Text weight="bold">Item One</Text>
              <Divider size="s2" />
              <Text weight="bold">Item Two</Text>
              <Divider size="s2" />
              <Text weight="bold">Item Three</Text>
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
    gap: spacing.s4,
  },
  row: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    gap: spacing.s4,
    backgroundColor: uiColors.theme.surface,
    padding: spacing.s4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: uiColors.theme.border,
  },
  box: {
    width: 40,
    height: 40,
    backgroundColor: uiColors.theme.background,
    borderRadius: 8,
  },
  card: {
    backgroundColor: uiColors.theme.surface,
    padding: spacing.s5,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: uiColors.theme.border,
    gap: spacing.s2,
  }
});

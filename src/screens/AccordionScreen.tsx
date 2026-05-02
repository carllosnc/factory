import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Header,
  Page,
  Text,
  spacing,
  useTheme,
  Accordion,
  AccordionGroup,
  typography
} from '../factory';
import { Feather } from '@expo/vector-icons';

export const AccordionScreen = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();

  return (
    <Page
      scrollable
      header={
        <Header
          title="Accordions"
          onBackPress={() => navigation.goBack()}
        />
      }
    >
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>Basic Accordions</Text>
        <AccordionGroup style={styles.group}>
          <Accordion 
            title="Account Settings" 
            subtitle="Manage your profile and security"
            divider
            leftIcon={<Feather name="user" size={20} color={colors.foreground} />}
            iconWrapper
          >
            <View style={styles.content}>
              <Text variant="body" style={{ color: colors.muted }}>
                This is where your account settings would go. You can add any components inside the accordion, including forms, buttons, or more nested lists. Our design system ensures that everything stays consistent and accessible across different screen sizes and themes.
              </Text>
              <Text variant="body" style={{ color: colors.muted, marginTop: spacing.s4 }}>
                You can manage your email preferences, update your password, and configure two-factor authentication to keep your account safe and secure.
              </Text>
            </View>
          </Accordion>
          <Accordion
            title="Notifications"
            subtitle="Configure how you receive updates"
            leftIcon={<Feather name="bell" size={20} color={colors.foreground} />}
            iconWrapper
          >
            <View style={styles.content}>
              <Text variant="body" style={{ color: colors.muted }}>
                Stay updated with the latest activity and news. You can choose to receive push notifications for important events, or daily summaries to keep your inbox clean.
              </Text>
              <Text variant="body" style={{ color: colors.muted, marginTop: spacing.s4 }}>
                Custom alerts can be set for specific activities, ensuring you never miss a beat when it comes to your projects and collaborations.
              </Text>
            </View>
          </Accordion>
        </AccordionGroup>

        <Text style={styles.sectionTitle}>Initially Expanded</Text>
        <Accordion 
          title="Privacy Policy" 
          initiallyExpanded
          style={styles.singleAccordion}
          leftIcon={<Feather name="shield" size={20} color={colors.foreground} />}
          iconWrapper
        >
          <View style={styles.content}>
            <Text variant="body" style={{ color: colors.muted }}>
              Our privacy policy is very simple: we don't track you. This accordion was expanded by default using the `initiallyExpanded` prop, which is useful for highlighting important information or terms that the user needs to see immediately upon landing on the page.
            </Text>
            <Text variant="body" style={{ color: colors.muted, marginTop: spacing.s4 }}>
              We believe that your data belongs to you, and we take every precaution to ensure it remains private and protected. No third-party tracking, no selling of information, just a clean and safe user experience.
            </Text>
          </View>
        </Accordion>

        <Text style={styles.sectionTitle}>Custom Content</Text>
        <AccordionGroup style={styles.group}>
          <Accordion 
            title="Advanced Options" 
            subtitle="For power users only"
            leftIcon={<Feather name="zap" size={20} color={colors.foreground} />}
            iconWrapper
          >
            <View style={styles.customContent}>
              <View style={[styles.box, { backgroundColor: colors.primary + '20' }]}>
                <Text style={{ color: colors.primary, fontWeight: '600' }}>Performance Mode</Text>
              </View>
              <View style={[styles.box, { backgroundColor: colors.success + '20' }]}>
                <Text style={{ color: colors.success, fontWeight: '600' }}>Debug Logging</Text>
              </View>
            </View>
          </Accordion>
        </AccordionGroup>

        <Text style={styles.sectionTitle}>Disabled State</Text>
        <Accordion 
          title="Beta Features" 
          disabled
          subtitle="Coming soon to your region"
          leftIcon={<Feather name="lock" size={20} color={colors.muted} />}
          iconWrapper
          style={styles.singleAccordion}
        >
          <View style={styles.content}>
            <Text>This will never be seen because it is disabled.</Text>
          </View>
        </Accordion>
      </View>
    </Page>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.s7,
  },
  sectionTitle: {
    fontSize: typography.base,
    fontWeight: '700',
    marginBottom: spacing.s5,
    marginTop: spacing.s8,
  },
  group: {
    marginBottom: spacing.s7,
  },
  singleAccordion: {
    borderRadius: 16,
    overflow: 'hidden',
  },
  content: {
    paddingTop: spacing.s4,
  },
  customContent: {
    paddingTop: spacing.s4,
    gap: spacing.s4,
  },
  box: {
    padding: spacing.s5,
    borderRadius: 12,
    alignItems: 'center',
  },
});

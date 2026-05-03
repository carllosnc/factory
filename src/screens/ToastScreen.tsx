import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Toast, Header, Page, spacing, Text, Button, ToastVariant, useToast, typography } from '../factory';
import { Feather } from '@expo/vector-icons';

export const ToastScreen = () => {
  const navigation = useNavigation();
  const { showToast } = useToast();

  const handleTriggerToast = (variant: ToastVariant) => {
    showToast({
      title: variant.charAt(0).toUpperCase() + variant.slice(1) + ' Toast',
      description: `This is a ${variant} message that will stack.`,
      variant: variant,
    });
  };

  return (
    <Page
      header={
        <Header
          title="Toasts"
          onBackPress={() => navigation.goBack()}
        />
      }
    >
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.content}>
          <Text style={styles.sectionTitle}>Interactive Playground</Text>
          <Text style={styles.label}>Tap buttons to stack toasts</Text>
          
          <View style={styles.buttonGrid}>
            <Button 
              title="Custom Icon" 
              onPress={() => showToast({
                title: 'Custom Icon',
                description: 'This toast uses a custom planet icon!',
                variant: 'normal',
                icon: 'planet'
              })} 
              variant="base"
              style={styles.gridButton}
            />
            <Button 
              title="Trigger Normal" 
              onPress={() => handleTriggerToast('normal')} 
              variant="base"
              style={styles.gridButton}
            />
            <Button 
              title="Trigger Info" 
              onPress={() => handleTriggerToast('info')} 
              variant="base"
              style={styles.gridButton}
            />
            <Button 
              title="Trigger Success" 
              onPress={() => handleTriggerToast('success')} 
              variant="success"
              style={styles.gridButton}
            />
            <Button 
              title="Trigger Error" 
              onPress={() => handleTriggerToast('error')} 
              variant="error"
              style={styles.gridButton}
            />
          </View>
        </ScrollView>
      </View>
    </Page>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: spacing.s7,
    paddingBottom: 200, // More space for the stack
  },
  sectionTitle: {
    fontSize: typography.xl,
    fontWeight: '700',
    marginTop: spacing.s10,
    marginBottom: spacing.s6,
  },
  section: {
    marginBottom: spacing.s8,
  },
  label: {
    fontSize: typography.sm,
    fontWeight: '600',
    marginBottom: spacing.s4,
    opacity: 0.6,
  },
  buttonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.s4,
    marginBottom: spacing.s4,
  },
  gridButton: {
    flex: 1,
    minWidth: '45%',
  },
});

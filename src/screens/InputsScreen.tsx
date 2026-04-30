import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header, Input, spacing, useTheme, Text, Page, typography } from '../factory';
import { Feather } from '@expo/vector-icons';

export const InputsScreen = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Page
      scrollable
      contentContainerStyle={styles.content}
      header={
        <Header
          title="Input Fields"
          onBackPress={() => navigation.goBack()}
        />
      }
    >
      <View style={styles.section}>
        <Text style={{ fontSize: typography.lg, fontWeight: '700', color: colors.foreground, marginBottom: spacing.s5 }}>Standard Inputs</Text>
        <Input 
          label="Full Name"
          placeholder="Enter your name"
          value={email}
          onChangeText={setEmail}
        />
        <Input 
          label="Email Address"
          placeholder="mail@example.com"
          icon={<Feather name="mail" size={20} color={colors.muted} />}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.section}>
        <Text style={{ fontSize: typography.lg, fontWeight: '700', color: colors.foreground, marginBottom: spacing.s5 }}>State Variants</Text>
        <Input 
          label="Password"
          placeholder="••••••••"
          icon={<Feather name="lock" size={20} color={colors.muted} />}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Input 
          label="Error State"
          placeholder="Invalid input"
          icon={<Feather name="alert-circle" size={20} color={colors.error} />}
          error="This field is required and must be valid"
          defaultValue="wrong value"
        />
        <Input 
          label="Disabled Input"
          placeholder="You cannot edit this"
          icon={<Feather name="slash" size={20} color={colors.muted} />}
          editable={false}
          value="Read only content"
        />
      </View>

      <View style={styles.section}>
        <Text style={{ fontSize: typography.lg, fontWeight: '700', color: colors.foreground, marginBottom: spacing.s5 }}>Numeric & Specialized</Text>
        <Input 
          label="Phone Number"
          placeholder="+1 (555) 000-0000"
          icon={<Feather name="phone" size={20} color={colors.muted} />}
          keyboardType="phone-pad"
        />
        <Input 
          label="Search"
          placeholder="Search products..."
          icon={<Feather name="search" size={20} color={colors.muted} />}
          returnKeyType="search"
        />
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
});

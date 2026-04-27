import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Header, Button, spacing, colors } from '../factory';
import { Ionicons } from '@expo/vector-icons';

type RootStackParamList = {
  Home: undefined;
  Buttons: undefined;
  Tabs: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <Header 
        title="Factory Design System" 
        actions={[
          { icon: <Ionicons name="settings-outline" size={22} color="white" />, onPress: () => {} }
        ]}
      />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.welcome}>Welcome to Factory</Text>
        <Text style={styles.description}>
          A premium design system built with React Native Skia and Reanimated.
        </Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Components</Text>
          <View style={{ gap: spacing[4] }}>
            <Button
              title="Buttons Gallery"
              variant="primary"
              leftIcon={<Ionicons name="apps" size={20} color="white" />}
              onPress={() => navigation.navigate('Buttons')}
            />
            <Button
              title="Header with Tabs"
              variant="base"
              leftIcon={<Ionicons name="list" size={20} color="white" />}
              onPress={() => navigation.navigate('Tabs')}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.theme.background,
  },
  content: {
    padding: spacing[6],
  },
  welcome: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.theme.foreground,
    marginBottom: spacing[2],
  },
  description: {
    fontSize: 16,
    color: colors.theme.muted,
    lineHeight: 24,
    marginBottom: spacing[8],
  },
  section: {
    marginTop: spacing[4],
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.theme.foreground,
    marginBottom: spacing[4],
  },
});

import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Header, ListTile, ListTileGroup, spacing, colors, uiColors } from '../factory';
import { Ionicons } from '@expo/vector-icons';

type RootStackParamList = {
  Home: undefined;
  Buttons: undefined;
  Tabs: undefined;
  ListTiles: undefined;
  IconButtons: undefined;
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
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Components</Text>
          <ListTileGroup>
            <ListTile
              title="Buttons Gallery"
              subtitle="View all interactive button variants"
              leftIcon={<Ionicons name="apps" size={20} color={uiColors.theme.foreground} />}
              rightIcon={<Ionicons name="chevron-forward" size={20} color={uiColors.theme.muted} />}
              iconWrapper
              onPress={() => navigation.navigate('Buttons')}
              divider
            />
            <ListTile
              title="Header with Tabs"
              subtitle="Smooth tab navigation in headers"
              leftIcon={<Ionicons name="list" size={20} color={uiColors.theme.foreground} />}
              rightIcon={<Ionicons name="chevron-forward" size={20} color={uiColors.theme.muted} />}
              iconWrapper
              onPress={() => navigation.navigate('Tabs')}
              divider
            />
            <ListTile
              title="ListTile Components"
              subtitle="Showcase of interactive list items"
              leftIcon={<Ionicons name="albums-outline" size={20} color={uiColors.theme.foreground} />}
              rightIcon={<Ionicons name="chevron-forward" size={20} color={uiColors.theme.muted} />}
              iconWrapper
              onPress={() => navigation.navigate('ListTiles')}
              divider
            />
            <ListTile
              title="Icon Buttons"
              subtitle="Buttons with badges and labels"
              leftIcon={<Ionicons name="notifications-circle-outline" size={20} color={uiColors.theme.foreground} />}
              rightIcon={<Ionicons name="chevron-forward" size={20} color={uiColors.theme.muted} />}
              iconWrapper
              onPress={() => navigation.navigate('IconButtons')}
            />
          </ListTileGroup>
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
    padding: spacing.s4,
  },
  welcome: {
    fontSize: 28,
    fontWeight: '700',
    color: uiColors.theme.foreground,
    marginBottom: spacing.s2,
  },
  description: {
    fontSize: 16,
    color: uiColors.theme.muted,
    lineHeight: 24,
    marginBottom: spacing.s8,
  },
  section: {
    marginTop: spacing.s4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: uiColors.theme.foreground,
    marginBottom: spacing.s4,
  },
});

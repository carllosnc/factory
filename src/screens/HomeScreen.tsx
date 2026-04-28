import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Header, ListTile, ListTileGroup, spacing, colors, uiColors } from '../factory';
import { Feather } from '@expo/vector-icons';

type RootStackParamList = {
  Home: undefined;
  Buttons: undefined;
  Tabs: undefined;
  ListTiles: undefined;
  IconButtons: undefined;
  Typography: undefined;
  Dividers: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <Header
        title="Factory Design System"
        actions={[
          { icon: <Feather name="settings" size={20} color="white" />, onPress: () => {} }
        ]}
      />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Components</Text>
          <ListTileGroup>
            <ListTile
              title="Buttons Gallery"
              subtitle="View all interactive button variants"
              leftIcon={<Feather name="grid" size={18} color={uiColors.theme.foreground} />}
              rightIcon={<Feather name="chevron-right" size={18} color={uiColors.theme.muted} />}
              iconWrapper
              onPress={() => navigation.navigate('Buttons')}
              divider
            />
            <ListTile
              title="Header with Tabs"
              subtitle="Smooth tab navigation in headers"
              leftIcon={<Feather name="list" size={18} color={uiColors.theme.foreground} />}
              rightIcon={<Feather name="chevron-right" size={18} color={uiColors.theme.muted} />}
              iconWrapper
              onPress={() => navigation.navigate('Tabs')}
              divider
            />
            <ListTile
              title="ListTile Components"
              subtitle="Showcase of interactive list items"
              leftIcon={<Feather name="layers" size={18} color={uiColors.theme.foreground} />}
              rightIcon={<Feather name="chevron-right" size={18} color={uiColors.theme.muted} />}
              iconWrapper
              onPress={() => navigation.navigate('ListTiles')}
              divider
            />
            <ListTile
              title="Icon Buttons"
              subtitle="Buttons with badges and labels"
              leftIcon={<Feather name="bell" size={18} color={uiColors.theme.foreground} />}
              rightIcon={<Feather name="chevron-right" size={18} color={uiColors.theme.muted} />}
              iconWrapper
              onPress={() => navigation.navigate('IconButtons')}
              divider
            />
            <ListTile
              title="Typography & Text"
              subtitle="Text variants and truncation"
              leftIcon={<Feather name="type" size={18} color={uiColors.theme.foreground} />}
              rightIcon={<Feather name="chevron-right" size={18} color={uiColors.theme.muted} />}
              iconWrapper
              onPress={() => navigation.navigate('Typography')}
              divider
            />
            <ListTile
              title="Dividers"
              subtitle="Horizontal and vertical separators"
              leftIcon={<Feather name="minus" size={18} color={uiColors.theme.foreground} />}
              rightIcon={<Feather name="chevron-right" size={18} color={uiColors.theme.muted} />}
              iconWrapper
              onPress={() => navigation.navigate('Dividers')}
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
    padding: spacing.s7,
  },
  welcome: {
    fontSize: 28,
    fontWeight: '700',
    color: uiColors.theme.foreground,
    marginBottom: spacing.s5,
  },
  description: {
    fontSize: 16,
    color: uiColors.theme.muted,
    lineHeight: 24,
    marginBottom: spacing.s10,
  },
  section: {
    marginTop: spacing.s7,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: uiColors.theme.foreground,
    marginBottom: spacing.s7,
  },
});

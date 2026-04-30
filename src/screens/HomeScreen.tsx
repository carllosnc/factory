import React from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Header, ListTile, ListTileGroup, spacing, useTheme, Text, Page, typography } from '../factory';
import { Feather } from '@expo/vector-icons';

type RootStackParamList = {
  Home: undefined;
  Buttons: undefined;
  Tabs: undefined;
  ListTiles: undefined;
  IconButtons: undefined;
  Typography: undefined;
  Dividers: undefined;
  Selection: undefined;
  Inputs: undefined;
  Sliders: undefined;
  BottomBar: undefined;
  Spinners: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const { colors } = useTheme();

  return (
    <Page
      scrollable
      contentContainerStyle={styles.content}
      header={
        <Header
          title="Factory Design System"
          actions={[
            { icon: <Feather name="settings" size={20} color="white" />, onPress: () => {} }
          ]}
        />
      }
    >
      <Text style={{ fontSize: typography.lg, fontWeight: '700', marginBottom: spacing.s7, color: colors.foreground }}>Components</Text>
      <ListTileGroup>
        <ListTile
          title="Buttons Gallery"
          subtitle="View all interactive button variants"
          leftIcon={<Feather name="grid" size={18} color={colors.foreground} />}
          rightIcon={<Feather name="chevron-right" size={18} color={colors.muted} />}
          iconWrapper
          onPress={() => navigation.navigate('Buttons')}
          divider
        />
        <ListTile
          title="Input Fields"
          subtitle="Text inputs with labels and errors"
          leftIcon={<Feather name="edit-3" size={18} color={colors.foreground} />}
          rightIcon={<Feather name="chevron-right" size={18} color={colors.muted} />}
          iconWrapper
          onPress={() => navigation.navigate('Inputs')}
          divider
        />
        <ListTile
          title="Selection Controls"
          subtitle="Checkboxes, Radios, and Switches"
          leftIcon={<Feather name="check-square" size={18} color={colors.foreground} />}
          rightIcon={<Feather name="chevron-right" size={18} color={colors.muted} />}
          iconWrapper
          onPress={() => navigation.navigate('Selection')}
          divider
        />
        <ListTile
          title="Sliders"
          subtitle="Premium Skia sliders with haptics"
          leftIcon={<Feather name="sliders" size={18} color={colors.foreground} />}
          rightIcon={<Feather name="chevron-right" size={18} color={colors.muted} />}
          iconWrapper
          onPress={() => navigation.navigate('Sliders')}
          divider
        />
        <ListTile
          title="Bottom Navigation"
          subtitle="Animated bottom bar with sliding labels"
          leftIcon={<Feather name="airplay" size={18} color={colors.foreground} />}
          rightIcon={<Feather name="chevron-right" size={18} color={colors.muted} />}
          iconWrapper
          onPress={() => navigation.navigate('BottomBar')}
          divider
        />
        <ListTile
          title="Tabs & Segmented Control"
          subtitle="Navigation and selection components"
          leftIcon={<Feather name="list" size={18} color={colors.foreground} />}
          rightIcon={<Feather name="chevron-right" size={18} color={colors.muted} />}
          iconWrapper
          onPress={() => navigation.navigate('Tabs')}
          divider
        />
        <ListTile
          title="ListTile Components"
          subtitle="Showcase of interactive list items"
          leftIcon={<Feather name="layers" size={18} color={colors.foreground} />}
          rightIcon={<Feather name="chevron-right" size={18} color={colors.muted} />}
          iconWrapper
          onPress={() => navigation.navigate('ListTiles')}
          divider
        />
        <ListTile
          title="Icon Buttons"
          subtitle="Buttons with badges and labels"
          leftIcon={<Feather name="bell" size={18} color={colors.foreground} />}
          rightIcon={<Feather name="chevron-right" size={18} color={colors.muted} />}
          iconWrapper
          onPress={() => navigation.navigate('IconButtons')}
          divider
        />
        <ListTile
          title="Typography & Text"
          subtitle="Text variants and truncation"
          leftIcon={<Feather name="type" size={18} color={colors.foreground} />}
          rightIcon={<Feather name="chevron-right" size={18} color={colors.muted} />}
          iconWrapper
          onPress={() => navigation.navigate('Typography')}
          divider
        />
        <ListTile
          title="Dividers"
          subtitle="Horizontal and vertical separators"
          leftIcon={<Feather name="minus" size={18} color={colors.foreground} />}
          rightIcon={<Feather name="chevron-right" size={18} color={colors.muted} />}
          iconWrapper
          onPress={() => navigation.navigate('Dividers')}
          divider
        />
        <ListTile
          title="Spinners & Loading"
          subtitle="Skia powered loading indicators"
          leftIcon={<Feather name="loader" size={18} color={colors.foreground} />}
          rightIcon={<Feather name="chevron-right" size={18} color={colors.muted} />}
          iconWrapper
          onPress={() => (navigation as any).navigate('Spinners')}
        />
      </ListTileGroup>
    </Page>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: spacing.s7,
  },
});

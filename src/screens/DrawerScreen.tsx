import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header, ListTile, ListTileGroup, spacing, Text, useTheme, Page, Drawer, Button, Divider, IconButton } from '../factory';
import { Feather } from '@expo/vector-icons';

export const DrawerScreen = () => {
  const navigation = useNavigation();
  const [isLeftOpen, setIsLeftOpen] = useState(false);
  const [isRightOpen, setIsRightOpen] = useState(false);
  const { colors } = useTheme();

  return (
    <Page
      scrollable
      contentContainerStyle={styles.content}
      header={
        <Header
          title="Drawer"
          onBackPress={() => navigation.goBack()}
        />
      }
    >
      <View style={styles.section}>
        <Text variant="h2">Side Drawers</Text>
        <Text muted>
          Swipeable panels that slide in from the left or right edge.
        </Text>

        <View style={styles.buttonContainer}>
          <IconButton
            variant="primary"
            icon={<Feather name="sidebar" size={20} />}
            label="Left"
            onPress={() => setIsLeftOpen(true)}
          />
          <IconButton
            variant="base"
            icon={<Feather name="sidebar" size={20} />}
            label="Right"
            onPress={() => setIsRightOpen(true)}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text variant="h2">Trigger from List</Text>
        <ListTileGroup>
          <ListTile
            title="Navigation Menu"
            leftIcon={<Feather name="menu" size={20} color={colors.foreground} />}
            rightIcon={<Feather name="chevron-right" size={18} color={colors.muted} />}
            onPress={() => setIsLeftOpen(true)}
            divider
          />
          <ListTile
            title="Filters Panel"
            leftIcon={<Feather name="filter" size={20} color={colors.foreground} />}
            rightIcon={<Feather name="chevron-left" size={18} color={colors.muted} />}
            onPress={() => setIsRightOpen(true)}
          />
        </ListTileGroup>
      </View>

      {/* Left Drawer */}
      <Drawer
        isOpen={isLeftOpen}
        onClose={() => setIsLeftOpen(false)}
        side="left"
      >
        <Text variant="h2">Menu</Text>
        <Divider spacing="s7" />
        <ListTile
          title="Home"
          leftIcon={<Feather name="home" size={18} color={colors.foreground} />}
          onPress={() => setIsLeftOpen(false)}
          divider
        />
        <ListTile
          title="Profile"
          leftIcon={<Feather name="user" size={18} color={colors.foreground} />}
          onPress={() => setIsLeftOpen(false)}
          divider
        />
        <ListTile
          title="Settings"
          leftIcon={<Feather name="settings" size={18} color={colors.foreground} />}
          onPress={() => setIsLeftOpen(false)}
          divider
        />
        <ListTile
          title="Help"
          leftIcon={<Feather name="help-circle" size={18} color={colors.foreground} />}
          onPress={() => setIsLeftOpen(false)}
        />
      </Drawer>

      {/* Right Drawer */}
      <Drawer
        isOpen={isRightOpen}
        onClose={() => setIsRightOpen(false)}
        side="right"
      >
        <Text variant="h2">Filters</Text>
        <Divider spacing="s7" />
        <View style={{ gap: spacing.s6, flex: 1 }}>
          <Text muted>Apply filters to refine your results.</Text>
          <Button
            variant="primary"
            title="Apply Filters"
            onPress={() => setIsRightOpen(false)}
          />
          <Button
            variant="outline"
            title="Reset"
            onPress={() => setIsRightOpen(false)}
          />
        </View>
      </Drawer>
    </Page>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: spacing.s7,
    gap: spacing.s9,
  },
  section: {
    gap: spacing.s3,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: spacing.s4,
    marginTop: spacing.s4,
  },
});

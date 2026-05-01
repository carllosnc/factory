import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header, ListTile, ListTileGroup, spacing, Text, useTheme, Page, BottomSheet, Button, typography, Divider, IconButton } from '../factory';
import { Feather } from '@expo/vector-icons';

export const BottomSheetScreen = () => {
  const navigation = useNavigation();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isLargeSheetOpen, setIsLargeSheetOpen] = useState(false);
  const { colors } = useTheme();

  return (
    <Page
      scrollable
      contentContainerStyle={styles.content}
      header={
        <Header
          title="Bottom Sheet"
          onBackPress={() => navigation.goBack()}
        />
      }
    >
      <View style={styles.section}>
        <Text variant="h2">Quick Actions</Text>
        <Text muted>
          Use mini icon buttons to trigger bottom sheets with focused content.
        </Text>

        <View style={styles.buttonContainer}>
          <IconButton
            variant="primary"
            icon={<Feather name="layers" size={20} />}
            label="Actions"
            onPress={() => setIsSheetOpen(true)}
          />
          <IconButton
            variant="base"
            icon={<Feather name="activity" size={20} />}
            label="Activity"
            onPress={() => setIsLargeSheetOpen(true)}
          />
          <IconButton
            variant="success"
            icon={<Feather name="plus" size={20} />}
            label="Add"
            onPress={() => setIsSheetOpen(true)}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text variant="h2">Trigger from List</Text>
        <ListTileGroup>
          <ListTile
            title="Account Settings"
            leftIcon={<Feather name="user" size={20} color={colors.foreground} />}
            rightIcon={<Feather name="chevron-up" size={18} color={colors.muted} />}
            onPress={() => setIsSheetOpen(true)}
            divider
          />
          <ListTile
            title="Security"
            leftIcon={<Feather name="shield" size={20} color={colors.foreground} />}
            rightIcon={<Feather name="chevron-up" size={18} color={colors.muted} />}
            onPress={() => setIsSheetOpen(true)}
          />
        </ListTileGroup>
      </View>

      {/* Standard Bottom Sheet */}
      <BottomSheet
        isOpen={isSheetOpen}
        onClose={() => setIsSheetOpen(false)}
      >
        <View style={styles.sheetContent}>
          <Text variant="h2" style={{ textAlign: 'center' }}>Select Action</Text>
          <View style={{ height: 100, justifyContent: 'center', alignItems: 'center' }}>
            <Text muted>Minimal content area</Text>
          </View>
          <Button
            variant="primary"
            title="Confirm"
            onPress={() => setIsSheetOpen(false)}
          />
        </View>
      </BottomSheet>

      {/* Large Bottom Sheet */}
      <BottomSheet
        isOpen={isLargeSheetOpen}
        onClose={() => setIsLargeSheetOpen(false)}
        height={400}
      >
        <View style={styles.sheetContent}>
          <Text variant="h2" style={{ textAlign: 'center' }}>Activity Summary</Text>
          <View style={{ height: 200, justifyContent: 'center', alignItems: 'center', gap: spacing.s4 }}>
            <Feather name="activity" size={48} color={colors.primary} />
            <Text muted>No recent activity to show</Text>
          </View>
          <Button
            variant="outline"
            title="Dismiss"
            onPress={() => setIsLargeSheetOpen(false)}
          />
        </View>
      </BottomSheet>
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
  sheetContent: {
    padding: spacing.s6,
    paddingTop: spacing.s2,
    gap: spacing.s4,
  },
});

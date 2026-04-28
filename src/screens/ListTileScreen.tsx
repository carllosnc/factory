import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header, ListTile, ListTileGroup, spacing, colors, uiColors } from '../factory';
import { Ionicons } from '@expo/vector-icons';

export const ListTileScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header
        title="ListTile Variants"
        onBackPress={() => navigation.goBack()}
      />
      <ScrollView contentContainerStyle={styles.content}>
        <ListTileGroup>
          <ListTile
            title="Account Settings"
            subtitle="Manage your profile and privacy"
            leftIcon={<Ionicons name="person-outline" size={20} color={uiColors.theme.foreground} />}
            iconWrapper
            rightIcon={<Ionicons name="chevron-forward" size={20} color={uiColors.theme.muted} />}
            onPress={() => console.log('Pressed Account Settings')}
            divider
          />

          <ListTile
            title="Notifications"
            subtitle="Configure alert preferences"
            leftIcon={<Ionicons name="notifications-outline" size={20} color={uiColors.theme.foreground} />}
            iconWrapper
            rightIcon={<Ionicons name="chevron-forward" size={20} color={uiColors.theme.muted} />}
            onPress={() => console.log('Pressed Notifications')}
            divider
          />

          <ListTile
            title="Security"
            subtitle="Password, 2FA, and linked accounts"
            leftIcon={<Ionicons name="shield-checkmark-outline" size={20} color={uiColors.theme.foreground} />}
            iconWrapper
            rightIcon={<Ionicons name="chevron-forward" size={20} color={uiColors.theme.muted} />}
            onPress={() => console.log('Pressed Security')}
            divider
          />

          <ListTile
            title="Appearance"
            subtitle="Dark mode and color themes"
            leftIcon={<Ionicons name="color-palette-outline" size={20} color={uiColors.theme.foreground} />}
            iconWrapper
            rightIcon={<Ionicons name="chevron-forward" size={20} color={uiColors.theme.muted} />}
            onPress={() => console.log('Pressed Appearance')}
            divider
          />

          <ListTile
            title="Help & Support"
            subtitle="FAQs and contact information"
            leftIcon={<Ionicons name="help-circle-outline" size={20} color={uiColors.theme.foreground} />}
            iconWrapper
            rightIcon={<Ionicons name="chevron-forward" size={20} color={uiColors.theme.muted} />}
            onPress={() => console.log('Pressed Help & Support')}
          />
        </ListTileGroup>
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
    padding: spacing.s4
  },
});

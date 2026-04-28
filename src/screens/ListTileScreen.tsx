import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header, ListTile, ListTileGroup, spacing, uiColors } from '../factory';
import { Feather } from '@expo/vector-icons';

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
            leftIcon={<Feather name="user" size={18} color={uiColors.theme.foreground} />}
            iconWrapper
            rightIcon={<Feather name="chevron-right" size={18} color={uiColors.theme.muted} />}
            onPress={() => console.log('Pressed Account Settings')}
            divider
          />

          <ListTile
            title="Notifications"
            subtitle="Configure alert preferences"
            leftIcon={<Feather name="bell" size={18} color={uiColors.theme.foreground} />}
            iconWrapper
            rightIcon={<Feather name="chevron-right" size={18} color={uiColors.theme.muted} />}
            onPress={() => console.log('Pressed Notifications')}
            divider
          />

          <ListTile
            title="Security"
            subtitle="Password, 2FA, and linked accounts"
            leftIcon={<Feather name="shield" size={18} color={uiColors.theme.foreground} />}
            iconWrapper
            rightIcon={<Feather name="chevron-right" size={18} color={uiColors.theme.muted} />}
            onPress={() => console.log('Pressed Security')}
            divider
          />

          <ListTile
            title="Appearance"
            subtitle="Dark mode and color themes"
            leftIcon={<Feather name="droplet" size={18} color={uiColors.theme.foreground} />}
            iconWrapper
            rightIcon={<Feather name="chevron-right" size={18} color={uiColors.theme.muted} />}
            onPress={() => console.log('Pressed Appearance')}
            divider
          />

          <ListTile
            title="Help & Support"
            subtitle="FAQs and contact information"
            leftIcon={<Feather name="help-circle" size={18} color={uiColors.theme.foreground} />}
            iconWrapper
            rightIcon={<Feather name="chevron-right" size={18} color={uiColors.theme.muted} />}
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
    padding: spacing.s7
  },
});

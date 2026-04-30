import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header, IconButton, spacing, Text, useTheme, Page, typography } from '../factory';
import { Feather } from '@expo/vector-icons';

export const IconButtonsScreen = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();

  return (
    <Page
      scrollable
      contentContainerStyle={styles.content}
      header={
        <Header
          title="Icon Buttons"
          onBackPress={() => navigation.goBack()}
        />
      }
    >
      <View style={styles.section}>
        <Text style={{ fontSize: typography.lg, fontWeight: '700', color: colors.foreground }}>Variants</Text>
        <View style={styles.row}>
          <IconButton
            icon={<Feather name="send" size={24} />}
            label="Primary"
            variant="primary"
            onPress={() => {}}
          />
          <IconButton
            icon={<Feather name="check-circle" size={24} />}
            label="Success"
            variant="success"
            onPress={() => {}}
          />
          <IconButton
            icon={<Feather name="alert-circle" size={24} />}
            label="Error"
            variant="error"
            onPress={() => {}}
          />
          <IconButton
            icon={<Feather name="box" size={24} />}
            label="Base"
            variant="base"
            onPress={() => {}}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={{ fontSize: typography.lg, fontWeight: '700', color: colors.foreground }}>Badges</Text>
        <View style={styles.row}>
          <IconButton
            icon={<Feather name="bell" size={24} />}
            label="Alerts"
            badge={true}
            variant="primary"
            onPress={() => {}}
          />
          <IconButton
            icon={<Feather name="mail" size={24} />}
            label="Inbox"
            badge={5}
            variant="success"
            onPress={() => {}}
          />
          <IconButton
            icon={<Feather name="message-square" size={24} />}
            label="Messages"
            badge={120}
            variant="error"
            onPress={() => {}}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={{ fontSize: typography.lg, fontWeight: '700', color: colors.foreground }}>Variations</Text>
        <View style={styles.row}>
          <IconButton
            icon={<Feather name="heart" size={24} />}
            label="Like"
            onPress={() => {}}
          />
          <IconButton
            icon={<Feather name="bookmark" size={24} />}
            label="Save"
            onPress={() => {}}
          />
          <IconButton
            icon={<Feather name="camera" size={24} />}
            label="Photo"
            onPress={() => {}}
          />
          <IconButton
            icon={<Feather name="mic" size={24} />}
            label="Record"
            onPress={() => {}}
          />
        </View>
      </View>
    </Page>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: spacing.s9,
    gap: spacing.s10,
  },
  section: {
    gap: spacing.s7,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.s9,
    alignItems: 'center',
  },
});

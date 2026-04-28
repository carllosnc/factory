import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header, IconButton, spacing, uiColors } from '../factory';
import { Feather } from '@expo/vector-icons';

export const IconButtonsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header
        title="Icon Buttons"
        onBackPress={() => navigation.goBack()}
      />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Variants</Text>
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
          <Text style={styles.sectionTitle}>Badges</Text>
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
          <Text style={styles.sectionTitle}>Variations</Text>
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
    padding: spacing.s9,
    gap: spacing.s10,
  },
  section: {
    gap: spacing.s7,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: uiColors.theme.foreground,
    marginBottom: spacing.s5,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.s9,
    alignItems: 'center',
  },
});

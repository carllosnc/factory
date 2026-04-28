import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header, IconButton, spacing, uiColors } from '../factory';
import { Ionicons } from '@expo/vector-icons';

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
              icon={<Ionicons name="rocket-outline" size={26} />}
              label="Primary"
              variant="primary"
              onPress={() => {}}
            />
            <IconButton
              icon={<Ionicons name="checkmark-circle-outline" size={26} />}
              label="Success"
              variant="success"
              onPress={() => {}}
            />
            <IconButton
              icon={<Ionicons name="alert-circle-outline" size={26} />}
              label="Error"
              variant="error"
              onPress={() => {}}
            />
            <IconButton
              icon={<Ionicons name="cube-outline" size={26} />}
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
              icon={<Ionicons name="notifications-outline" size={26} />}
              label="Alerts"
              badge={true}
              variant="primary"
              onPress={() => {}}
            />
            <IconButton
              icon={<Ionicons name="mail-outline" size={26} />}
              label="Inbox"
              badge={5}
              variant="success"
              onPress={() => {}}
            />
            <IconButton
              icon={<Ionicons name="chatbubbles-outline" size={26} />}
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
              icon={<Ionicons name="heart-outline" size={26} />}
              label="Like"
              onPress={() => {}}
            />
            <IconButton
              icon={<Ionicons name="bookmark-outline" size={26} />}
              label="Save"
              onPress={() => {}}
            />
            <IconButton
              icon={<Ionicons name="camera-outline" size={26} />}
              label="Photo"
              onPress={() => {}}
            />
            <IconButton
              icon={<Ionicons name="mic-outline" size={26} />}
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
    padding: spacing.s6,
    gap: spacing.s8,
  },
  section: {
    gap: spacing.s4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: uiColors.theme.foreground,
    marginBottom: spacing.s2,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.s6,
    alignItems: 'center',
  },
});

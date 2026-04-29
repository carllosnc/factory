import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header, Checkbox, Radio, Switch, ListTileGroup, spacing, useTheme, Text, Page } from '../factory';

export const SelectionScreen = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();

  // Checkbox states
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);

  // Radio state
  const [selectedRadio, setSelectedRadio] = useState('option1');

  // Switch states
  const [switch1, setSwitch1] = useState(true);
  const [switch2, setSwitch2] = useState(false);

  return (
    <Page
      scrollable
      contentContainerStyle={styles.content}
      header={
        <Header
          title="Selection Controls"
          onBackPress={() => navigation.goBack()}
        />
      }
    >
      <View style={styles.section}>
        <Text size="lg" weight="bold" style={{ color: colors.foreground, marginBottom: spacing.s5 }}>Switches</Text>
        <ListTileGroup>
          <Switch
            title="Wi-Fi"
            subtitle="Connect to wireless networks"
            value={switch1}
            onValueChange={setSwitch1}
            divider
          />
          <Switch
            title="Bluetooth"
            subtitle="Connect to nearby devices"
            value={switch2}
            onValueChange={setSwitch2}
            divider
          />
          <Switch
            title="Airplane Mode"
            subtitle="Disable all wireless communications"
            value={false}
            onValueChange={() => {}}
            disabled
          />
        </ListTileGroup>
      </View>

      <View style={styles.section}>
        <Text size="lg" weight="bold" style={{ color: colors.foreground, marginBottom: spacing.s5 }}>Checkboxes</Text>
        <ListTileGroup>
          <Checkbox
            title="Enable Notifications"
            subtitle="Get alerts for important updates"
            checked={checked1}
            onValueChange={setChecked1}
            divider
          />
          <Checkbox
            title="Dark Mode"
            subtitle="Use a darker color palette"
            checked={checked2}
            onValueChange={setChecked2}
            divider
          />
          <Checkbox
            title="Analytics"
            subtitle="Help us improve the experience"
            checked={checked3}
            onValueChange={setChecked3}
            disabled
          />
        </ListTileGroup>
      </View>

      <View style={styles.section}>
        <Text size="lg" weight="bold" style={{ color: colors.foreground, marginBottom: spacing.s5 }}>Radio Buttons</Text>
        <ListTileGroup>
          <Radio
            title="Standard Delivery"
            subtitle="3-5 business days"
            selected={selectedRadio === 'option1'}
            onSelect={() => setSelectedRadio('option1')}
            divider
          />
          <Radio
            title="Express Shipping"
            subtitle="1-2 business days"
            selected={selectedRadio === 'option2'}
            onSelect={() => setSelectedRadio('option2')}
            divider
          />
          <Radio
            title="Priority Overnight"
            subtitle="Next business day"
            selected={selectedRadio === 'option3'}
            onSelect={() => setSelectedRadio('option3')}
          />
        </ListTileGroup>
      </View>

      <View style={styles.section}>
        <Text size="lg" weight="bold" style={{ color: colors.foreground, marginBottom: spacing.s5 }}>Disabled States</Text>
        <ListTileGroup>
          <Checkbox
            title="Disabled Checkbox"
            subtitle="This option is currently unavailable"
            checked={true}
            onValueChange={() => {}}
            disabled
            divider
          />
          <Radio
            title="Disabled Radio"
            subtitle="This selection is restricted"
            selected={false}
            onSelect={() => {}}
            disabled
          />
        </ListTileGroup>
      </View>
    </Page>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: spacing.s7,
  },
  section: {
    marginBottom: spacing.s9,
  },
});

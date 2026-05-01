import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { 
  Header, 
  spacing, 
  useTheme, 
  Text, 
  Page, 
  Spinner, 
  LoadingOverlay, 
  Button, 
  Divider,
  ListTile,
  ListTileGroup,
  colors as baseColors
} from '../factory';
import { Feather } from '@expo/vector-icons';

export const SpinnerScreen = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const [isLoading, setIsLoading] = useState(false);

  const showLoader = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2500);
  };

  return (
    <Page
      scrollable
      contentContainerStyle={styles.content}
      header={
        <Header
          title="Loading Indicators"
          onBackPress={() => navigation.goBack()}
        />
      }
    >
      <View style={styles.section}>
        <Text variant="h3" weight="bold">Standard Spinners</Text>
        <Text variant="caption" muted style={{ marginBottom: spacing.s4 }}>
          Premium Skia-powered spinners with smooth gradient trails and glow effects.
        </Text>
        
        <View style={styles.row}>
          <View style={styles.spinnerItem}>
            <Spinner size={32} />
            <Text variant="label" weight="semibold" color={baseColors.base.t400}>32px</Text>
          </View>
          <View style={styles.spinnerItem}>
            <Spinner size={48} />
            <Text variant="label" weight="semibold" color={baseColors.base.t400}>48px</Text>
          </View>
          <View style={styles.spinnerItem}>
            <Spinner size={64} />
            <Text variant="label" weight="semibold" color={baseColors.base.t400}>64px</Text>
          </View>
        </View>
      </View>

      <Divider size="s8" />

      <View style={styles.section}>
        <Text variant="h3" weight="bold">Color Variants</Text>
        <View style={styles.row}>
          <View style={styles.spinnerItem}>
            <Spinner color={colors.primary} size={40} />
            <Text variant="label" weight="semibold" color={baseColors.base.t400}>Primary</Text>
          </View>
          <View style={styles.spinnerItem}>
            <Spinner color={colors.success} size={40} />
            <Text variant="label" weight="semibold" color={baseColors.base.t400}>Success</Text>
          </View>
          <View style={styles.spinnerItem}>
            <Spinner color={colors.error} size={40} />
            <Text variant="label" weight="semibold" color={baseColors.base.t400}>Error</Text>
          </View>
          <View style={styles.spinnerItem}>
            <Spinner color="#9333ea" size={40} />
            <Text variant="label" weight="semibold" color={baseColors.base.t400}>Purple</Text>
          </View>
        </View>
      </View>

      <Divider size="s8" />

      <View style={styles.section}>
        <Text variant="h3" weight="bold">Full Screen Overlay</Text>
        <Text variant="caption" muted style={{ marginBottom: spacing.s4 }}>
          High-quality glassmorphism overlay with blur effect and custom messaging.
        </Text>
        <Button 
          variant="primary" 
          title="Show Loading Overlay" 
          onPress={showLoader} 
        />
      </View>

      <Divider size="s8" />

      <View style={styles.section}>
        <Text variant="h3" weight="bold">Interactive Contexts</Text>
        <ListTileGroup>
          <ListTile
            title="Fetching Data"
            subtitle="Please wait while we sync your data"
            rightIcon={<Spinner size={24} />}
          />
          <ListTile
            title="Processing Payment"
            subtitle="Secure transaction in progress"
            rightIcon={<Spinner size={24} color={colors.success} />}
          />
        </ListTileGroup>
      </View>

      <LoadingOverlay 
        visible={isLoading} 
        message="Finalizing your request..." 
      />
    </Page>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: spacing.s7,
  },
  section: {
    gap: spacing.s5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: spacing.s9,
  },
  spinnerItem: {
    alignItems: 'center',
    gap: spacing.s3,
  },
});

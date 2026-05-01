import React from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import { Spinner } from './Spinner';
import { Text } from '../Text/Text';
import { useTheme } from '../ThemeContext';
import { spacing, typography } from '../factory';

interface LoadingOverlayProps {
  visible: boolean;
  message?: string;
}

export const LoadingOverlay = ({ visible, message }: LoadingOverlayProps) => {
  const { isDark, colors } = useTheme();

  return (
    <Modal transparent visible={visible} animationType="fade" statusBarTranslucent={true}>
      <View style={styles.container}>
        <View
          style={[
            StyleSheet.absoluteFill,
            { backgroundColor: 'rgba(0, 0, 0, 0.7)' }
          ]}
        />
        <View style={styles.content}>
          <Spinner size={64} color="white" />
          {message && (
            <Text
              style={[
                styles.message,
                { color: 'white' }
              ]}
            >
              {message}
            </Text>
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    padding: spacing.s9,
    borderRadius: 24,
    alignItems: 'center',
    gap: spacing.s7,
  },
  message: {
    fontSize: typography.base,
    fontWeight: '600',
    textAlign: 'center',
  },
});

import React, { useMemo } from 'react';
import {
  View,
  Modal as RNModal,
  Pressable,
  StyleSheet,
} from 'react-native';
import Animated from 'react-native-reanimated';
import { Feather } from '@expo/vector-icons';

import { useTheme } from '../ThemeContext';
import { createStyles } from './Modal.styles';
import { useModal } from './useModal';
import { Text } from '../Text/Text';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  description?: string;
  footer?: React.ReactNode;
}

export const Modal = ({
  isOpen,
  onClose,
  children,
  title,
  description,
  footer,
}: ModalProps) => {
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);

  const {
    visible,
    animatedModalStyle,
    animatedOverlayStyle,
    closeModal,
  } = useModal({ isOpen, onClose });

  if (!visible) return null;

  return (
    <RNModal
      transparent
      visible={visible}
      animationType="none"
      onRequestClose={onClose}
      statusBarTranslucent={true}
    >
      <View style={{ flex: 1 }}>
        <Pressable
          style={StyleSheet.absoluteFill}
          onPress={closeModal}
        >
          <Animated.View style={[styles.overlay, animatedOverlayStyle]} />
        </Pressable>

        <View style={styles.overlay} pointerEvents="box-none">
          <Animated.View style={[styles.modalContainer, animatedModalStyle]}>
            {title && (
              <View style={styles.header}>
                <Text variant="h3" style={styles.title}>
                  {title}
                </Text>
              </View>
            )}

            <View style={styles.content}>
              {description && (
                <Text variant="body" style={styles.description}>
                  {description}
                </Text>
              )}
              {children}
            </View>

            {footer && <View style={styles.footer}>{footer}</View>}
          </Animated.View>
        </View>
      </View>
    </RNModal>
  );
};


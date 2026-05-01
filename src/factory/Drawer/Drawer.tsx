import React, { useMemo } from 'react';
import {
  View,
  Modal,
  Pressable,
  StyleSheet,
} from 'react-native';
import Animated from 'react-native-reanimated';
import {
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';

import { useTheme } from '../ThemeContext';
import { createStyles } from './Drawer.styles';
import { useDrawer } from './useDrawer';

export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  side?: 'left' | 'right';
}

export const Drawer = ({
  isOpen,
  onClose,
  children,
  side = 'left',
}: DrawerProps) => {
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);

  const {
    visible,
    panGesture,
    animatedDrawerStyle,
    animatedOverlayStyle,
    closeDrawer,
  } = useDrawer({ isOpen, onClose, side });

  if (!visible) return null;

  const sideStyle = side === 'left' ? styles.drawerLeft : styles.drawerRight;

  return (
    <Modal
      transparent
      visible={visible}
      animationType="none"
      onRequestClose={onClose}
      statusBarTranslucent={true}
    >
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Pressable
          style={StyleSheet.absoluteFill}
          onPress={closeDrawer}
        >
          <Animated.View style={[styles.overlay, animatedOverlayStyle]} />
        </Pressable>

        <GestureDetector gesture={panGesture}>
          <Animated.View style={[styles.drawer, sideStyle, animatedDrawerStyle]}>
            <View style={styles.content}>
              {children}
            </View>
          </Animated.View>
        </GestureDetector>
      </GestureHandlerRootView>
    </Modal>
  );
};

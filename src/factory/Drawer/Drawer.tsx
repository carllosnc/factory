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

import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useTheme } from '../ThemeContext';
import { createStyles } from './Drawer.styles';
import { useDrawer } from './useDrawer';

export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  side?: 'left' | 'right';
  statusBarStyle?: 'light' | 'dark' | 'auto';
}

export const Drawer = ({
  isOpen,
  onClose,
  children,
  side = 'left',
  statusBarStyle = 'dark',
}: DrawerProps) => {
  const { colors } = useTheme();
  const insets = useSafeAreaInsets();
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
      <StatusBar style={statusBarStyle} animated />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Pressable
          style={StyleSheet.absoluteFill}
          onPress={closeDrawer}
        >
          <Animated.View style={[styles.overlay, animatedOverlayStyle]} />
        </Pressable>

        <GestureDetector gesture={panGesture}>
          <Animated.View style={[styles.drawer, sideStyle, animatedDrawerStyle]}>
            <View style={[styles.content, { paddingTop: insets.top + 20 || 64 }]}>
              {children}
            </View>
          </Animated.View>
        </GestureDetector>
      </GestureHandlerRootView>
    </Modal>
  );
};

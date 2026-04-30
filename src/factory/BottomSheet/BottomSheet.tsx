import React, { useMemo } from 'react';
import {
  View,
  Modal,
  Dimensions,
  Pressable,
  StyleSheet,
} from 'react-native';
import Animated from 'react-native-reanimated';
import {
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';

import { useTheme } from '../ThemeContext';
import { createStyles } from './BottomSheet.styles';
import { useBottomSheet } from './useBottomSheet';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

export interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  height?: number;
}

export const BottomSheet = ({
  isOpen,
  onClose,
  children,
  height = SCREEN_HEIGHT * 0.5,
}: BottomSheetProps) => {
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);

  const {
    visible,
    panGesture,
    tapGesture,
    animatedSheetStyle,
    animatedOverlayStyle,
    closeSheet,
  } = useBottomSheet({ isOpen, onClose, height });

  if (!visible) return null;

  return (
    <Modal
      transparent
      visible={visible}
      animationType="none"
      onRequestClose={onClose}
    >
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Pressable
          style={StyleSheet.absoluteFill}
          onPress={closeSheet}
        >
          <Animated.View style={[styles.overlay, animatedOverlayStyle]} />
        </Pressable>

        <GestureDetector gesture={panGesture}>
          <Animated.View style={[styles.sheet, animatedSheetStyle]}>
            <View style={styles.handle} />
            <View style={styles.content}>
              {children}
            </View>
          </Animated.View>
        </GestureDetector>
      </GestureHandlerRootView>
    </Modal>
  );
};

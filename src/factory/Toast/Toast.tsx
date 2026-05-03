import React, { memo } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { styles } from './Toast.styles';
import { Ionicons } from '@expo/vector-icons';
import {
  Canvas,
  RoundedRect,
} from '@shopify/react-native-skia';
import Animated from 'react-native-reanimated';
import {
  useToast,
  useToastProvider,
  useToastItem,
  ToastContext,
  ToastVariant,
  ToastOptions,
} from './useToast';

export type { ToastVariant, ToastOptions };
export { useToast };

const { width } = Dimensions.get('window');
const TOAST_WIDTH = width - 40;

interface ToastProps extends ToastOptions {
  id: string;
  index?: number;
  onHide?: (id: string) => void;
  visible?: boolean;
}

export const Toast = memo((props: ToastProps) => {
  const {
    contentHeight,
    animatedStyle,
    onLayout,
    theme,
    displayMessage,
  } = useToastItem(props);

  return (
    <Animated.View style={[styles.toastContainer, animatedStyle]}>
      <Canvas style={styles.canvas}>
        <RoundedRect
          x={0}
          y={0}
          width={TOAST_WIDTH}
          height={contentHeight}
          r={16}
          color={theme.backgroundColor}
        />

        <RoundedRect
          x={0.5}
          y={0.5}
          width={TOAST_WIDTH - 1}
          height={contentHeight - 1}
          r={16}
          color={theme.strokeColor}
          style="stroke"
          strokeWidth={1}
        />
      </Canvas>

      <View
        style={styles.content}
        onLayout={onLayout}
      >
        <View style={styles.iconContainer}>
          <Ionicons name={theme.icon} size={18} color={theme.iconColor} />
        </View>
        <View style={styles.textContainer}>
          <Text style={[styles.title, { color: theme.textColor }]}>{props.title}</Text>
          <Text style={[styles.message, { color: theme.secondaryTextColor }]}>{displayMessage}</Text>
        </View>
      </View>
    </Animated.View>
  );
});

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { toasts, showToast, removeToast } = useToastProvider();

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <View style={StyleSheet.absoluteFill} pointerEvents="box-none">
        {toasts.map((toast, index) => (
          <Toast
            key={toast.id}
            {...toast}
            index={index}
            onHide={removeToast}
          />
        ))}
      </View>
    </ToastContext.Provider>
  );
};
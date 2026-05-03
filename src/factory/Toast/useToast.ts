import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { LayoutChangeEvent } from 'react-native';
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
  Easing,
} from 'react-native-reanimated';
import { useTheme } from '../ThemeContext';

export type ToastVariant = 'success' | 'error' | 'message' | 'info' | 'normal';

export interface ToastOptions {
  title: string;
  message?: string;
  description?: string;
  type?: ToastVariant;
  variant?: ToastVariant;
  duration?: number;
  icon?: any;
}

export interface ToastData extends ToastOptions {
  id: string;
}

interface ToastContextType {
  showToast: (options: ToastOptions) => void;
}

export const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export const useToastProvider = () => {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const showToast = useCallback((options: ToastOptions) => {
    const id = Math.random().toString(36).substring(7);
    setToasts((prev) => [{ ...options, id }, ...prev]);
  }, []);

  return {
    toasts,
    showToast,
    removeToast,
  };
};

export interface UseToastItemProps extends ToastOptions {
  id: string;
  index?: number;
  onHide?: (id: string) => void;
  visible?: boolean;
}

export const useToastItem = ({
  id,
  message,
  description,
  type,
  variant,
  duration = 4000,
  index = 0,
  onHide,
  visible = true,
  icon,
}: UseToastItemProps) => {
  const { colors, isDark } = useTheme();
  const [contentHeight, setContentHeight] = useState(80);
  const translateY = useSharedValue(-150);
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0.9);

  const displayMessage = message || description || '';
  const displayVariant = variant || type || 'normal';

  useEffect(() => {
    if (visible && onHide) {
      const timer = setTimeout(() => {
        translateY.value = withTiming(-150, {
          duration: 400,
          easing: Easing.in(Easing.back(1))
        });
        opacity.value = withTiming(0, { duration: 300 }, () => {
          if (onHide) runOnJS(onHide)(id);
        });
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [visible, duration, id, onHide]);

  useEffect(() => {
    const isVisible = visible && index < 3;
    const stackOffset = index * 10;
    const stackScale = 1 - index * 0.05;

    translateY.value = withTiming(isVisible ? 60 - stackOffset : -150, {
      duration: 500,
      easing: Easing.out(Easing.back(1.5)),
    });
    opacity.value = withTiming(isVisible ? 1 : 0, { duration: 400 });
    scale.value = withTiming(isVisible ? stackScale : 0.8, {
      duration: 500,
      easing: Easing.out(Easing.back(1.5))
    });
  }, [index, visible]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: translateY.value },
      { scale: scale.value }
    ],
    opacity: opacity.value,
    zIndex: 1000 - index,
  }));

  const onLayout = (e: LayoutChangeEvent) => {
    setContentHeight(e.nativeEvent.layout.height);
  };

  const getThemeData = () => {
    let baseTheme;
    switch (displayVariant) {
      case 'success':
        baseTheme = {
          backgroundColor: isDark ? '#064e3b' : '#059669',
          icon: 'checkmark-circle' as const,
          iconColor: '#FFFFFF',
          textColor: '#FFFFFF',
          secondaryTextColor: 'rgba(255,255,255,0.8)',
          strokeColor: 'rgba(255,255,255,0.2)',
        };
        break;
      case 'error':
        baseTheme = {
          backgroundColor: isDark ? '#7f1d1d' : '#e11d48',
          icon: 'alert-circle' as const,
          iconColor: '#FFFFFF',
          textColor: '#FFFFFF',
          secondaryTextColor: 'rgba(255,255,255,0.8)',
          strokeColor: 'rgba(255,255,255,0.2)',
        };
        break;
      case 'info':
      case 'message':
        baseTheme = {
          backgroundColor: isDark ? '#1e3a8a' : '#2563eb',
          icon: 'information-circle' as const,
          iconColor: '#FFFFFF',
          textColor: '#FFFFFF',
          secondaryTextColor: 'rgba(255,255,255,0.8)',
          strokeColor: 'rgba(255,255,255,0.2)',
        };
        break;
      case 'normal':
      default:
        baseTheme = {
          backgroundColor: colors.foreground,
          icon: 'notifications' as const,
          iconColor: colors.background,
          textColor: colors.background,
          secondaryTextColor: `${colors.background}CC`,
          strokeColor: isDark ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)',
        };
        break;
    }

    if (icon) {
      baseTheme.icon = icon;
    }

    return baseTheme;
  };

  return {
    contentHeight,
    animatedStyle,
    onLayout,
    theme: getThemeData(),
    displayMessage,
  };
};

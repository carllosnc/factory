import React, { useEffect } from 'react';
import {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';
import { Gesture } from 'react-native-gesture-handler';
import { DRAWER_WIDTH } from './Drawer.styles';

interface UseDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  side: 'left' | 'right';
}

export const useDrawer = ({ isOpen, onClose, side }: UseDrawerProps) => {
  const [visible, setVisible] = React.useState(isOpen);

  const offscreenValue = side === 'left' ? -DRAWER_WIDTH : DRAWER_WIDTH;

  const translateX = useSharedValue(offscreenValue);
  const opacity = useSharedValue(0);

  const closeDrawer = () => {
    opacity.value = withTiming(0, { duration: 200 });
    translateX.value = withTiming(offscreenValue, { duration: 250 }, (finished) => {
      if (finished) {
        runOnJS(setVisible)(false);
        runOnJS(onClose)();
      }
    });
  };

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      translateX.value = withSpring(0, {
        damping: 25,
        stiffness: 180,
        mass: 0.8,
      });
      opacity.value = withTiming(1, { duration: 200 });
    } else {
      closeDrawer();
    }
  }, [isOpen]);

  const panGesture = Gesture.Pan()
    .onUpdate((event) => {
      const isClosingDirection = side === 'left'
        ? event.translationX < 0
        : event.translationX > 0;

      if (isClosingDirection) {
        translateX.value = event.translationX;
        opacity.value = 1 - (Math.abs(event.translationX) / DRAWER_WIDTH);
      }
    })
    .onEnd((event) => {
      const isClosingDirection = side === 'left'
        ? event.translationX < 0
        : event.translationX > 0;

      const threshold = DRAWER_WIDTH / 3;
      const velocityThreshold = 500;

      const shouldClose = isClosingDirection && (
        Math.abs(event.translationX) > threshold ||
        Math.abs(event.velocityX) > velocityThreshold
      );

      if (shouldClose) {
        runOnJS(closeDrawer)();
      } else {
        translateX.value = withSpring(0, {
          damping: 25,
          stiffness: 180,
          mass: 0.8,
        });
        opacity.value = withTiming(1, { duration: 200 });
      }
    });

  const animatedDrawerStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const animatedOverlayStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return {
    visible,
    panGesture,
    animatedDrawerStyle,
    animatedOverlayStyle,
    closeDrawer,
  };
};

import React, { useEffect } from 'react';
import {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';

interface UseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const useModal = ({ isOpen, onClose }: UseModalProps) => {
  const [visible, setVisible] = React.useState(isOpen);

  const translateY = useSharedValue(-50);
  const opacity = useSharedValue(0);

  const closeModal = () => {
    translateY.value = withTiming(-50, { duration: 200 });
    opacity.value = withTiming(0, { duration: 200 }, (finished) => {
      if (finished) {
        runOnJS(setVisible)(false);
        runOnJS(onClose)();
      }
    });
  };

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      translateY.value = withTiming(0, { duration: 200 });
      opacity.value = withTiming(1, { duration: 200 });
    } else {
      closeModal();
    }
  }, [isOpen]);

  const animatedModalStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
    opacity: opacity.value,
  }));

  const animatedOverlayStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return {
    visible,
    animatedModalStyle,
    animatedOverlayStyle,
    closeModal,
  };
};

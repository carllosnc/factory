import React, { useEffect } from 'react';
import { Dimensions } from 'react-native';
import {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';
import { Gesture } from 'react-native-gesture-handler';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

interface UseBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  height: number;
}

export const useBottomSheet = ({ isOpen, onClose, height }: UseBottomSheetProps) => {
  const [visible, setVisible] = React.useState(isOpen);

  const translateY = useSharedValue(SCREEN_HEIGHT);
  const opacity = useSharedValue(0);

  const closeSheet = () => {
    opacity.value = withTiming(0, { duration: 200 });
    translateY.value = withTiming(SCREEN_HEIGHT, { duration: 250 }, (finished) => {
      if (finished) {
        runOnJS(setVisible)(false);
        runOnJS(onClose)();
      }
    });
  };

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      translateY.value = withSpring(0, { 
        damping: 25, 
        stiffness: 180,
        mass: 0.8,
      });
      opacity.value = withTiming(1, { duration: 200 });
    } else {
      closeSheet();
    }
  }, [isOpen]);

  const panGesture = Gesture.Pan()
    .onUpdate((event) => {
      if (event.translationY > 0) {
        translateY.value = event.translationY;
      }
    })
    .onEnd((event) => {
      if (event.translationY > height / 4 || event.velocityY > 600) {
        runOnJS(closeSheet)();
      } else {
        translateY.value = withSpring(0, { 
          damping: 25, 
          stiffness: 180,
          mass: 0.8,
        });
      }
    });

  const tapGesture = Gesture.Tap()
    .onStart(() => {
      runOnJS(closeSheet)();
    });

  const animatedSheetStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
    height,
  }));

  const animatedOverlayStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return {
    visible,
    panGesture,
    tapGesture,
    animatedSheetStyle,
    animatedOverlayStyle,
    closeSheet,
  };
};

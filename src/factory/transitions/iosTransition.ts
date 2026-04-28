import { StackCardInterpolationProps } from '@react-navigation/stack';

export const customTransitionSpec = {
  animation: 'spring' as const,
  config: {
    stiffness: 1200,
    damping: 600,
    mass: 2,
    overshootClamping: true,
    restDisplacementThreshold: 100,
    restSpeedThreshold: 100,
  },
};

export const customIOSInterpolator = ({ current, next, layouts }: StackCardInterpolationProps) => {
  return {
    cardStyle: {
      transform: [
        {
          translateX: current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [layouts.screen.width, 0],
          }),
        },
        {
          translateX: next
            ? next.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -layouts.screen.width * 0.3],
              })
            : 0,
        },
      ],
      opacity: next
        ? next.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0.8],
          })
        : 1,
    },
    overlayStyle: {
      opacity: current.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.15],
      }),
      backgroundColor: '#000',
    },
  };
};

import React from 'react';
import { render } from '../../test-utils';
import { Slider } from './Slider';

// Mock Gesture Handler
jest.mock('react-native-gesture-handler', () => {
  return {
    GestureDetector: ({ children }: any) => children,
    Gesture: {
      Pan: () => ({
        onBegin: () => ({ onUpdate: () => ({ onEnd: () => ({}) }) }),
      }),
      Tap: () => ({
        onBegin: () => ({ onFinalize: () => ({}) }),
      }),
      Exclusive: () => ({}),
    },
  };
});

describe('Slider', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<Slider value={50} />);
    expect(getByTestId('slider')).toBeTruthy();
  });
});

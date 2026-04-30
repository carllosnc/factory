import React from 'react';
import { render } from '../../test-utils';
import { BottomSheet } from './BottomSheet';
import { Text } from 'react-native';

// Mock Gesture Handler
jest.mock('react-native-gesture-handler', () => {
  return {
    GestureDetector: ({ children }: any) => children,
    GestureHandlerRootView: ({ children }: any) => children,
    Gesture: {
      Pan: () => ({
        onUpdate: () => ({ onEnd: () => ({}) }),
      }),
      Tap: () => ({
        onStart: () => ({}),
      }),
    },
  };
});

describe('BottomSheet', () => {
  it('renders children when open', () => {
    const { getByText } = render(
      <BottomSheet isOpen={true} onClose={() => {}}>
        <Text>Sheet Content</Text>
      </BottomSheet>
    );
    expect(getByText('Sheet Content')).toBeTruthy();
  });

  it('does not render children when closed', () => {
    const { queryByText } = render(
      <BottomSheet isOpen={false} onClose={() => {}}>
        <Text>Sheet Content</Text>
      </BottomSheet>
    );
    expect(queryByText('Sheet Content')).toBeNull();
  });
});

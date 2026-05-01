import React from 'react';
import { render } from '../../test-utils';
import { Drawer } from './Drawer';
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

describe('Drawer', () => {
  it('renders children when open', () => {
    const { getByText } = render(
      <Drawer isOpen={true} onClose={() => {}}>
        <Text>Drawer Content</Text>
      </Drawer>
    );
    expect(getByText('Drawer Content')).toBeTruthy();
  });

  it('does not render children when closed', () => {
    const { queryByText } = render(
      <Drawer isOpen={false} onClose={() => {}}>
        <Text>Drawer Content</Text>
      </Drawer>
    );
    expect(queryByText('Drawer Content')).toBeNull();
  });

  it('renders with right side prop', () => {
    const { getByText } = render(
      <Drawer isOpen={true} onClose={() => {}} side="right">
        <Text>Right Drawer</Text>
      </Drawer>
    );
    expect(getByText('Right Drawer')).toBeTruthy();
  });
});

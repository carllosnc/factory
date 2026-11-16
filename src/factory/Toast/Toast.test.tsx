import React from 'react';
import { Pressable, Text } from 'react-native';
import { render, fireEvent } from '../../test-utils';
import { ToastProvider, useToast } from './Toast';

const Trigger = () => {
  const { showToast } = useToast();
  return (
    <Pressable
      onPress={() =>
        showToast({
          title: 'Saved',
          message: 'Changes applied',
          variant: 'success',
        })
      }
    >
      <Text>Show Toast</Text>
    </Pressable>
  );
};

describe('Toast', () => {
  it('displays a toast when showToast is called', () => {
    const { getByText } = render(
      <ToastProvider>
        <Trigger />
      </ToastProvider>
    );

    fireEvent.press(getByText('Show Toast'));
    expect(getByText('Saved')).toBeTruthy();
    expect(getByText('Changes applied')).toBeTruthy();
  });
});

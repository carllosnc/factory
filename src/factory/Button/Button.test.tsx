import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Button } from './Button';

describe('Button', () => {
  it('renders correctly with title', () => {
    const { getByText } = render(<Button title="Test Button" />);
    expect(getByText('Test Button')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(<Button title="Press Me" onPress={onPressMock} />);

    fireEvent.press(getByText('Press Me'));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('is disabled when loading is true', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(<Button title="Loading" onPress={onPressMock} loading={true} />);

    fireEvent.press(getByText('Loading'));
    expect(onPressMock).not.toHaveBeenCalled();
  });
});

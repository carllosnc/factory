import React from 'react';
import { render, fireEvent } from '../../test-utils';
import { IconButton } from './IconButton';
import { Text } from 'react-native';

describe('IconButton', () => {
  it('renders correctly with icon', () => {
    const { getByText } = render(<IconButton icon={<Text>Icon</Text>} />);
    expect(getByText('Icon')).toBeTruthy();
  });

  it('renders label correctly', () => {
    const { getByText } = render(<IconButton icon={<Text>Icon</Text>} label="My Label" />);
    expect(getByText('My Label')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <IconButton icon={<Text>Icon</Text>} onPress={onPressMock} />
    );

    fireEvent.press(getByText('Icon'));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('renders numeric badge', () => {
    const { getByText } = render(<IconButton icon={<Text>Icon</Text>} badge={5} />);
    expect(getByText('5')).toBeTruthy();
  });

  it('renders 99+ for badges over 99', () => {
    const { getByText } = render(<IconButton icon={<Text>Icon</Text>} badge={150} />);
    expect(getByText('99+')).toBeTruthy();
  });
});

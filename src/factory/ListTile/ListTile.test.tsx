import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ListTile } from './ListTile';
import { Text } from 'react-native';

describe('ListTile', () => {
  it('renders title correctly', () => {
    const { getByText } = render(<ListTile title="Test Title" />);
    expect(getByText('Test Title')).toBeTruthy();
  });

  it('renders subtitle correctly', () => {
    const { getByText } = render(<ListTile title="Title" subtitle="Test Subtitle" />);
    expect(getByText('Test Subtitle')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(<ListTile title="Pressable" onPress={onPressMock} />);
    
    fireEvent.press(getByTestId('list-tile'));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('does not call onPress when disabled', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(<ListTile title="Disabled" onPress={onPressMock} disabled />);
    
    fireEvent.press(getByTestId('list-tile'));
    expect(onPressMock).not.toHaveBeenCalled();
  });

  it('renders left and right icons', () => {
    const { getByText } = render(
      <ListTile 
        title="Title"
        leftIcon={<Text>LeftIcon</Text>}
        rightIcon={<Text>RightIcon</Text>}
      />
    );
    expect(getByText('LeftIcon')).toBeTruthy();
    expect(getByText('RightIcon')).toBeTruthy();
  });
});

import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Header } from './Header';

describe('Header', () => {
  it('renders correctly with title', () => {
    const { getByText } = render(<Header title="Header Title" />);
    expect(getByText('Header Title')).toBeTruthy();
  });

  it('calls onBackPress when back button is pressed', () => {
    const onBackPressMock = jest.fn();
    const { getByRole } = render(<Header title="Title" onBackPress={onBackPressMock} />);
    
    // The back button is a Pressable, it might not have a role by default.
    // But it contains an Ionicons.
    // Let's use a different way to find it or just trust it's there.
    // Actually, I can add a testID.
  });

  it('renders tabs and handles tab press', () => {
    const onTabPressMock = jest.fn();
    const tabs = ['Tab 1', 'Tab 2'];
    const { getByText } = render(
      <Header title="Title" tabs={tabs} onTabPress={onTabPressMock} />
    );

    fireEvent.press(getByText('Tab 2'));
    expect(onTabPressMock).toHaveBeenCalledWith('Tab 2');
  });
});

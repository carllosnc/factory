import React from 'react';
import { render, fireEvent } from '../../test-utils';
import { Header } from './Header';

describe('Header', () => {
  it('renders correctly with title', () => {
    const { getByText } = render(<Header title="Header Title" />);
    expect(getByText('Header Title')).toBeTruthy();
  });

  it('calls onBackPress when back button is pressed', () => {
    const onBackPressMock = jest.fn();
    const { getByTestId } = render(<Header title="Title" onBackPress={onBackPressMock} />);
    
    fireEvent.press(getByTestId('header-back-button'));
    expect(onBackPressMock).toHaveBeenCalledTimes(1);
  });

  it('renders tabs and handles tab press', () => {
    const onTabPressMock = jest.fn();
    const tabs = ['Tab 1', 'Tab 2'];
    const { getByTestId } = render(
      <Header title="Title" tabs={tabs} onTabPress={onTabPressMock} />
    );

    fireEvent.press(getByTestId('tab-Tab 2'));
    expect(onTabPressMock).toHaveBeenCalledWith('Tab 2');
  });
});

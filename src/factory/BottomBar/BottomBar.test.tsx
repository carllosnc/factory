import React from 'react';
import { render, fireEvent } from '../../test-utils';
import { BottomBar, TabItem } from './BottomBar';

const mockTabs: TabItem[] = [
  { id: 'home', label: 'Home', icon: 'home' },
  { id: 'search', label: 'Search', icon: 'search' },
];

describe('BottomBar', () => {
  it('renders all tabs correctly', () => {
    const { getByText } = render(
      <BottomBar tabs={mockTabs} activeTab="home" onChange={() => {}} />
    );
    expect(getByText('Home')).toBeTruthy();
    expect(getByText('Search')).toBeTruthy();
  });

  it('calls onChange when a tab is pressed', () => {
    const onChangeMock = jest.fn();
    const { getByText } = render(
      <BottomBar tabs={mockTabs} activeTab="home" onChange={onChangeMock} />
    );

    fireEvent.press(getByText('Search'));
    expect(onChangeMock).toHaveBeenCalledWith('search');
  });

  it('does not call onChange when the active tab is pressed', () => {
    const onChangeMock = jest.fn();
    const { getByText } = render(
      <BottomBar tabs={mockTabs} activeTab="home" onChange={onChangeMock} />
    );

    fireEvent.press(getByText('Home'));
    expect(onChangeMock).not.toHaveBeenCalled();
  });
});

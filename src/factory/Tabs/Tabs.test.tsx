import React from 'react';
import { render, fireEvent } from '../../test-utils';
import { Tabs } from './Tabs';

describe('Tabs', () => {
  it('renders correctly with tabs', () => {
    const tabs = ['Tab 1', 'Tab 2'];
    const { getByText } = render(
      <Tabs tabs={tabs} activeTab={0} onChange={() => {}} />
    );
    expect(getByText('Tab 1')).toBeTruthy();
    expect(getByText('Tab 2')).toBeTruthy();
  });

  it('calls onChange when a tab is pressed', () => {
    const onChangeMock = jest.fn();
    const tabs = ['Tab 1', 'Tab 2'];
    const { getByText } = render(
      <Tabs tabs={tabs} activeTab={0} onChange={onChangeMock} />
    );

    fireEvent.press(getByText('Tab 2'));
    expect(onChangeMock).toHaveBeenCalledWith(1);
  });
});

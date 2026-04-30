import React from 'react';
import { render, fireEvent } from '../../test-utils';
import { Radio } from './Radio';

describe('Radio', () => {
  it('renders correctly with title', () => {
    const { getByText } = render(
      <Radio title="Test Radio" selected={false} onSelect={() => {}} />
    );
    expect(getByText('Test Radio')).toBeTruthy();
  });

  it('calls onSelect when pressed and not selected', () => {
    const onSelectMock = jest.fn();
    const { getByTestId } = render(
      <Radio title="Pressable" selected={false} onSelect={onSelectMock} />
    );

    fireEvent.press(getByTestId('radio-tile'));
    expect(onSelectMock).toHaveBeenCalledTimes(1);
  });

  it('does not call onSelect when already selected', () => {
    const onSelectMock = jest.fn();
    const { getByTestId } = render(
      <Radio title="Selected" selected={true} onSelect={onSelectMock} />
    );

    fireEvent.press(getByTestId('radio-tile'));
    expect(onSelectMock).not.toHaveBeenCalled();
  });
});

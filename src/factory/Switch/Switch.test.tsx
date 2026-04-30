import React from 'react';
import { render, fireEvent } from '../../test-utils';
import { Switch } from './Switch';

describe('Switch', () => {
  it('renders correctly with title', () => {
    const { getByText } = render(
      <Switch title="Test Switch" value={false} onValueChange={() => {}} />
    );
    expect(getByText('Test Switch')).toBeTruthy();
  });

  it('calls onValueChange when pressed', () => {
    const onValueChangeMock = jest.fn();
    const { getByTestId } = render(
      <Switch title="Pressable" value={false} onValueChange={onValueChangeMock} />
    );

    fireEvent.press(getByTestId('switch-tile'));
    expect(onValueChangeMock).toHaveBeenCalledWith(true);
  });

  it('does not call onValueChange when disabled', () => {
    const onValueChangeMock = jest.fn();
    const { getByTestId } = render(
      <Switch title="Disabled" value={false} onValueChange={onValueChangeMock} disabled />
    );

    fireEvent.press(getByTestId('switch-tile'));
    expect(onValueChangeMock).not.toHaveBeenCalled();
  });
});

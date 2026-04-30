import React from 'react';
import { render, fireEvent } from '../../test-utils';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('renders correctly with title', () => {
    const { getByText } = render(
      <Checkbox title="Test Checkbox" checked={false} onValueChange={() => {}} />
    );
    expect(getByText('Test Checkbox')).toBeTruthy();
  });

  it('renders subtitle when provided', () => {
    const { getByText } = render(
      <Checkbox 
        title="Title" 
        subtitle="Test Subtitle" 
        checked={false} 
        onValueChange={() => {}} 
      />
    );
    expect(getByText('Test Subtitle')).toBeTruthy();
  });

  it('calls onValueChange when pressed', () => {
    const onValueChangeMock = jest.fn();
    const { getByTestId } = render(
      <Checkbox title="Pressable" checked={false} onValueChange={onValueChangeMock} />
    );

    fireEvent.press(getByTestId('checkbox-tile'));
    expect(onValueChangeMock).toHaveBeenCalledWith(true);
  });

  it('does not call onValueChange when disabled', () => {
    const onValueChangeMock = jest.fn();
    const { getByTestId } = render(
      <Checkbox 
        title="Disabled" 
        checked={false} 
        onValueChange={onValueChangeMock} 
        disabled 
      />
    );

    fireEvent.press(getByTestId('checkbox-tile'));
    expect(onValueChangeMock).not.toHaveBeenCalled();
  });
});

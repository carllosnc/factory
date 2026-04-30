import React from 'react';
import { render, fireEvent } from '../../test-utils';
import { Input } from './Input';

describe('Input', () => {
  it('renders correctly with label', () => {
    const { getByText } = render(<Input label="Username" />);
    expect(getByText('Username')).toBeTruthy();
  });

  it('handles text change', () => {
    const onChangeTextMock = jest.fn();
    const { getByPlaceholderText } = render(
      <Input placeholder="Enter text" onChangeText={onChangeTextMock} />
    );

    fireEvent.changeText(getByPlaceholderText('Enter text'), 'Hello');
    expect(onChangeTextMock).toHaveBeenCalledWith('Hello');
  });

  it('renders error message', () => {
    const { getByText } = render(<Input label="Email" error="Invalid email" />);
    expect(getByText('Invalid email')).toBeTruthy();
  });
});

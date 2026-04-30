import React from 'react';
import { render } from '../../test-utils';
import { Divider } from './Divider';

describe('Divider', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<Divider />);
    expect(getByTestId('divider')).toBeTruthy();
  });

  it('renders text when provided', () => {
    const { getByText } = render(<Divider text="OR" />);
    expect(getByText('OR')).toBeTruthy();
  });
});

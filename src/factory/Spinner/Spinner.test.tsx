import React from 'react';
import { render } from '../../test-utils';
import { Spinner } from './Spinner';

describe('Spinner', () => {
  it('renders with default props and accessibility role', () => {
    const { getByRole } = render(<Spinner />);
    const spinner = getByRole('progressbar');
    expect(spinner).toBeTruthy();
  });

  it('supports changing spoke count dynamically without hook errors', () => {
    const { rerender, getByRole } = render(<Spinner spokes={8} size={24} />);
    expect(getByRole('progressbar')).toBeTruthy();

    rerender(<Spinner spokes={12} size={48} color="#ff0000" />);
    expect(getByRole('progressbar')).toBeTruthy();
  });
});

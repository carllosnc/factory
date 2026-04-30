import React from 'react';
import { render } from '../../test-utils';
import { Text } from './Text';

describe('Text', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Text>Hello World</Text>);
    expect(getByText('Hello World')).toBeTruthy();
  });

  it('applies custom style', () => {
    const { getByText } = render(<Text style={{ color: 'red' }}>Styled Text</Text>);
    const textElement = getByText('Styled Text');
    expect(textElement.props.style).toContainEqual({ color: 'red' });
  });

  it('handles truncate prop', () => {
    const { getByText } = render(<Text truncate={2}>Truncated Text</Text>);
    const textElement = getByText('Truncated Text');
    expect(textElement.props.numberOfLines).toBe(2);
  });
});

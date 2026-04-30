import React from 'react';
import { render } from '../../test-utils';
import { Page } from './Page';
import { Text } from 'react-native';

describe('Page', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <Page>
        <Text>Page Content</Text>
      </Page>
    );
    expect(getByText('Page Content')).toBeTruthy();
  });

  it('renders header and footer', () => {
    const { getByText } = render(
      <Page 
        header={<Text>Header</Text>} 
        footer={<Text>Footer</Text>}
      >
        <Text>Content</Text>
      </Page>
    );
    expect(getByText('Header')).toBeTruthy();
    expect(getByText('Footer')).toBeTruthy();
    expect(getByText('Content')).toBeTruthy();
  });
});

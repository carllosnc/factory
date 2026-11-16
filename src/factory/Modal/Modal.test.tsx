import React from 'react';
import { Text } from 'react-native';
import { render } from '../../test-utils';
import { Modal } from './Modal';

describe('Modal', () => {
  it('does not render content or call onClose when initially closed', () => {
    const onClose = jest.fn();
    const { queryByText } = render(
      <Modal isOpen={false} onClose={onClose} title="Hidden Modal">
        <Text>Secret</Text>
      </Modal>
    );

    expect(queryByText('Hidden Modal')).toBeNull();
    expect(onClose).not.toHaveBeenCalled();
  });

  it('renders title, description, children, and footer when open', () => {
    const onClose = jest.fn();
    const { getByText } = render(
      <Modal
        isOpen={true}
        onClose={onClose}
        title="Confirm Action"
        description="Are you sure?"
        footer={<Text>Footer</Text>}
      >
        <Text>Modal Body</Text>
      </Modal>
    );

    expect(getByText('Confirm Action')).toBeTruthy();
    expect(getByText('Are you sure?')).toBeTruthy();
    expect(getByText('Modal Body')).toBeTruthy();
    expect(getByText('Footer')).toBeTruthy();
  });
});

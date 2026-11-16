import React from 'react';
import { Text } from 'react-native';
import { render, fireEvent } from '../../test-utils';
import { Accordion, AccordionGroup } from './Accordion';

describe('Accordion', () => {
  it('renders title, subtitle, and children', () => {
    const { getByText } = render(
      <Accordion title="Section 1" subtitle="Details">
        <Text>Body Content</Text>
      </Accordion>
    );
    expect(getByText('Section 1')).toBeTruthy();
    expect(getByText('Details')).toBeTruthy();
    expect(getByText('Body Content')).toBeTruthy();
  });

  it('toggles expanded state and calls onToggle', () => {
    const onToggle = jest.fn();
    const { getByRole } = render(
      <Accordion title="FAQ" onToggle={onToggle}>
        <Text>Answer</Text>
      </Accordion>
    );

    const trigger = getByRole('button');
    expect(trigger.props.accessibilityState.expanded).toBe(false);

    fireEvent.press(trigger);
    expect(onToggle).toHaveBeenCalledWith(true);
    expect(trigger.props.accessibilityState.expanded).toBe(true);
  });

  it('does not toggle when disabled', () => {
    const onToggle = jest.fn();
    const { getByRole } = render(
      <Accordion title="Locked" disabled onToggle={onToggle}>
        <Text>Hidden</Text>
      </Accordion>
    );

    fireEvent.press(getByRole('button'));
    expect(onToggle).not.toHaveBeenCalled();
  });

  it('renders inside AccordionGroup', () => {
    const { getByText } = render(
      <AccordionGroup>
        <Accordion title="Item A">
          <Text>Content A</Text>
        </Accordion>
      </AccordionGroup>
    );
    expect(getByText('Item A')).toBeTruthy();
  });
});

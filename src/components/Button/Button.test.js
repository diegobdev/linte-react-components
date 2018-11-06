import React from 'react';
import TestRenderer from 'react-test-renderer';
import Button from './Button';

test('Button Component', () => {
  const buttonRendered = TestRenderer.create(<Button />);
  const button = buttonRendered.toJSON();
  expect(button.props.className).toMatch(/lnt-btn/);
});
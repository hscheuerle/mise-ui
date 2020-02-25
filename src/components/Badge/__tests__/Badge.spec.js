import React from 'react';
import Badge from '../Badge';
import renderer from 'react-test-renderer';

it('renders an atk badge', () => {
  const atkBadge = renderer.create(<Badge type='atk'/>).toJSON();
  expect(atkBadge).toMatchSnapshot();
});


it('renders an cio badge', () => {
  const cioBadge = renderer.create(<Badge type='cio'/>).toJSON();
  expect(cioBadge).toMatchSnapshot();
});


it('renders an cco badge', () => {
  const ccoBadge = renderer.create(<Badge type='cco'/>).toJSON();
  expect(ccoBadge).toMatchSnapshot();
});
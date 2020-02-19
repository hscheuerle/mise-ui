import React from 'react';
import Layout from '../Layout';

export default {
  title: 'Design Tokens|Layout',
  component: Layout,
};

export const Grid = () => {
  return (
    <Layout tokenGroup="grid" notes="" />
  );
};

export const Spacing = () => {
  return (
    <Layout tokenGroup="spacing" notes="" />
  );
};

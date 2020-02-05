import React from 'react';
import Typography from './Typography';

export default {
  title: 'Design Tokens|Typography',
  component: Typography,
};

export const Fonts = () => {
  return (
    <Typography tokenGroup="font" heading="Fonts" description="Lorem ipsum dolor sit amet" />
  );
}

export const FontSizes = () => {
  return (
    <Typography tokenGroup="fontSize" heading="Font sizes" description="Lorem ipsum dolor sit amet" />
  );
}

import React from 'react';
import Typography from './Typography';

export default {
  title: 'Design Tokens|Typography',
  component: Typography,
};

export const Fonts = () => {
  return (
    <>
      <Typography brand="atkFonts" tokenGroup="font" heading="ATK fonts" description="Lorem ipsum dolor sit amet" />
      <Typography brand="ccoFonts" tokenGroup="font" heading="CCO fonts" description="Lorem ipsum dolor sit amet" />
      <Typography brand="cioFonts" tokenGroup="font" heading="CIO fonts" description="Lorem ipsum dolor sit amet" />
      <Typography brand="kidsFonts" tokenGroup="font" heading="Kids fonts" description="Lorem ipsum dolor sit amet" />
    </>
  );
}

export const FontSizes = () => {
  return (
    <Typography tokenGroup="fontSize" heading="Font sizes" description="Lorem ipsum dolor sit amet" />
  );
}

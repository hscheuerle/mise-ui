import React from 'react';
import Typography from './Typography';
import { ImportCode } from '../utils';

export default {
  title: 'Design Tokens|Typography',
  component: Typography,
};

export const Fonts = () => {
  return (
    <>
      <ImportCode>{`import { font } from '../../styles'`};</ImportCode>
      <Typography brand="atkFonts" tokenGroup="font" heading="ATK" description="Lorem ipsum dolor sit amet" />
      <Typography brand="ccoFonts" tokenGroup="font" heading="CCO" description="Lorem ipsum dolor sit amet" />
      <Typography brand="cioFonts" tokenGroup="font" heading="CIO" description="Lorem ipsum dolor sit amet" />
      <Typography brand="kidsFonts" tokenGroup="font" heading="Kids" description="Lorem ipsum dolor sit amet" />
    </>
  );
}

export const FontSizes = () => {
  return (
    <>
      <ImportCode>{`import { fontSize } from '../../styles'`};</ImportCode>
      <Typography tokenGroup="fontSize" heading="Font sizes" description="Lorem ipsum dolor sit amet" />
    </>
  );
}

export const LineHeights = () => {
  return (
    <>
      <ImportCode>{`import { lineHeight } from '../../styles'`};</ImportCode>
      <Typography tokenGroup="lineHeight" heading="Line heights" />
    </>
  );
}

export const LetterSpacings = () => {
  return (
    <>
      <ImportCode>{`import { letterSpacing } from '../../styles'`};</ImportCode>
      <Typography tokenGroup="letterSpacing" heading="Letter spacings" />
    </>
  );
}

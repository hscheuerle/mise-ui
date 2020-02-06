import React from 'react';
import styled from 'styled-components';
import Typography from './Typography';
import { color, fontSize, spacing } from '../../../styles';

const Import = styled.code`
  background: ${color.whiteSmoke};
  display: block;
  font-size: ${fontSize.sm};
  text-align: center;
  padding: ${spacing.sm};
`;

export default {
  title: 'Design Tokens|Typography',
  component: Typography,
};

export const Fonts = () => {
  return (
    <>
      <Import>{`import { font } from '../../styles'`};</Import>
      <Typography brand="atkFonts" tokenGroup="font" heading="ATK fonts" description="Lorem ipsum dolor sit amet" />
      <Typography brand="ccoFonts" tokenGroup="font" heading="CCO fonts" description="Lorem ipsum dolor sit amet" />
      <Typography brand="cioFonts" tokenGroup="font" heading="CIO fonts" description="Lorem ipsum dolor sit amet" />
      <Typography brand="kidsFonts" tokenGroup="font" heading="Kids fonts" description="Lorem ipsum dolor sit amet" />
    </>
  );
}

export const FontSizes = () => {
  return (
    <>
      <Import>{`import { fontSize } from '../../styles'`};</Import>
      <Typography tokenGroup="fontSize" heading="Font sizes" description="Lorem ipsum dolor sit amet" />
    </>
  );
}

export const LineHeights = () => {
  return (
    <>
      <Import>{`import { lineHeight } from '../../styles'`};</Import>
      <Typography tokenGroup="lineHeight" heading="Line heights" />
    </>
  );
}

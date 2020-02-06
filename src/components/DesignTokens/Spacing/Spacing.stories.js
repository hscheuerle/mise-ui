import React from 'react';
import styled from 'styled-components';
import Spacing from './Spacing';
import { color, fontSize, spacing } from '../../../styles';

const Import = styled.code`
  background: ${color.whiteSmoke};
  display: block;
  font-size: ${fontSize.sm};
  text-align: center;
  padding: ${spacing.sm};
`;

export default {
  title: 'Design Tokens|Spacing',
  component: Spacing,
};

export const All = () => {
  return (
    <>
      <Import>{`import { spacing } from '../../styles'`};</Import>
      <Spacing heading="Spacing values" description="Margins and padding values" />
    </>
  );
}

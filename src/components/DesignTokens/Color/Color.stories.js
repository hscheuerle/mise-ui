import React from 'react';
import styled from 'styled-components';
import Color from './Color';
import { color, fontSize, spacing } from '../../../styles';

const Import = styled.code`
  background: ${color.whiteSmoke};
  display: block;
  font-size: ${fontSize.sm};
  text-align: center;
  padding: ${spacing.sm};
`;

export default {
  title: 'Design Tokens|Colors',
  component: Color,
};

export const All = () => {
  return (
    <>
      <Import>{`import { color } from '../../styles'`};</Import>
      <Color tokenGroup="globalColor" heading="Global" description="Lorem ipsum dolor sit amet" />
      <Color tokenGroup="atkColor" heading="ATK" description="Lorem ipsum dolor sit amet" />
      <Color tokenGroup="ccoColor" heading="CCO" description="Lorem ipsum dolor sit amet" />
      <Color tokenGroup="cioColor" heading="CIO" description="Lorem ipsum dolor sit amet" />
      <Color tokenGroup="socialColor" heading="Social" description="Lorem ipsum" />
    </>
  );
}

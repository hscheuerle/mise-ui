import React from 'react';
import styled from 'styled-components';
import Colors from './Colors';
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
  component: Colors,
};

export const All = () => {
  return (
    <>
      <Import>{`import { color } from '../../styles'`};</Import>
      <Colors tokenGroup="globalColor" heading="Global colors" description="Lorem ipsum dolor sit amet" />
      <Colors tokenGroup="atkColor" heading="ATK Colors" description="Lorem ipsum dolor sit amet" />
      <Colors tokenGroup="ccoColor" heading="CCO Colors" description="Lorem ipsum dolor sit amet" />
      <Colors tokenGroup="cioColor" heading="CIO Colors" description="Lorem ipsum dolor sit amet" />
    </>
  );
}

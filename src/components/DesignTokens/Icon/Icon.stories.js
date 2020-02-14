import React from "react";
import * as Icons from './Icon';
import styled from 'styled-components';
import { color, font, fontSize, lineHeight, spacing } from '../../../styles';
import { ImportCode } from '../components';

export default {
  title: 'Design Tokens|Icons',
  component: Icons,
}

const IconTable = styled.div`
  padding: ${spacing.xsm};
  
  h2 {
    font: ${fontSize.sm}/${lineHeight.sm} ${font.pnb};
  }

  svg {
    max-width: 15rem;
  }
`;

export const AllIcons = () => {
  return (
    <>
      <ImportCode>{`import { iconName } from '../DesignTokens/Icon'`};</ImportCode>
      <IconTable>
        {
          Object.keys(Icons).map((icon) => (
            <div>
              <h2>{icon}</h2>
              {React.createElement(Icons[icon])}
            </div>
          ))
        }
      </IconTable>
    </>
  );
}



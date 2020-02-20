import React from "react";
import * as Icons from '../Icon';
import styled from 'styled-components';
import { font, fontSize, lineHeight, spacing } from '../../../styles';
import { ImportCode } from '../components';

export default {
  title: 'Design Tokens|Icons',
  component: Icons,
}

const IconTable = styled.div`
  padding: ${spacing.sm} ${spacing.lg};
  
  h2 {
    font: ${fontSize.sm}/${lineHeight.sm} ${font.pnb};
  }

  p {
    font: ${fontSize.sm}/${lineHeight.md} ${font.pnr};
  }

  svg {
    max-width: 2.5rem;
  }
`;

export const AllIcons = () => {
  return (
    <>
      <ImportCode>{`import { iconName } from '../DesignTokens/Icon'`};</ImportCode>
      <IconTable>
        <p>
          Icons are... pure svgs...? tbd lol
        </p>
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





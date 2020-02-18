import React from "react";
import * as Icons from '../Icon';
import styled from 'styled-components';
import { font, fontSize, lineHeight, spacing } from '../../../styles';
import { ImportCode } from '../components';
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
  title: 'Design Tokens|Icons',
  component: Icons,
  decorators: [withKnobs],
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
  const props = {
    fill: text("Fill", '#000'),
    stroke: text("Stroke", '#000'),
  }
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
              {React.createElement(Icons[icon], props)}
            </div>
          ))
        }
      </IconTable>
    </>
  );
}





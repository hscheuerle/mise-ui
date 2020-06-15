import React from 'react';
import styled from 'styled-components';
import { withKnobs, text } from '@storybook/addon-knobs/react';

import StyledLink from './index';

const Background = styled.div`
  background-color: ${props => props.color};
  padding: 1rem;
  position: absolute;
  left:0;
  top: 0;
  width: 100%;
  height: 100%;
`;


export default {
  title: 'Components|StyledLink',
  component: StyledLink,
  decorators: [storyFn => <Background color="#000">{storyFn()}</Background>, withKnobs],
};

export const NoDecoration = () => (
  <StyledLink>
    <a href="#">More From This Episode</a>
  </StyledLink>
);

export const hasDecoration = () => (
  <StyledLink
    displayDecoration={true}
  >
    <a href="#">More From This Episode</a>
  </StyledLink>
);

export const hasImageAndDecoration = () => (
  <StyledLink
    displayDecoration={true}
    imageAlt={text('Image alt text', '')}
    imageUrl={text('Image url', 'https://res.cloudinary.com/hksqkdlah/image/upload/s--bab2_EML--/c_scale,dpr_2.0,f_auto,h_172,q_auto:low,w_172/40784_sil-food-storage-containers-rubbermaid-brilliance-food-storage-container-large-96-cup-1991158')}
  >
    <a href="#">More From This Episode</a>
  </StyledLink>
)


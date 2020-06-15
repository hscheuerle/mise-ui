import React from 'react';
import { ThemeProvider } from 'styled-components';
import TestRenderer from 'react-test-renderer';
import 'jest-styled-components';

import StyledLink from '../index';
import Image from '../../Cards/shared/Image';

import breakpoints from '../../../styles/breakpoints';

const TestLink = (
  <a href="#">Link</a>
);

const basicStyledLink = {
  children: TestLink,
};

const linkWithDecoration = {
  displayDecoration: true,
  children: TestLink,
};

const linkWithImageAndDecoration = {
  children: TestLink,
  displayDecoration: true,
  imageAlt: '',
  imageUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/s--bab2_EML--/c_scale,dpr_2.0,f_auto,h_172,q_auto:low,w_172/40784_sil-food-storage-containers-rubbermaid-brilliance-food-storage-container-large-96-cup-1991158',
};

describe('StandardCard component', () => {
  const componentSetup = (props) => {
    const testRenderer = TestRenderer.create(
      <ThemeProvider
        theme={{ breakpoints }}
      >
        <StyledLink {...props}>
          { props.children }
        </StyledLink>
      </ThemeProvider>,
    );
    return testRenderer.root;
  };

  it('it renders a basic styled link with no decoration', () => {
    const testInstance = componentSetup(basicStyledLink);
    expect(testInstance.findByType(StyledLink).props.displayDecoration).toBe(false);
  });

  it('it renders with a decoration', () => {
    const testInstance = componentSetup(linkWithDecoration);
    // eslint-disable-next-line max-len
    expect(testInstance.findByType(StyledLink).props.displayDecoration).toBe(linkWithDecoration.displayDecoration);
  });

  it('Renders with an image and decoration', () => {
    const testInstance = componentSetup(linkWithImageAndDecoration);
    // eslint-disable-next-line max-len
    expect(testInstance.findByType(Image) && testInstance.findByType(StyledLink).props.displayDecoration).toBe(linkWithImageAndDecoration.displayDecoration);
  });
});

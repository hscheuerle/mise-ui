import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, font, fontSize, spacing } from '../../styles';
import Image from '../Cards/shared/Image';

const StyledLinkWrapper = styled.div`
  align-items: center;
  display: flex;

  img {
    height: 6rem;
    width: 6rem;
  }

  span {
    color: ${color.white};
    font-size: ${fontSize.sm};
    margin: 4.5px ${spacing.xxsm} 0 ${spacing.xsm};
  }

  a {
    background-image: linear-gradient(transparent 91%, ${color.turquoise} 91%);
    color: ${color.white};
    cursor: pointer;
    font: ${fontSize.sm} ${font.pnb};
    text-decoration: none;
    transition: background 0.2s ease-in-out 0s;
    mix-blend-mode: lighten;

    &:hover {
      background-color: ${color.darkerMint};
    }
  }
`;

const StyledLink = ({
  children,
  displayDecoration,
  imageAlt,
  imageUrl,
}) => (
  <StyledLinkWrapper>
    {
      imageUrl ? (
        <Image
          aria-hidden="true"
          imageAlt={imageAlt}
          imageUrl={imageUrl}
        />
      ) : null
    }
    {displayDecoration ? <span>⠇</span> : null }
    {children}
  </StyledLinkWrapper>
);

StyledLink.propTypes = {
  children: PropTypes.node.isRequired,
  displayDecoration: PropTypes.bool,
  imageAlt: PropTypes.string,
  imageUrl: PropTypes.string,
};

StyledLink.defaultProps = {
  displayDecoration: false,
  imageAlt: '',
  imageUrl: '',
};

export default StyledLink;

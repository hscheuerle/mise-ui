import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { color, font, fontSize, lineHeight } from '../../../../styles';

const StyledCtaLink = styled.a`
  color: ${color.tomato};
  font: 1.2rem/${lineHeight.sm} ${font.pnb};
  transition: color .1s ease-in-out;

  &:hover {
    color: ${color.rust};
  }

  ${breakpoint('tablet')`
    font-size: ${fontSize.md};
  `}
`;

const CtaLink = ({ ctaText, ctaUrl, onClick }) => (
  <StyledCtaLink
    aria-label={`${ctaText} (opens in new window)`}
    href={ctaUrl}
    target="_blank"
    onClick={onClick}
  >
    {ctaText}
  </StyledCtaLink>
);

CtaLink.propTypes = {
  ctaText: PropTypes.string.isRequired,
  ctaUrl: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

CtaLink.defaultProps = {
  onClick: null,
};

export default CtaLink;

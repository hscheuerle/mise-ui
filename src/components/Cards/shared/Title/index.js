import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { font, fontSize, lineHeight, spacing } from '../../../../styles';

const StyledTitle = styled.h3`
  margin-bottom: ${spacing.xsm};
  font: ${fontSize.md}/${lineHeight.sm} ${font.pnb};

  ${breakpoint('lg')`
    font-size: ${fontSize.xl};
  `}
`;

/**

A title is the primary identifier for a piece of content. All cards always have a
title.

*/

const Title = ({ className, title }) => (
  <StyledTitle
    className={className}
  >
    {title}
  </StyledTitle>
);

Title.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
};

Title.defaultProps = {
  className: null,
};

export default Title;

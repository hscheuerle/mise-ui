import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { font, fontSize, lineHeight, spacing } from '../../../../styles';

const StyledTitle = styled.h3`
  margin-right: ${spacing.xxsm};
  margin-bottom: ${spacing.xsm};
  font: ${fontSize.md}/${lineHeight.sm} ${font.pnb};

  ${breakpoint('tablet')`
    font-size: ${fontSize.xl};
  `}
`;

const Title = ({ title }) => (
  <StyledTitle>{title}</StyledTitle>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { color, font, fontSize, lineHeight, spacing, withThemes } from '../../styles';
import Filter from '../DesignTokens/Icon/svgs/Filter';

const StyledFilterButtonTheme = {
  default: css`
    color: ${color.eclipse};
    font: ${fontSize.md}/${lineHeight.sm} ${font.pnb};
    padding: ${spacing.xsm};
  `,
  kidsSearch: css`
    color: ${color.black};
    font: 2.2rem/${lineHeight.sm} ${font.cwf};
    letter-spacing: 1.2px;
    padding-top: 0;
    text-transform: lowercase;
  `,
};

const StyledFilterButton = styled.button`
  ${withThemes(StyledFilterButtonTheme)}
`;

const StyledFilter = styled(Filter)`
  height: 1rem;
  margin-left: ${spacing.xsm};
  width: 1.7rem;
`;

const FilterButton = ({ className, onClick }) => (
  <StyledFilterButton
    className={className}
    onClick={onClick}
  >
    Filter
    <StyledFilter />
  </StyledFilterButton>
);

FilterButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

FilterButton.defaultProps = {
  className: null,
  onClick: null,
};

export default FilterButton;

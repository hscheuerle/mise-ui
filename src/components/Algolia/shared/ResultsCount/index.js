import PropTypes from 'prop-types';
import React from 'react';
import breakpoint from 'styled-components-breakpoint';
import styled, { css } from 'styled-components';
import { connectStats } from 'react-instantsearch-dom';

import {
  color,
  font,
  fontSize,
  letterSpacing,
  lineHeight,
  spacing,
  withThemes,
} from '../../../../styles';

const StatsWrapperTheme = {
  default: css`
    color: ${color.eclipse};
    font: ${fontSize.md}/${lineHeight.sm} ${font.pnb};
    margin-bottom: ${spacing.xsm};

    ${breakpoint('md')`
      float: left;
    `}
  `,
  kids: css`
    font: ${fontSize.xl}/${lineHeight.sm} ${font.cwf};
    letter-spacing: ${letterSpacing.sm};
    text-transform: lowercase;

    ${breakpoint('md')`
      float: none;
    `}
  `,
};
const StatsWrapper = styled.p`
  ${withThemes(StatsWrapperTheme)}
`;

export const Stats = ({ nbHits }) => (
  <StatsWrapper className="search-results-count">
    {`${nbHits.toLocaleString()} Result${nbHits !== 1 ? 's' : ''}`}
  </StatsWrapper>
);

Stats.propTypes = {
  nbHits: PropTypes.number.isRequired,
};

const CustomStats = connectStats(Stats);

export default () => <CustomStats />;

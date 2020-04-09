import PropTypes from 'prop-types';
import React from 'react';
import breakpoint from 'styled-components-breakpoint';
import styled from 'styled-components';
import { connectStats } from 'react-instantsearch-dom';

import { color, font, fontSize, lineHeight, spacing } from '../../styles';

const StatsWrapper = styled.p`
  color: ${color.eclipse};
  font: ${fontSize.md}/${lineHeight.sm} ${font.pnb};
  margin-bottom: ${spacing.xsm};

  ${breakpoint('md')`
    float: left;
  `}
`;

const Stats = ({ nbHits }) => (
  <StatsWrapper className="search-results-count">
    {`${nbHits.toLocaleString()} Result${nbHits !== 1 ? 's' : ''}`}
  </StatsWrapper>
);

Stats.propTypes = {
  nbHits: PropTypes.number.isRequired,
};

const CustomStats = connectStats(Stats);

export default () => <CustomStats />;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color } from '../../styles';
import { ATKBrandIcon, CIOBrandIcon, CCOBrandIcon } from './svgs';

const StyledBadge = styled.div`
  width: 2.5rem;
  height: 2.5rem;
`

const determineType = (type) => ({
  "atk": <ATKBrandIcon />,
  "cio": <CIOBrandIcon />,
  "cco": <CCOBrandIcon />,
})[type]

/**
 * Badges exist for brand logos (cc, ci, atk, kids) and also other destination identities like shop.
 * <br>
 * Logo badges appear on cards in mixed brand scenarios, like search and do not appear when only one brand’s content is showing
 *  Badges on a card do not go anywhere, but the badges that appear in the browse bar *are* interactive and function as facets
 */
export function Badge({
  type
}) {
  return (
    <StyledBadge>
      {determineType(type)}
    </StyledBadge>
  );
}

Badge.propTypes = {
  type: PropTypes.oneOf(['atk', 'cio', 'cco'])
}
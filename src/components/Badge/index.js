import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color } from '../../styles';
import { ATKBrandIcon, CIOBrandIcon, CCOBrandIcon, KidsBrandIcon } from './svgs';

const StyledBadge = styled.div`
  width: 2.5rem;
  height: 2.5rem;
`

const determineType = (type, fill) => ({
  "atk": <ATKBrandIcon fill={fill} />,
  "cio": <CIOBrandIcon fill={fill} />,
  "cco": <CCOBrandIcon fill={fill} />,
  "kids": <KidsBrandIcon fill={fill} />,
})[type]

/**
 * Badges exist for brand logos (cc, ci, atk, kids) and also other destination identities like shop.
 * <br>
 * Logo badges appear on cards in mixed brand scenarios, like search and do not appear when only one brand’s content is showing
 *  Badges on a card do not go anywhere, but the badges that appear in the browse bar *are* interactive and function as facets
 */
export function Badge({
  className,
  fill,
  type,
}) {
  return (
    <StyledBadge className={className}>
      {determineType(type, fill)}
    </StyledBadge>
  );
}

Badge.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
  type: PropTypes.oneOf(['atk', 'cio', 'cco', 'kids']).isRequired,
}

Badge.defaultProps = {
  className: '',
  fill: `${color.transparentBlack}`,
}

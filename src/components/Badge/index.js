import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color } from '../../styles';
import {
  ATKBrandIcon,
  CIOBrandIcon,
  CCOBrandIcon,
  KidsBrandIcon,
  SchoolBrandIcon,
  ShopBrandIcon,
} from './svgs';

const StyledBadge = styled.svg`
  width: 2.5rem;
  height: 2.5rem;
`;

const determineType = (type, fill) => {
  const types = {
    atk: ATKBrandIcon,
    cio: CIOBrandIcon,
    cco: CCOBrandIcon,
    kids: KidsBrandIcon,
    school: SchoolBrandIcon,
    shop: ShopBrandIcon,
  };
  const El = types[type];
  return El && <El fill={fill} />;
};

/**
 * Badges exist for brand logos (cc, ci, atk, kids) and also other destination
 * identities like shop.
 * <br>
 * Logo badges appear on cards in mixed brand scenarios, like search, and also
 * in the case that only one brand’s content is showing like in CI recipe
 * browse.

 <br>
 .
 * <b>Badges on a card</b> are not interactive and do not go anywhere.
 <br>
 * <b>Badges on search site filters</b> are interactive and function as facets,
 * surfacing content belonging to that brand and do have a hover state.
 */

const Badge = ({
  className,
  fill,
  type,
}) => (
  <StyledBadge
    role="img"
    aria-label={`${type}`.toUpperCase()}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 25 25"
  >
    {determineType(type, fill)}
  </StyledBadge>
);

Badge.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
  type: PropTypes.oneOf(['atk', 'cio', 'cco', 'kids', 'school', 'shop']).isRequired,
};

Badge.defaultProps = {
  className: '',
  fill: `${color.transparentBlack}`,
};

export default Badge;

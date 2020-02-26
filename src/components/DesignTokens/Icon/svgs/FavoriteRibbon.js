import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color } from '../../../../styles';

const StyledFavoriteRibbon = styled.svg`
  cursor: pointer;

  [class*="ribbon"] {
    fill: transparent;
    transition: .1s all ease-in-out;
  }

  &:hover {
    [class*="ribbon"] {
      fill: ${color.eclipse};
    }

    [class*="vertical-line"],
    [class*="horizontal-line"] {
      stroke: ${color.white};
    }
  }
`;

const FavoriteRibbon = ({
  ariaLabel,
  className,
  role,
}) => {
  return (
    <StyledFavoriteRibbon
      viewBox="0 0 17 24"
      className={className}
      aria-label={ariaLabel}
      role={role}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g strokeWidth="2">
        <path className={`${className}__ribbon`} d="M8.483 16.809L1 22V1h15v21z" fill="#3d3d3d" stroke="#3d3d3d" strokeMiterlimit="10"/>
        <path className={`${className}__vertical-line`} stroke="#fff" strokeLinecap="round" d="M8.5 4v10"/>
        <path className={`${className}__horizontal-line`} stroke="#fff" strokeLinecap="round" d="M3.5 9h10"/>
      </g>
    </StyledFavoriteRibbon>
  )
}

FavoriteRibbon.propType = {
  className: PropTypes.string,
  /** Provides information to screenreaders about what the icon's purpose is */
  role: PropTypes.oneOf(['button', 'img']).isRequired,
  /** Labels the element for screen readers in cases where a text label is not included */
  ariaLabel: PropTypes.string.isRequired,
}

export default FavoriteRibbon;

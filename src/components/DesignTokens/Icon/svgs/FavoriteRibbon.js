import React from 'react';
import PropTypes from 'prop-types';

const FavoriteRibbon = ({
  ariaLabel,
  className,
  role,
}) => {
  return (
    <svg
      className={className}
      viewBox="0 0 17 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="#fff"
      stroke="#3d3d3d"
      role={role}
      aria-label={ariaLabel}
    >
    <g transform="translate(1 1)">
      <path
        d="M7.483 15.809L0 21V0h15v21z"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
    </g>
  </svg>
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

import React from 'react';
import PropTypes from 'prop-types';

const FavoriteRibbon = ({className}) => {
  return (
    <svg
      className={className}
      viewBox="0 0 12 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="#fff"
      stroke="#000"
      role="img"
      aria-label="favorite"
    >
    <path d="M5.99 11.54L1 15V1h10v14z" />
  </svg>
  )
}

FavoriteRibbon.propType = {
  className: PropTypes.string,
}

export default FavoriteRibbon;

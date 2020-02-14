import React from 'react';
import PropTypes from 'prop-types';

const FavoriteRibbon = ({fill, stroke}) => {
  return (
    <svg
      viewBox="0 0 12 16"
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      stroke={stroke}
    >
    <path d="M5.99 11.54L1 15V1h10v14z" />
  </svg>
  )
}

FavoriteRibbon.propType = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
}

FavoriteRibbon.defaultProps = {
  fill: 'none',
  stroke: '#000',
}

export default FavoriteRibbon;
import React from 'react';
import PropTypes from 'prop-types';
import { color } from '../../../../styles';

const SearchIcon = ({ fill }) => (
  <svg
    className="search-icon"
    role="img"
    aria-label="search"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 30 30"
  >
    <path
      fill={fill}
      d="M3.8 11.2c0-4.1 3.4-7.5 7.5-7.5s7.5 3.4 7.5 7.5-3.4 7.5-7.5 7.5-7.5-3.3-7.5-7.5m25.5 15.4l-8.9-8.9c1.3-1.9 2.1-4.2 2.1-6.5C22.5 5 17.5 0 11.2 0 5 0 0 5 0 11.2s5 11.2 11.2 11.2c2.3 0 4.6-.7 6.5-2.1l8.9 8.9c.7.8 2 .9 2.8.1.8-.7.8-1.9-.1-2.7"
    />
  </svg>
);

SearchIcon.propTypes = {
  fill: PropTypes.string,
};

SearchIcon.defaultProps = {
  fill: `${color.eclipse}`,
};

export default SearchIcon;

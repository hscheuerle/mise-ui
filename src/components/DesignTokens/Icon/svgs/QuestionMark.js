import React from 'react';
import PropTypes from 'prop-types';
import { color } from '../../../../styles';

const QuestionMark = ({ fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 18 18"
    role="img"
    aria-hidden="true"
    focusable="false"
  >
    <g transform="translate(-731 -376)"><circle cx="740" cy="385" r="9" fill={fill} /><path d="M738.3 385.3c0-1.9 2.4-2.1 2.4-3.2 0-.5-.4-.9-1.3-.9-.8 0-1.5.4-2 1l-1.3-1.5c.8-1 2.1-1.6 3.5-1.6 2.1 0 3.3 1 3.3 2.5 0 2.3-2.7 2.5-2.7 3.9 0 .3.1.5.3.7l-1.8.5c-.2-.3-.4-.8-.4-1.4zm0 3.6c0-.7.6-1.3 1.3-1.3.7 0 1.3.6 1.3 1.3 0 .7-.6 1.3-1.3 1.3-.7 0-1.3-.6-1.3-1.3z" fill="#fff" /></g>
  </svg>
);

QuestionMark.propTypes = {
  fill: PropTypes.string,
};

QuestionMark.defaultProps = {
  fill: `${color.eclipse}`,
};

export default QuestionMark;

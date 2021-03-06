import PropTypes from 'prop-types';
import React from 'react';

const ShopBrandIcon = ({ fill }) => (
  <>
    <circle cx="12.5" cy="12.5" r="12.5" fill={fill} />
    <path fill="#fff" d="M10.919 19.143H7.082a.52.52 0 01-.511-.511V11.86a2.08 2.08 0 002.661-.581 2.087 2.087 0 001.664.835.773.773 0 00.1 0 .92.92 0 00.109 0h.12a2.077 2.077 0 001.567-.714l.017-.017.017-.023c0 .006.008.008.008.013a.05.05 0 01.013.011.01.01 0 00.011.011 2.066 2.066 0 001.564.716h.2l.023-.006.029.008h.08a2.075 2.075 0 001.658-.835 2.1 2.1 0 001.664.835 2.175 2.175 0 00.691-.116v6.635a.51.51 0 01-.51.511h-3.544v-5.01a.542.542 0 00-.542-.542H11.46a.542.542 0 00-.542.542v5.012z" />
    <g fill="#fff">
      <path d="M5.5 9.497a2.072 2.072 0 003.733 1.236 2.069 2.069 0 001.663.833h.331a2.071 2.071 0 001.6-.754 2.068 2.068 0 001.6.753H14.756a2.073 2.073 0 001.663-.835 2.081 2.081 0 001.659.834 2.072 2.072 0 002.043-2.424H5.53a2.073 2.073 0 00-.03.357z" data-name="Path 157" />
      <path d="M19.989 8.7l-1.022-2.457a.4.4 0 00-.366-.245h-2.648a.4.4 0 00-.055 0h-.015a.4.4 0 00-.073-.007H9.839a.393.393 0 01-.142 0H7.048a.4.4 0 00-.366.245L5.66 8.692v.01h14.333z" data-name="Path 158" />
    </g>
  </>
);

ShopBrandIcon.propTypes = {
  fill: PropTypes.string.isRequired,
};

export default ShopBrandIcon;

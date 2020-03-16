import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledImage = styled.img`
  max-width: 100%;
`;

const Image = ({ imageAlt, imageUrl }) => (
  <StyledImage
    alt={imageAlt}
    src={imageUrl}
  />
);

Image.propTypes = {
  imageAlt: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default Image;

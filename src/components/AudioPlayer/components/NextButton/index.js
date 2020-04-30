import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledNextButton = styled.button`
  height: 1.8rem;
  position: relative;
  transition: all 0.2s linear;
  width: 1.8rem;

  &::after {
    content: url("data:image/svg+xml; utf8, <svg width='18px' height='18px' viewBox='0 0 18 18' xmlns='http://www.w3.org/2000/svg'><polygon points='7.875 7.17142857 0 1 0 17 7.875 10.8285714 7.875 17 18 9 7.875 1' fill='white'></polygon></svg>");
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    max-width: 100%;
  }

  &:hover {
    transform: scale(1.2);
  }
`;

const NextButton = ({ onClick }) => (
  <StyledNextButton
    className="next-button"
    data-diff="1"
    onClick={onClick}
    type="button"
  />
);

NextButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default NextButton;

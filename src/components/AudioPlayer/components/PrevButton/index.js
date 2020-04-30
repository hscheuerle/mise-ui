import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledPrevButton = styled.button`
  height: 1.8rem;
  position: relative;
  transition: all 0.2s linear;
  width: 1.8rem;

  &::after {
    content: url("data:image/svg+xml; utf8, <svg width='18px' height='18px' viewBox='0 0 18 18' xmlns='http://www.w3.org/2000/svg'><polygon points='10.125 1 0 9 10.125 17 10.125 10.8285714 18 17 18 1 10.125 7.17142857' fill='white'></polygon></svg>");
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  &:hover {
    transform: scale(1.2);
  }
`;

const PrevButton = ({ onClick }) => (
  <StyledPrevButton
    className="prev-button"
    data-diff="-1"
    onClick={onClick}
    type="button"
  />
);

PrevButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default PrevButton;

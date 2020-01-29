import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, font } from '../../styles';

const StyledSticker = styled.div`
  background-color: ${props => props.theme === 'cio' ? 'rgb(93, 161, 29)': color.denim};
  border-radius: 10px;
  padding: 0.5rem 1rem;
  margin: 1rem auto;
  display: inline-block;

  span {
    color: ${color.white};
    font: 14px ${props => props.theme === 'cio' ? font.pnr : font.mwr};
  }
`;

export function Sticker({
  children,
  ...props
}) {
  return (
    <StyledSticker>
      <span>
        {children}
      </span>
    </StyledSticker>
  )
}

Sticker.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.string.isRequired,
};


Sticker.defaultProps = {
  theme: 'cio',
};
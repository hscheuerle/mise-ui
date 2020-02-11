import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, font, fontSize, letterSpacing, spacing } from '../../styles';

const stickerHeight = '1.2rem';

const StyledSticker = styled.span`
  background-color: ${props => props.isPriority ? color.tomato : color.black};
  border-radius: 0.5rem;
  color: ${color.white};
  display: inline-block;
  font: ${fontSize.xxsm}/${stickerHeight} ${font.pnb};
  height: ${stickerHeight};
  letter-spacing: ${letterSpacing.sm};
  margin-bottom: ${spacing.xsm};
  margin-left: ${spacing.xsm};
  padding-left: ${spacing.xsm};
  padding-right: ${spacing.xsm};
  text-transform: uppercase;
  white-space: nowrap;
`;

export function Sticker({
  text,
  isPriority,
}) {
  return (
    <StyledSticker
      isPriority={isPriority}
    >
      {text}
    </StyledSticker>
  )
}

Sticker.propTypes = {
  text: PropTypes.string,
  isPriority: PropTypes.bool,
};

Sticker.defaultProps = {
  text: '',
  isPriority: false,
};

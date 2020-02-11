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

/**
  * A sticker surfaces ‘make or break’ information in order to help the user
  make a smarter decision between cards in the grid. Examples: “vegetarian” or
  “gluten free” or “popular” “editor’s pick”

  * It is not interactive, only informative, so there is no hover state

  * There are two types of stickers, priority and basic. Priority stickers are
  * reserved for messages like “new” or “price drop”, and have a red (`tomato`)
  * background. Basic stickers have a `transparentBlack` background.

  * It can have or not have an icon (collections icon, video icon)

  * A desktop card can have two stickers, max; one sticker max on mobile

  * Text does not wrap

  * Line height of the text and the height of pill should both be set to 1.2rem to vertically center text.
  */

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
  /** The text inside the sticker. Must be less than N characters. */
  text: PropTypes.string,
  /** True if it is a priority sticker, false if it is a basic sticker */
  isPriority: PropTypes.bool,
};

Sticker.defaultProps = {
  text: '',
  isPriority: false,
};

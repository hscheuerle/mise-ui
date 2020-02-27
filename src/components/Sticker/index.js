import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, font, fontSize, letterSpacing, spacing } from '../../styles';
import { Collection, VideoPlay } from '../DesignTokens/Icon';

const stickerHeight = '1.8rem';

const StyledSticker = styled.span`
  display: inline-flex;
  align-items: center;
  margin-bottom: ${spacing.xsm};
  margin-left: ${spacing.xsm};
  padding-left: ${spacing.xsm};
  padding-right: ${spacing.xsm};
  height: ${stickerHeight};
  border-radius: 0.6rem;
  background-color: ${props => props.isPriority ? color.tomato : color.transparentBlack};
  color: ${color.white};
  font: ${fontSize.xsm}/${stickerHeight} ${font.pnb};
  letter-spacing: ${letterSpacing.sm};
  text-transform: uppercase;
  white-space: nowrap;

  svg {
    margin-right: ${spacing.xxsm};
    width: 1rem;
    height: 1rem;
    max-height: 60%;
  }
`;

const determineIconType = (iconType) => ({
  "collection": <Collection fill={`${color.white}`} />,
  "play": <VideoPlay fill={`${color.white}`} />,
})[iconType]


/**

  A sticker surfaces ‘make or break’ information in order to help the user
  make a smarter decision between cards in the grid. Examples: “vegetarian” or
  “gluten free” or “popular” “editor’s pick”

<br>

-----

<br>

### Notes

Stickers are not interactive, only informative, so there is no hover state.

There are two types of stickers, priority and basic. Basic stickers have a `transparentBlack` background. Priority stickers are reserved for messages like “new” or “price drop”, and have a red (`tomato`) background.

It can have or not have an icon (collections icon, video icon).

A desktop card can have two stickers, max; one sticker max on mobile

Text does not wrap

Line height of the text and the height of pill should both be set to `1.5rem` to vertically center text.

Stickers scale down to a smaller size (`height: 1.2rem;` `font-size: 0.8rem;`) for mobile for most types of cards.

<br>

-----

<br>

*/

const Sticker = ({
  className,
  text,
  iconType,
  isPriority,
}) => (
  <StyledSticker
    className={className}
    isPriority={isPriority}
  >
    {determineIconType(iconType)}
    <span>{text}</span>
  </StyledSticker>
);

Sticker.propTypes = {
  /** className must be passed down to apply additional styles in parent
  components, such as for resizing */
  className: PropTypes.string,
  /** Stickers can optionally include one icon */
  iconType: PropTypes.oneOf(['collection', 'play']),
  /** The text inside the sticker. Must be less than N characters. */
  text: PropTypes.string,
  /** True if it is a priority sticker, false if it is a basic sticker */
  isPriority: PropTypes.bool,
};

Sticker.defaultProps = {
  className: '',
  iconType: null,
  text: '',
  isPriority: false,
};

export default Sticker;

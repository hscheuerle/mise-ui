import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { color, font, fontSize, lineHeight, spacing } from '../../styles';
import { Badge } from '../Badge';
import Sticker from '../Sticker';
import { FavoriteRibbon, Lock } from '../DesignTokens/Icon';

const StyledCard = styled.article`
  position: relative;
  width: 16.2rem;
  color: ${color.eclipse};

  ${breakpoint('tablet')`
    width: 27.2rem;
  `}
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 16.2rem;

  ${breakpoint('tablet')`
    height: 27.2rem;
  `}
`;

const Title = styled.h3`
  margin-bottom: ${spacing.xxsm};
  font: ${fontSize.md}/${lineHeight.sm} ${font.pnb};

  ${breakpoint('tablet')`
    font-size: ${fontSize.xl};
  `}
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: ${spacing.xsm};
  padding-bottom: ${spacing.xsm};
`;

const StyledFavoriteRibbon = styled(FavoriteRibbon)`
  flex-shrink: 0;
  margin-top: ${spacing.xxsm};
  stroke: currentColor;
  fill: transparent;
`;

const Attributions = styled.p`
  font: 1.2rem/${lineHeight.md} ${font.pnr};
  margin-bottom: ${spacing.sm};

  ${breakpoint('tablet')`
    font-size: ${fontSize.sm};
  `}
`;

const StyledLock = styled(Lock)`
  width: 0.8rem;
  margin-right: ${spacing.xsm};
`;

const StickerGroup = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
`;

const stickerHeightMobile = '1.2rem';
const StyledSticker = styled(Sticker)`

  ${breakpoint('mobile', 'tablet')`
    border-radius: 0.5rem;
    line-height: ${stickerHeightMobile};
    height: ${stickerHeightMobile};
    font-size: ${fontSize.xxsm};
  `}
`;

const StyledBadge = styled(Badge)`
  position: absolute;
  top: ${spacing.xsm};
  left: ${spacing.xsm};
`;

export function Card({
  attributions,
  badgeType,
  className,
  hasImage,
  isAuthenticated,
  hasAccess,
  hasStickers,
  imageAlt,
  title,
}) {
  return (
    <StyledCard>
      <ImageWrapper>
        { hasImage ? (
          <img src="https://placekitten.com/272/272" alt={imageAlt} />
        ) : null }
        <StyledBadge className={className} type={badgeType} />
        { hasStickers ? (
          <StickerGroup>
            <StyledSticker className={className} isPriority text='new' />
            <StyledSticker className={className} iconType="collection" text='popular' />
          </StickerGroup>
        ) : null }
      </ImageWrapper>

      <TextWrapper>
        <Title>{title}</Title>
        { isAuthenticated ? (
          <StyledFavoriteRibbon
            ariaLabel="Save to favorites"
            className={className}
            role="button"
          />
        ) : null }
      </TextWrapper>
      <div className="attributions-wrapper">
        <Attributions>
          { !hasAccess ? <StyledLock className={className} fill={`${color.nobel}`} /> : null }
          {attributions}
        </Attributions>
      </div>
    </StyledCard>
  )
}

Card.propTypes = {
  attributions: PropTypes.string,
  badgeType: PropTypes.oneOf(['atk', 'cco', 'cio', 'kids']).isRequired,
  //* Is the user logged in? */
  isAuthenticated: PropTypes.bool,
  //* Does the user have access to the card content? */
  hasAccess: PropTypes.bool,
  hasStickers: PropTypes.bool,
  imageAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

Card.defaultProps = {
  attributions: '',
  hasStickers: false,
};

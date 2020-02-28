import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { color, font, fontSize, lineHeight, spacing } from '../../styles';
import { Badge } from '../Badge';
import Sticker from '../Sticker';
import { Cookbook, FavoriteRibbon, Lock } from '../DesignTokens/Icon';

const StyledCard = styled.article`
  position: relative;
  padding-bottom: ${spacing.xlg};
  width: 16.2rem;
  color: ${color.eclipse};

  ${breakpoint('tablet')`
    width: 27.2rem;
  `}
`;

const ImageWrapper = styled.div`
  position: relative;
  margin-bottom: ${spacing.xsm};
  height: 16.2rem;

  ${breakpoint('tablet')`
    height: 27.2rem;
  `}
`;

const Title = styled.h3`
  margin-right: ${spacing.xxsm};
  margin-bottom: ${spacing.xsm};
  font: ${fontSize.md}/${lineHeight.sm} ${font.pnb};

  ${breakpoint('tablet')`
    font-size: ${fontSize.xl};
  `}
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const StyledFavoriteRibbon = styled(FavoriteRibbon)`
  flex-shrink: 0;
  margin-top: ${spacing.xxsm};
  stroke: currentColor;
  fill: transparent;
`;

const Attributions = styled.div`
  font: ${fontSize.sm}/${lineHeight.md} ${font.pnr};
  margin-bottom: ${spacing.xsm};
  text-transform: capitalize;

  & > * {
    margin-right: ${spacing.xsm};
  }

  .attributions__content-type-wrapper {
    display: inline-block;
  }

  ${breakpoint('mobile', 'tablet')`
    font-size: 1.2rem;

    & > span {
      display: block;
    }

    .attributions__bullet {
      display: none;
    }
  `}

  ${breakpoint('tablet')`
    font-size: ${fontSize.sm};
  `}
`;

const StyledLock = styled(Lock)`
  display: inline;
  margin-right: ${spacing.xxsm};
  width: 0.6rem;

  ${breakpoint('tablet')`
    margin-right: ${spacing.xsm};
    width: 0.8rem;
  `}
`;

const StyledCookbook = styled(Cookbook)`
  margin-right: ${spacing.xsm};
  width: 1.6rem;
`;

const Cta = styled.a`
  color: ${color.tomato};
  font: 1.2rem/${lineHeight.sm} ${font.pnb};
  transition: color .1s ease-in-out;

  &:hover {
    color: ${color.rust};
  }

  ${breakpoint('tablet')`
    font-size: ${fontSize.md};
  `}
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
  contentType,
  commentCount,
  cta,
  ctaUrl,
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
      <TitleWrapper>
        <Title>{title}</Title>
        { isAuthenticated ? (
          <StyledFavoriteRibbon
            ariaLabel="Save to favorites"
            className={className}
            role="button"
          />
        ) : null }
      </TitleWrapper>
      <Attributions>
        <div className="attributions__content-type-wrapper">
          { !hasAccess ? <StyledLock className="lock-icon" fill={`${color.nobel}`} /> : null }
          { contentType === "Cookbook Collection" ? (
            <StyledCookbook className={className} />
          ) : null }
          <span>{contentType}</span>
        </div>
        { commentCount > 0 ? (
          <>
            <span className="attributions__bullet">•</span>
            <span>{commentCount} {commentCount === 1 ? 'Comment' : 'Comments' }</span>
          </>
        ) : null }
      </Attributions>
      { cta ? (
        <Cta
          href={ctaUrl}
          target="_blank"
          title={`${title}. ${cta} (opens in new window)`}
        >
          {cta}
        </Cta>
      ) : null }
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
  contentType: PropTypes.string,
  commentCount: PropTypes.number,
  cta: PropTypes.string,
  ctaUrl: PropTypes.string,
  hasStickers: PropTypes.bool,
  imageAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

Card.defaultProps = {
  attributions: '',
  hasStickers: false,
};

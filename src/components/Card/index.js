import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, font, fontSize, lineHeight, spacing } from '../../styles';
import { Sticker } from '../Sticker';

const StyledCard = styled.article`
  color: ${color.eclipse};
  position: relative;
  width: 27.2rem;
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 27.2rem;
`;

const TextWrapper = styled.div`
  padding: ${spacing.xsm};
`;

const Title = styled.h3`
  font: ${fontSize.xl}/${lineHeight.sm} ${font.pnb};
  margin-bottom: ${spacing.xxsm};
`;

const Attributions = styled.p`
  font: ${fontSize.sm}/${lineHeight.sm} ${font.pnr};
`;

const StickerGroup = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
`;

export function Card({
  attributions,
  className,
  hasStickers,
  imageAlt,
  title,
}) {
  return (
    <StyledCard hasSticker={hasStickers}>
      <ImageWrapper>
        <img src="https://placekitten.com/272/272" alt={imageAlt} />
        { hasStickers ? (
          <StickerGroup>
            <Sticker className={className} isPriority text='new' />
            <Sticker className={className} text='popular' />
          </StickerGroup>
        ) : null }
      </ImageWrapper>
      <TextWrapper>
        <Title>{title}</Title>
        <Attributions>{attributions}</Attributions>
      </TextWrapper>
    </StyledCard>
  )
}

Card.propTypes = {
  attributions: PropTypes.string,
  hasStickers: PropTypes.bool,
  imageAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

Card.defaultProps = {
  attributions: '',
  hasStickers: false,
};

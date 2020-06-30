// import breakpoint from 'styled-components-breakpoint';
import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

import CardCarousel from '../CardCarousel';
import { color, font, fontSize, lineHeight, spacing, withThemes } from '../../../styles';


const IntroTheme = {
  default: css`
    font: italic ${fontSize.md}/1 ${font.mwr};
    padding-bottom: ${spacing.sm};
  `,
  dark: css``,
};

const Intro = styled.h4.attrs({
  className: 'document-list-carousel__intro',
})`${withThemes(IntroTheme)}`;

const TitleTheme = {
  default: css`
    font: ${fontSize.xl}/1 ${font.pnb};
    padding: 0 0 ${spacing.xsm};
  `,
  dark: css``,
};

const Title = styled.h3.attrs({
  className: 'document-list-carousel__title',
})`${withThemes(TitleTheme)}`;

const SubTitleTheme = {
  default: css`
    font: ${fontSize.sm}/${lineHeight.lg} ${font.pnr};
    letter-spacing: 2.2px;
    text-transform: uppercase;
  `,
  dark: css``,
};

const SubTitle = styled.h2.attrs({
  className: 'document-list-carousel__subtitle',
})`${withThemes(SubTitleTheme)}`;

const DocumentListCarouselTheme = {
  default: css`
    color: ${color.eclipse};
  `,
  dark: css`
    color: ${color.white};

    .card-carousel {
      margin-top: -1.8rem;
    }
  `,
};

const DocumentListCarouselWrapper = styled.div`
  ${withThemes(DocumentListCarouselTheme)}
`;

/**
 * The `DocumentListCarousel` presents a Carousel along with several
 * text elements, providing context for the inclue document cards.
 *
 * ## Parameters
 *
 * **Title** (required): The large text above the carousel
 *
 * **Subtitle** (optional): Text located directly above the carousel and below the title.
 *
 * **Intro** (optional): Text located above the title
 */
const DocumentListCarousel = ({
  intro,
  items,
  subtitle,
  title,
  type,
}) => (
  <DocumentListCarouselWrapper>
    {intro && (<Intro>{intro}</Intro>)}
    <Title>{title}</Title>
    {subtitle && (<SubTitle>{subtitle}</SubTitle>)}
    <CardCarousel
      items={items}
      type={type}
    />
  </DocumentListCarouselWrapper>
);

DocumentListCarousel.propTypes = {
  /** Smaller intro text displayed above subtitle */
  intro: PropTypes.string,
  /** List of items for the carousel */
  items: PropTypes.array.isRequired,
  /** Smaller title displayed below title */
  subtitle: PropTypes.string,
  /** Larger title displayed above carousel */
  title: PropTypes.string.isRequired,
  /** Sets the carousel-item styles for a particular card style */
  type: PropTypes.oneOf(['standard', 'feature']).isRequired,
};

DocumentListCarousel.defaultProps = {
  intro: null,
  subtitle: null,
};

export default DocumentListCarousel;

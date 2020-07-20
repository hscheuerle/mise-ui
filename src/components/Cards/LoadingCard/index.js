import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { cards, color, grid, mixins, spacing } from '../../../styles';

const featureCardWidth = grid.columnWidth;
const featureCardWideWidth = `${parseFloat(grid.columnWidth) * 2 + parseFloat(grid.gutterWidth)}rem`; // 56rem
const featureCardWideHeight = '40rem';

const tallCardWidth = grid.columnWidth;
const tallCardWideWidth = '36.8rem';

const StyledLoadingCard = styled.div`
  ${mixins.loadingGradientAnimation(cards.standard.width.base, color.black)};
  overflow: hidden;

  &.standard-card {
    background-color: transparent;
    height: 21.8rem;
    width: ${cards.standard.width.base};
    padding-bottom: ${spacing.sm};

    .standard-card {
      &__image {
        background-color: transparent;
        height: ${cards.standard.width.base};
      }

      &__title {
        background-color: ${color.nero};
        height: ${spacing.xsm};
        margin: 0 0 ${spacing.sm} 0;
        position: relative;
      }

      &__cta {
        background-color: ${color.nero};
        height: ${spacing.sm};
        margin-left: auto;
        position: relative;

        &::after {
          background-color: ${color.nero};
          content: '';
          position: absolute;
          right: 0;
          top: ${spacing.sm};
          height: ${spacing.sm};
          width: 36%;
        }
      }
    }

    ${breakpoint('lg')`
      ${mixins.loadingGradientAnimation(cards.standard.width.lg, color.charcoal)};
      height: 32.8rem;
      width: ${cards.standard.width.lg};

      .standard-card__image {
        height: ${cards.standard.width.lg};
      }
    `}
  }

  &.queue-card {
    ${mixins.loadingGradientAnimation(cards.queue.width.base, color.charcoal)};
    background-color: transparent;
    height: 19.8rem;
    overflow: hidden;
    width: ${cards.queue.width.base};

    .queue-card {
      &__image {
        background-color: transparent;
        height: 15.6rem;
      }

      &__title {
        background-color: ${color.nero};
        height: ${spacing.xsm};
        position: relative;

        &::after {
          background-color: ${color.nero};
          content: '';
          height: 1rem;
          position: absolute;
          right: 0;
          top: ${spacing.xsm};
          width: 40%;
        }
      }

      &__cta {
        background-color: ${color.nero};
        height: ${spacing.xsm};
        margin-top: 1rem;
        position: relative;

        &::after {
          background-color: transparent;
          content: '';
          height: ${spacing.sm};
          position: absolute;
          top: ${spacing.xsm};
          width: 100%;
        }
      }
    }
  }

  &.feature-card {
    ${mixins.loadingGradientAnimation()};
    height: ${featureCardWideHeight};
    width: ${featureCardWidth};

    ${breakpoint('lg')`
      height: ${featureCardWideHeight};
      width: ${featureCardWidth};
    `}
  }

  &.feature-wide-card {
    ${mixins.loadingGradientAnimation(cards.featureWide.width.base)};
    height: 33rem;
    width: ${cards.featureWide.width.base};

    ${breakpoint('lg')`
      ${mixins.loadingGradientAnimation(cards.featureWide.width.lg)};
      height: ${featureCardWideHeight};
      width: ${cards.featureWide.width.lg};
    `}
  }

  &.hero-card {
    ${mixins.loadingGradientAnimation(cards.hero.width.lg)};
    height: 46.9rem;
    width: 100%;
  }

  &.podcast-episode-card {
    ${mixins.loadingGradientAnimation('85rem')};
    height: 20rem;
    width: 85rem;
  }

  &.person-card {
    ${mixins.loadingGradientAnimation(cards.person.width.base)};
    height: ${cards.person.width.base};
    width: ${cards.person.width.base};
  }

  &.tall-card {
    ${mixins.loadingGradientAnimation(cards.tall.width.lg)};
    height: 60rem;
    width: ${tallCardWidth};

    ${breakpoint('md')`
      width: ${tallCardWideWidth};
    `}
  }

  &.tall-card-wide {
    ${mixins.loadingGradientAnimation(cards.tallWide.width.base)};
    height: 60rem;
    width: ${cards.tallWide.width.base};

    ${breakpoint('md')`
      width: ${cards.tallWide.width.base};
    `}
  }
`;

const LoadingCard = ({ type }) => (
  <StyledLoadingCard className={`${type}-card card`}>
    <div className="c-animated-background">
      {
        (type === 'standard' || type === 'queue') && (
          <>
            <div className={`${type}-card__image`} />
            <div className={`${type}-card__title`} />
            <div className={`${type}-card__cta`} />
          </>
        )
      }
    </div>
  </StyledLoadingCard>
);

LoadingCard.propTypes = {
  type: PropTypes.oneOf(['standard', 'feature', 'feature-wide', 'hero', 'tall', 'tall-wide', 'queue', 'person', 'podcast-episode']).isRequired,
};

export default LoadingCard;

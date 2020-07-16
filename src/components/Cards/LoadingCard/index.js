import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { cards, color, grid, mixins, spacing } from '../../../styles';

const featureCardWidth = grid.columnWidth;
const featureCardWideWidth = `${parseFloat(grid.columnWidth) * 2 + parseFloat(grid.gutterWidth)}rem`;
const featureCardWideHeight = '40rem';

const tallCardWidth = grid.columnWidth;
const tallCardWideWidth = '36.8rem';

const StyledLoadingCard = styled.div`
  // background-color: ${color.black};
  ${mixins.loadingGradientAnimation()};

  &.standard-card {
    background-color: transparent;
    width: ${cards.standard.width.base};
    padding-bottom: ${spacing.sm};

    & > div > * {
      // border: 1px solid gray;
    }

    .standard-card {
      &__image {
        // background-color: ${color.nero};
        background-color: transparent;
        height: ${cards.standard.width.base};
        // margin-bottom: ${spacing.xsm};
      }

      &__title {
        background-color: ${color.nero};
        height: ${spacing.xsm};
        margin: 0 0 ${spacing.sm} 0;
        position: relative;
      }

      &__cta {
        background-color: ${color.nero};
        // width: 36%;
        height: ${spacing.sm};
        // margin-top: ${spacing.lg};
        margin-left: auto;
        position: relative;

        &::before {
          background-color: ${color.nero};
          content: '';
          position: absolute;
          right: 0;
          top: ${spacing.sm};
          height: ${spacing.sm};
          width: 9.9rem;
        }
      }
    }

    ${breakpoint('lg')`
      width: ${cards.standard.width.lg};

      .standard-card__image {
        height: ${cards.standard.width.lg};
      }
    `}
  }

  &.queue-card {
    background-color: transparent;
    width: ${cards.standard.width.base};

    .queue-card {
      &__image {
        background-color: ${color.black};
        height: 15.6rem;
        margin-bottom: ${spacing.sm};
      }

      &__title {
        background-color: ${color.black};
        height: 1.2rem;
        margin-bottom: ${spacing.xsm};
        width: 17.3rem;
      }

      &__cta {
        background-color: ${color.black};
        height: 2.1rem;
      }
    }
  }

  &.feature-card {
    height: ${featureCardWideHeight};
    width: ${featureCardWidth};

    ${breakpoint('lg')`
      height: ${featureCardWideHeight};
      width: ${featureCardWidth};
    `}
  }

  &.feature-wide-card {
    height: 33rem;
    width: 34rem;

    ${breakpoint('lg')`
      height: ${featureCardWideHeight};
      width: ${featureCardWideWidth};
    `}
  }

  &.hero-card {
    height: 46.9rem;
    width: 100%;
  }

  &.podcast-episode-card {
    height: 20rem;
    width: 85rem;
  }

  &.person-card {
    height: ${cards.standard.width.lg};
    width: ${cards.standard.width.lg};
  }

  &.tall-card {
    height: 60rem;
    width: ${tallCardWidth};

    ${breakpoint('md')`
      width: ${tallCardWideWidth};
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
  type: PropTypes.oneOf(['standard', 'feature', 'feature-wide', 'hero', 'tall', 'queue', 'person', 'podcast-episode']).isRequired,
};

export default LoadingCard;

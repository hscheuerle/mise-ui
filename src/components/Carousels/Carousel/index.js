import breakpoint from 'styled-components-breakpoint';
import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';

import { color, spacing, withThemes } from '../../../styles';

const CarouselTheme = {
  default: css`
    padding-top: ${spacing.md};
    width: 100%;

    .flickity-button {
      background: none;
      color: ${color.black};
      display: none;
      z-index: 1;

      &:hover {
        background: none;
      }

      &.next {
        right: -1rem;
      }

      &.prev {
        left: -1rem;
      }
    }

    .flickity-page-dots {
      bottom: auto;
      top: 0;
      right: ${spacing.sm};
      text-align: right;

      .dot {
        height: 1.2rem;
        margin: 0 ${spacing.xxsm};
        width: 1.2rem;

        &:last-of-type {
          margin-right: 0;
        }
      }
    }

    img {
      display: block;
    }

    &:not(.flickity-enabled) {
      overflow: hidden;

      .slideshow & {
        .carousel-cell {
          display: flex;
          margin: 0 auto;
        }
      }
    }

    ${breakpoint('lg')`
      .flickity-page-dots {
        right: ${spacing.lg};
      }

      .flickity-button {
        display: block;
      }
    `}

    ${breakpoint('xlg')`
      padding-top: 2.8rem;
      width: 118rem;

      .flickity-page-dots {
        right: ${spacing.xxlg};
      }
    `}
  `,
  dark: css`
    .flickity-button {
      color: ${color.white};
    }

    .flickity-page-dots {
      .dot {
        background-color: ${color.white};

        :not(.is-selected) {
          opacity: 0.5;
        }
      }
    }
  `,
};

const CarouselWrapper = styled.div`
  position: relative;
`;

const CarouselEl = styled.div.attrs(props => ({
  className: [props.className, 'carousel'].join(' '),
}))`${withThemes(CarouselTheme)}`;

// IOS13 bug fix
// https://github.com/metafizzy/flickity/issues/959
// https://gist.github.com/bakura10/b0647ef412eb7757fa6f0d2c74c1f145
function temporaryCarouselFix() {
  let touchingCarousel = false;
  let touchStartCoords;

  document.body.addEventListener('touchstart', (e) => {
    touchingCarousel = Boolean(e.target.closest('.flickity-slider'));
    if (!touchingCarousel) return;

    touchStartCoords = {
      x: e.touches[0].pageX,
      y: e.touches[0].pageY,
    };
  });

  document.body.addEventListener('touchmove', (e) => {
    if (!(touchingCarousel && e.cancelable)) return;
    const moveVector = {
      x: e.touches[0].pageX - touchStartCoords.x,
      y: e.touches[0].pageY - touchStartCoords.y,
    };
    if (Math.abs(moveVector.x) > 7) e.preventDefault();
  }, { passive: false });
}

function getFlickityInstance(el, options) {
  const {
    arrowShape,
    cellAlign = 'center',
    slideshow,
    navigationArrows,
    navigationDots,
    wrapAround,
  } = options;
  const isPhone = window.innerWidth <= 768 || window.innerHeight <= 450;
  const groupCells = slideshow ? false : '100%';
  const cOptions = {
    cellAlign,
    dragThreshold: 10,
    groupCells,
    prevNextButtons: navigationArrows,
    pageDots: navigationDots,
    wrapAround,
  };
  if (isPhone) {
    temporaryCarouselFix();
    cOptions.freeScroll = true;
    cOptions.freeScrollFriction = 0.085;
  } else {
    cOptions.friction = 0.7;
    cOptions.selectedAttraction = 0.08;
  }
  if (arrowShape) cOptions.arrowShape = arrowShape;
  const Flickity = require('flickity'); // eslint-disable-line
  return new Flickity( // eslint-disable-line
    el,
    cOptions,
  );
}

const defaultOptions = {
  arrowShape: 'M54.48828 88.55859c2.59375 4.00782 7.78516 5.15235 11.82031 2.86329 4.03907-2.57422 5.19141-7.72657 2.88672-11.73047l-20.1875-32.04688 20.1875-32.04687c2.59375-4.00782 1.44141-9.44532-2.88672-11.73438-1.4414-.85547-2.88281-1.42969-4.61328-1.42969-2.88281 0-5.76562 1.42969-7.20703 4.00782L28.53516 47.64453l25.95312 40.91406zm0 0',
  cellAlign: 'left',
  navigationArrows: true,
  navigationDots: true,
  slideshow: false,
  wrapAround: true,
};

const Carousel = ({ className, items, options, renderItem }) => {
  const elRef = useRef(null);
  const flktyRef = useRef();
  const opts = { ...defaultOptions, ...options };
  const { slideshow } = opts;

  useEffect(() => {
    if (flktyRef.current) flktyRef.current.destroy();
    if (items.length > 1 && elRef?.current) {
      const flkty = getFlickityInstance(elRef.current, opts);
      if (flkty.slides.length === 1) flkty.destroy();
      else flktyRef.current = flkty;
    }
    return () => {
      try { if (flktyRef.current) flktyRef.current.destroy(); } // eslint-disable-line
      catch (err) {}; // eslint-disable-line
    };
  }, [items, opts]);

  return (
    <CarouselWrapper
      className={`carousel-wrapper${slideshow ? ' slideshow' : ''}`}
    >
      <CarouselEl
        className={className}
        ref={elRef}
      >
        {items.map((item, idx) => (
          <div
            className="carousel-cell"
            key={`carousel-cell-${item.id}-${idx}`}
          >
            {renderItem(item, idx)}
          </div>
        ))}
      </CarouselEl>
    </CarouselWrapper>
  );
};

Carousel.propTypes = {
  /** Additional classname */
  className: PropTypes.string,
  /** List of items for the carousel */
  items: PropTypes.array.isRequired,
  options: PropTypes.shape({
    /** Change shape of arrows on carousel */
    arrowShape: PropTypes.object,
    /** Change cell alignment inside carousel */
    cellAlign: PropTypes.string,
    /** Include prev/next navigation buttons */
    navigationArrows: PropTypes.bool,
    /** Include navigation dots */
    navigationDots: PropTypes.bool,
    /** Show one item at a time */
    slideshow: PropTypes.bool,
    /** Enables infinite scrolling in carousel */
    wrapAround: PropTypes.bool,
  }),
  /** Callback for rendering each carousel item */
  renderItem: PropTypes.func.isRequired,
};

Carousel.defaultProps = {
  className: undefined,
  options: {},
};

export default Carousel;
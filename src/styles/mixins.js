import { cards, color } from './index';

export default {
  styledLink(underlineColor, backgroundColor, textColor = 'inherit') {
    return `
      background-image: linear-gradient(transparent 91%, ${underlineColor} 91%);
      border: none;
      color: ${textColor};
      cursor: pointer;
      text-decoration: none;
      transition: background .2s ease-in-out;

      &:focus,
      &:active {
        color: ${textColor};
      }

      @media(hover: hover) {
        &:hover {
          background-color: ${backgroundColor};
        }
      }

      @media print {
        background-image: none !important;
        background-color: transparent !important;
        color-adjust: exact !important;
      }
    `;
  },

  loadingGradientAnimation(width = cards.standard.width.lg, backgroundColor = color.charcoal) {
    return `
      @keyframes gradientWave {
        0% {
          background-position: -${width} 0;
        }

        100% {
          background-position: ${width} 0;
        }
      }

      .c-animated-background {
        animation-duration: 1.5s;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        animation-name: gradientWave;
        animation-timing-function: linear;
        background: ${backgroundColor};
        background: linear-gradient(to right, ${backgroundColor} 4%, transparent 40%, ${backgroundColor} 83%, ${backgroundColor} 100%);
        height: 100%;
        height: 32.8rem;
        position: relative;
        -webkit-backface-visibility: hidden
      }
    `;
  },
};

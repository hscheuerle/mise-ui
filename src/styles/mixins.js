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

  loadingGradientAnimation() {
    return `
      @keyframes gradientWave {
        0% {
          background-position: 0 0
        }
        100% {
          background-position: 462px 0
        }
      }

      .c-animated-background {
        animation-duration: 3.5s;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        animation-name: gradientWave;
        animation-timing-function: linear;
        background: fff;
        background: linear-gradient(to right, transparent 8%, #3d3d3d 38%, transparent 83%);
        height: 100%;
        min-height: 336px;
        width: 100%;
        position: relative;
        -webkit-backface-visibility: hidden
      }
    `;
  },
};

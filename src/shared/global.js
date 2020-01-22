import { createGlobalStyle, css } from 'styled-components';
import styledNormalize from 'styled-normalize';

export const globalStyles = css`
  ${styledNormalize}

  html {
    height: 100%;
    box-sizing: border-box;
    font-size: 62.5%;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    font-weight: inherit;
  }

  body {
    min-height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${globalStyles}
`;

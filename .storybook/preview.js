import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { breakpoints } from '../src/styles/breakpoints';
import { GlobalStyle } from '../src/styles/global';

const theme = { breakpoints };

addDecorator(story => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {story()}
    </ThemeProvider>
  </>
));

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});

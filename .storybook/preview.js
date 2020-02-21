import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { GlobalStyle } from '../src/styles/global';

addDecorator(story => (
  <>
    <GlobalStyle />
    {story()}
  </>
));

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});

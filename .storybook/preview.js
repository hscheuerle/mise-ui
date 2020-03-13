import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { GlobalStyle } from '../src/styles/global';
import { withA11y } from '@storybook/addon-a11y';

addDecorator(withA11y);
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

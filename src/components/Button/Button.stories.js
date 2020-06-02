import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs/react';

import Button from './index';

export default {
  title: 'Components|Button',
  component: Button,
  decorators: [withKnobs],
  includeStories: [],
};

export const DefaultTextButton = () => (
  <Button onClick={action('click button')}>
    {text('Text', 'Done')}
  </Button>
);

DefaultTextButton.story = {
  parameters: { viewMode: 'story' },
};

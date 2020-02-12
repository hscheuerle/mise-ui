import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { Button } from './Button';


export default {
  title: 'Components|Button',
  component: Button,
  decorators: [withKnobs],
};

export const Text = () => <Button>{text("Text", "Hello Button")}</Button>;

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

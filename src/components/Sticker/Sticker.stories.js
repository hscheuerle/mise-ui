import React from 'react';
import Sticker from '../Sticker';
import { withKnobs, text, select } from "@storybook/addon-knobs";

export default {
  title: 'Components|Sticker',
  component: Sticker,
  decorators: [withKnobs],
};

export const Basic = () => (
  <Sticker
    iconType={select('icon type', { 'collection' : 'collection', 'play': 'play', 'none': null }, 'collection')}
    isPriority={false}
    text={text("Basic sticker text", "Editors’ pick")}
  />
);

export const Priority = () => (
  <Sticker
    isPriority={true}
    text={text("Priority sticker text", "New")}
  />
);

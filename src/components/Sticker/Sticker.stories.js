import React from 'react';
import { Sticker } from '../Sticker';

export default {
  title: 'Components|Sticker',
  component: Sticker,
};

export const Basic = () => (
  <Sticker
    isPriority={false}
    text="Editor's pick"
  />
);

export const Priority = () => (
  <Sticker
    isPriority={true}
    text="New"
  />
);

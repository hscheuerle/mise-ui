import React from 'react';
import { Sticker } from './Sticker';

export default {
  title: 'Components|Sticker',
  component: Sticker,
};

export const Default = () => (
  <Sticker theme='cio'>
    <span>
      cio lookin sticker
    </span>
  </Sticker>
);

export const CCOSticker = () => (
  <Sticker theme='cco'>
    cco lookin sticker
  </Sticker>
);

import React from 'react';
import { Card } from '../Card';
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
  title: 'Components|Card',
  component: Card,
  decorators: [withKnobs],
};

export const Standard = () => (
  <Card
    attributions={text("Attribution text", "Mar / Apr 2020  •  Andrew Janjigian")}
    hasStickers
    imageAlt={text("Image alt text", "Gray cat pulling up the edge of a rug")}
    title={text("Title", "Congee (Chinese Rice Porridge) with Stir-Fried Ground Pork")}
  />
);

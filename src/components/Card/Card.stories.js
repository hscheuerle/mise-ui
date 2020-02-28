import React from 'react';
import { Card } from '../Card';
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
  title: 'Components|Cards/StandardCard',
  component: Card,
  decorators: [withKnobs],
};

export const LoggedIn = () => (
  <Card
    attributions={text("Attribution text", "Mar / Apr 2020  •  Andrew Janjigian")}
    badgeType="atk"
    contentType="review"
    commentCount={5}
    cta={text("CTA text", "Buy the Winner")}
    ctaUrl="https://www.amazon.com/dp/B01JCNEJSO/?tag=ciosearchresult-20"
    isAuthenticated
    hasAccess
    hasImage
    hasStickers
    imageAlt={text("Image alt text", "Gray cat pulling up the edge of a rug")}
    title={text("Title", "Plastic Food Storage Containers")}
  />
);

export const LoggedOut = () => (
  <Card
    badgeType="cio"
    contentType="recipe"
    commentCount={1}
    hasImage
    hasStickers
    imageAlt={text("Image alt text", "Gray cat pulling up the edge of a rug")}
    title={text("Title", "Congee (Chinese Rice Porridge) with Stir-Fried Ground Pork")}
  />
);

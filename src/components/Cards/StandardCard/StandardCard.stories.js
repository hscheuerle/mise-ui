import React from 'react';
import { action } from '@storybook/addon-actions';
import { StandardCard } from '../StandardCard';
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
  title: 'Components|Cards/StandardCard',
  component: StandardCard,
  decorators: [withKnobs],
};

export const LoggedIn = () => (
  <StandardCard
    badgeType="atk"
    contentType="Review"
    commentCount={5}
    ctaText={text("CTA text", "Buy the Winner")}
    ctaUrl="https://www.amazon.com/dp/B01JCNEJSO/?tag=ciosearchresult-20"
    displayFavoritesButton={true}
    isFavorited={false}
    displayLockIcon={false}
    hasImage
    hasStickers
    imageAlt={text("Image alt text", "Gray cat pulling up the edge of a rug")}
    displayCommentCount={true}
    onClick={action('favorites-click')}
    title={text("Title", "Plastic Food Storage Containers")}
  />
);

export const LoggedOut = () => (
  <StandardCard
    badgeType="cio"
    contentType="Cookbook Collection"
    commentCount={1}
    displayFavoritesButton={false}
    displayLockIcon={true}
    hasImage
    hasStickers
    imageAlt={text("Image alt text", "Gray cat pulling up the edge of a rug")}
    displayCommentCount={true}
    title={text("Title", "Congee (Chinese Rice Porridge) with Stir-Fried Ground Pork")}
  />
);

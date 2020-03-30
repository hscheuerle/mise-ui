import React from 'react';
import { action } from '@storybook/addon-actions';
import FavoriteButton from '../FavoriteButton';

export default {
  title: 'Components|Cards/shared/FavoriteButton',
  component: FavoriteButton,
};

export const Default = ({ ariaLabel }) => (
  <FavoriteButton
    ariaLabel={ariaLabel}
    className="favorite-ribbon"
    isFavorited={false}
    objectId="123"
    onClick={action('click-button')}
    siteKey="atk"
    title=""
  />
);

export const Favorited = ({ ariaLabel }) => (
  <FavoriteButton
    ariaLabel={ariaLabel}
    className="favorite-ribbon"
    isFavorited={true}
    objectId="123"
    onClick={action('click-button')}
    siteKey="atk"
    title=""
  />
);

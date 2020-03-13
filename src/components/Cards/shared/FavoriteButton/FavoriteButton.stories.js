import React from 'react';
import { action } from '@storybook/addon-actions';
import FavoriteButton from '../FavoriteButton';

export default {
  title: 'Components|Cards/shared/FavoriteButton',
  component: FavoriteButton,
};

export const Default = ({ ariaLabel }) => (
  <FavoriteButton
    ariaHidden="true"
    ariaLabel={ariaLabel}
    className="favorite-ribbon"
    isFavorited={false}
    onClick={action('click-button')}
  />
);

export const Favorited = ({ ariaLabel }) => (
  <FavoriteButton
    ariaHidden="true"
    ariaLabel={ariaLabel}
    className="favorite-ribbon"
    isFavorited={true}
    onClick={action('click-button')}
  />
);

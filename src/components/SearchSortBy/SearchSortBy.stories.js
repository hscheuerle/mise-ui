import React from 'react';
import SearchSortBy from '../SearchSortBy';

import MiseInstantSearch from '../../lib/algolia/MiseInstantSearch/MiseInstantSearch';

export default {
  title: 'Components|SearchSortBy',
  component: SearchSortBy,
};

export const Default = () => (
  <MiseInstantSearch>
    <SearchSortBy />
  </MiseInstantSearch>
);

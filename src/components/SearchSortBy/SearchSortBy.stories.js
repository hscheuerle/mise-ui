import React from 'react';

import LabelFrame from '../LabelFrame';
import SearchSortBy from '../SearchSortBy';

import MiseInstantSearch from '../../lib/algolia/MiseInstantSearch/MiseInstantSearch';

export default {
  title: 'Components|SearchSortBy',
  component: SearchSortBy,
};

export const Default = () => (
  <MiseInstantSearch>
    <LabelFrame label="Component">
      <SearchSortBy />
    </LabelFrame>
  </MiseInstantSearch>
);

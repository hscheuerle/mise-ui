import React from 'react';
import SearchResultsCount from '../SearchResultsCount';

import LabelFrame from '../LabelFrame';
import MiseInstantSearch from '../../lib/algolia/MiseInstantSearch/MiseInstantSearch';

export default {
  title: 'Components|SearchResultsCount',
  component: SearchResultsCount,
};

export const Default = () => (
  <MiseInstantSearch>
    <LabelFrame label="Component">
      <SearchResultsCount />
    </LabelFrame>
  </MiseInstantSearch>
);

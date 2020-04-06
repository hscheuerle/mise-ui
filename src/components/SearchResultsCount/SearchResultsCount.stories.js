import React from 'react';

import LabelFrame from '../LabelFrame';
import SearchResultsCount from './index';
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

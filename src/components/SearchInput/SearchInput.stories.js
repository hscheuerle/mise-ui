import React from 'react';

import LabelFrame from '../LabelFrame';
import SearchInput from '../SearchInput';

import MiseInstantSearch from '../../lib/algolia/MiseInstantSearch/MiseInstantSearch';

export default {
  title: 'Components|SearchInput',
  component: SearchInput,
};

export const Default = () => (
  <MiseInstantSearch>
    <LabelFrame label="Component">
      <SearchInput />
    </LabelFrame>
  </MiseInstantSearch>
);

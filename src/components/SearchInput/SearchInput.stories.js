import React from 'react';
import SearchInput from '../SearchInput';

import MiseInstantSearch from '../../lib/algolia/MiseInstantSearch/MiseInstantSearch';

export default {
  title: 'Components|SearchInput',
  component: SearchInput,
};

export const Default = () => (
  <MiseInstantSearch>
    <SearchInput />
  </MiseInstantSearch>
);

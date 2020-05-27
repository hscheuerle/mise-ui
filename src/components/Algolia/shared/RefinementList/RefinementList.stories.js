import React from 'react';

import LabelFrame from '../../../LabelFrame';
import RefinementList from './index';
import MiseInstantSearch from '../../../../lib/algolia/MiseInstantSearch/MiseInstantSearch';

export default {
  title: 'Components|Algolia/shared/RefinementList',
  component: RefinementList,
};

export const WithoutShowMore = () => (
  <MiseInstantSearch>
    <LabelFrame label="Component">
      <RefinementList attribute="search_site_list" />
    </LabelFrame>
  </MiseInstantSearch>
);

export const WithShowMore = () => (
  <MiseInstantSearch>
    <LabelFrame label="Component">
      <RefinementList
        attribute="search_cuisine_list"
        operator="and"
      />
    </LabelFrame>
  </MiseInstantSearch>
);

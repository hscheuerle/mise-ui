import React from 'react';
import styled from 'styled-components';
import { memoize } from 'lodash.memoize';
import { orderBy } from 'lodash.orderby';

import LabelFrame from '../LabelFrame';
import SearchRefinementList from '../SearchRefinementList';
import MiseInstantSearch from '../../lib/algolia/MiseInstantSearch/MiseInstantSearch';

export default {
  title: 'Components|SearchRefinementList',
  component: SearchRefinementList,
};

export const SearchSiteList = () => {
  // "items" are the values of the 'search_site_list' facet returned by algolia
  // they are not returned in the correct order by algolia so we reorder the
  // list below
  const transformItems = _.memoize((items) => {
    // Order alphabetically by label value
    let formattedItems = _.orderBy(items, ['label'], 'asc').filter(({ label }) => (
      ['atk', 'cco', 'cio', 'kids', 'school', 'shop'].includes(label)
    ));
    const arrLen = formattedItems.length;
    // even after we've ordered labels alphabetically, school is in the wrong
    // index. the temp swap here is switching school and kids so the labels
    // are rendered in the correct order in the refinement list.
    const temp = formattedItems[arrLen - 2];
    formattedItems[arrLen - 2] = formattedItems[arrLen - 3];
    formattedItems[arrLen - 3] = temp;
    return formattedItems;
  });

  return (
    <MiseInstantSearch>
      <LabelFrame label="Component">
        <SearchRefinementList
          attribute="search_site_list"
          showHideLabel="RESULTS FROM"
          transformItems={transformItems}
        />
      </LabelFrame>
    </MiseInstantSearch>
  );
};

export const SearchCuisine = () => {
  return (
    <MiseInstantSearch>
      <LabelFrame label="Component">
        <SearchRefinementList
          attribute="search_cuisine_list"
          operator="and"
          showHideLabel="CUISINE"
        />
      </LabelFrame>
    </MiseInstantSearch>
  );
};

export const SearchDishType = () => {
  return (
    <MiseInstantSearch>
      <LabelFrame label="Component">
        <SearchRefinementList
          attribute="search_dish_type_list"
          operator="and"
          showHideLabel="DISH TYPE"
        />
      </LabelFrame>
    </MiseInstantSearch>
  );
};

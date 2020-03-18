import React from 'react';
import styled from 'styled-components';

import LabelFrame from '../LabelFrame';
import SearchCurrentRefinements from '../SearchCurrentRefinements';
import SearchRefinementList from '../SearchRefinementList';

import MiseInstantSearch from '../../lib/algolia/MiseInstantSearch/MiseInstantSearch';

export default {
  title: 'Components|SearchCurrentRefinements',
  component: SearchCurrentRefinements,
};

const StyledWrapper = styled.div`
  padding: 0 0 0 3rem;
`;

export const Default = () => (
  <MiseInstantSearch>
    <LabelFrame label="Component">
      <SearchCurrentRefinements />
    </LabelFrame>
    <LabelFrame label="Supplemental Component">
      <SearchRefinementList
        attribute="search_cuisine_list"
        operator="and"
        showHideLabel="CUISINE"
      />
    </LabelFrame>
  </MiseInstantSearch>
);

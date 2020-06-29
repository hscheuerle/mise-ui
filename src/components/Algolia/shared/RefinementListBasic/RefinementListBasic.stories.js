import React from 'react';

import LabelFrame from '../../../LabelFrame';
import RefinementListBasic from './index';
import MiseInstantSearch from '../../../../lib/algolia/MiseInstantSearch/MiseInstantSearch';

export default {
  title: 'Components|Algolia/shared/RefinementListBasic',
  component: RefinementListBasic,
};

export const Default = () => (
  <MiseInstantSearch>
    <LabelFrame label="Component">
      <RefinementListBasic
        attribute="search_difficulty_list"
        icon="chefHat"
        label="Difficulty"
      />
    </LabelFrame>
  </MiseInstantSearch>
);

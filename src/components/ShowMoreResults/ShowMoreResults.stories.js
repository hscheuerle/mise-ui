import React from 'react';
import CustomShowMoreResults from '../ShowMoreResults';
import styled from 'styled-components';
import MiseInstantSearch from '../../lib/algolia/MiseInstantSearch/MiseInstantSearch';

const StyledShowMoreResults = styled(CustomShowMoreResults)`
  margin-bottom: 3rem;
`;

export default {
  title: 'Components|CustomShowMoreResults',
  component: CustomShowMoreResults,
};

export const Default = ({ className, resultsCount }) => {
  return (
    <MiseInstantSearch>
      <StyledShowMoreResults
        className={className}
        resultsCount={160}
      />
    </MiseInstantSearch>
  );
};

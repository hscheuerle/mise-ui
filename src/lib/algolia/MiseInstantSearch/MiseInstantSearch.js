import React from 'react';
import PropTypes from 'prop-types';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, Hits } from 'react-instantsearch-dom';

const searchClient = algoliasearch(
  'Y1FNZXUI30',
  '3ef655917b64bb548c4bf36e9dab9913',
);

const MiseInstantSearch = ({ children }) => (
  <InstantSearch
    indexName="everest_search_development"
    searchClient={searchClient}
  >
    {children}
    <Hits />
  </InstantSearch>
);

MiseInstantSearch.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default MiseInstantSearch;

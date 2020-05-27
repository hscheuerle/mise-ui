import React from 'react';
import PropTypes from 'prop-types';

import RefinementList from '../../shared/RefinementList';
import Accordion from '../../../Accordion';

const SearchRefinementList = ({ attribute, showHideLabel, ...restProps }) => (
  <Accordion
    icon={attribute === 'search_cookbook_collection_titles' ? 'cookbook' : null}
    isFieldset
    label={showHideLabel}
  >
    <RefinementList
      attribute={attribute}
      {...restProps}
    />
  </Accordion>
);

SearchRefinementList.propTypes = {
  /** Algolia attribute that is used to pull refinement values. */
  attribute: PropTypes.string.isRequired,
  /** 'Title' of the list that will be put into clickable show/hide button */
  showHideLabel: PropTypes.string.isRequired,
  /** Used to pass click functionality from jarvis etc. */
  handleClick: PropTypes.func,
  /** Initial number of refinement filters that are visible in the refinement list. */
  transformItems: PropTypes.func,
};

SearchRefinementList.defaultProps = {
  handleClick: null,
  transformItems: null,
};


export default SearchRefinementList;

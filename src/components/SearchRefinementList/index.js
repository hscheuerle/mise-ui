import React from 'react';
import PropTypes from 'prop-types';
import { connectRefinementList } from 'react-instantsearch-dom';
import styled from 'styled-components';

import ShowMoreLess from '../ShowMoreLess';
import SearchRefinementFilter from './components/SearchRefinementFilter';
import { ShowHide } from '../ShowHide';

const SearchRefinementListRefinements = styled.div`
  border: none;
  margin: 0;
  padding: 0;
`;

const RefinementList = ({ attribute, items, refine }) => (
  <SearchRefinementListRefinements>
    {
      attribute === 'search_site_list' ? (
        items.map(item => (
          <SearchRefinementFilter
            {...item}
            attribute={attribute}
            key={`${attribute}-${item.label}`}
            refine={refine}
          />
        ))
      ) : (
        <ShowMoreLess
          id={`show-more-less--${attribute}`}
          initialCount={3}
          items={
            items.map(item => (
              <SearchRefinementFilter
                {...item}
                attribute={attribute}
                key={`${attribute}-${item.label}`}
                refine={refine}
              />
            ))
          }
          key={`${attribute}-showmore`}
        />
      )
    }
  </SearchRefinementListRefinements>
);

const CustomRefinementList = connectRefinementList(RefinementList);

const SearchRefinementList = (props) => {
  const { showHideLabel, ...restProps } = props;
  return (
    <ShowHide isFieldset label={showHideLabel}>
      <CustomRefinementList {...restProps} />
    </ShowHide>
  );
};

SearchRefinementList.propTypes = {
  /** Algolia attribute that is used to pull refinement values. */
  attribute: PropTypes.string.isRequired,
  /** 'Title' of the list that will be put into clickable show/hide button */
  showHideLabel: PropTypes.string.isRequired,
  /** Initial number of refinement filters that are visible in the refinement list. */
  transformItems: PropTypes.func,
};

SearchRefinementList.defaultProps = {
  transformItems: null,
};

export default SearchRefinementList;

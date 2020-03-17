import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Badge from '../../Badge';
import { Checkmark } from '../../DesignTokens/Icon/svgs'
import { color, font, fontSize } from '../../../styles';

const SearchRefinementFilterLabel = styled.label.attrs({
  className: 'search-refinement-list__label',
})`
  align-items: center;
  color: ${color.eclipse};
  display: flex;
  font: ${fontSize.md}/1.38 ${font.pnr};
  position: relative;

  margin: 0 0 1.8rem;

  &:last-child {
    margin: 0;
  }

  &:hover {
    cursor: pointer;

    svg {
      circle {
        ${({ altFill }) => (altFill ? `fill: ${altFill};` : '')}
      }
    }
  }

  .search-refinement__badge {
    margin-right: 0.8rem;
  }
`;

const SearchRefinementFilterCheck = styled.div`
  left: -2rem;
  position: absolute;
  width: 1.2rem;
`;

const SearchRefinementFilterCheckbox = styled.input`
  height: 0.8rem;
  left: -2rem;
  position: absolute;
  opacity: 0;
  width: 1.2rem;
`;

const SearchRefinementFilterCount = styled.span`
  color: ${color.nobel};
`;

const keyToButton = key => (
  {
    'atk': {
      altFill: color.tomato,
      label: 'America\'s Test Kitchen',
    },
    'cco': {
      altFill: color.denim,
      label: 'Cook\'s Country',
    },
    'cio': {
      altFill: color.cork,
      label: 'Cook\'s Illustrated',
    },
    'kids': {
      altFill: color.jade,
      label: 'ATK Kids',
    },
    'school': {
      altFill: color.tomato,
      label: 'Cooking School',
    },
    'shop': {
      altFill: color.tomato,
      label: 'ATK Shop',
    },
  }[key] || {}
);

const SearchRefinementFilter = ({ attribute, count, isRefined, label: key, refine, value }) => {
  const { altFill, label } = keyToButton(key);
  const wrapperProps = {
    altFill,
    htmlFor: `${attribute}--${key}`,
  };
  return (
    <SearchRefinementFilterLabel {...wrapperProps} onClick={(e) => { e.preventDefault(); refine(value); }}>
      {
        isRefined ? (
          <SearchRefinementFilterCheck>
            <Checkmark />
          </SearchRefinementFilterCheck>
        ) : null
      }
      <SearchRefinementFilterCheckbox
        id={`search-site-list--${key}`}
        type="checkbox"
      />
      {
        attribute === 'search_site_list' ? (
          <Badge
            className="search-refinement__badge"
            fill={isRefined ? altFill : color.eclipse}
            type={key}
          />
        ) : null
      }
      {
        label ? (
          label
        ) : (
          <span>
            {key} <SearchRefinementFilterCount>{`(${count})`}</SearchRefinementFilterCount>
          </span>
        )
      }
    </SearchRefinementFilterLabel>
  );
};

SearchRefinementFilter.propTypes = {
  /** Algolia attribute used to filter results. */
  attribute: PropTypes.string.isRequired,
  /** Number of hits for this filter value. */
  count: PropTypes.number.isRequired,
  /** Is this filter selected? */
  isRefined: PropTypes.bool.isRequired,
  /** Filter label */
  label: PropTypes.string.isRequired,
  /** Call this with the value of a filter to refine results based on filter. */
  refine: PropTypes.func.isRequired,
  /** Value of filter to be used for refining results. */
  value: PropTypes.array.isRequired,
};

export default SearchRefinementFilter;

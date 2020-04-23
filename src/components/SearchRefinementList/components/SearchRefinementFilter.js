import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Badge from '../../Badge';
import { Checkmark } from '../../DesignTokens/Icon/svgs';
import { color, font, fontSize, spacing } from '../../../styles';

const SearchRefinementFilterLabel = styled.label.attrs({
  className: 'search-refinement-list__label',
})`
  align-items: center;
  color: ${color.eclipse};
  display: flex;
  font: ${fontSize.md}/1.38 ${font.pnr};
  margin-bottom: 1.2rem;
  position: relative;

  &.search_site_list {
    margin-bottom: 1.8rem;
  }

  .search-refinement-list__label-text {
    ${({ isRefined }) => (isRefined ? `color: ${color.mint}; font-family: ${font.pnb};` : '')}
  }

  &:last-child {
    margin: 0;
  }

  &:hover {
    cursor: pointer;

    .search-refinement-list__label-text {
      color: ${color.mint};
    }

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
  height: 1.2rem;
  margin-left: -2rem;
  margin-right: ${spacing.xsm};
  position: relative;
  width: 1.2rem;

  svg {
    left: 0;
    position: absolute;
    top: 0;
  }
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

const SearchRefinementFilter = ({
  altFill,
  attribute,
  count,
  includeCount,
  isRefined,
  label,
  refine,
  handleClick,
  value,
}) => (
  <SearchRefinementFilterLabel
    altFill={altFill}
    className={`${attribute}`}
    data-site-key={value}
    htmlFor={`${attribute}--${label}`}
    isRefined={isRefined}
    onClick={(e) => {
      e.preventDefault();
      if (!isRefined && typeof handleClick === 'function') handleClick(e);
      refine(value);
    }}
  >
    {
      isRefined ? (
        <SearchRefinementFilterCheck>
          <Checkmark />
        </SearchRefinementFilterCheck>
      ) : null
    }
    <SearchRefinementFilterCheckbox
      id={`search-site-list--${value}`}
      type="checkbox"
    />
    {
      attribute === 'search_site_list' ? (
        <Badge
          className="search-refinement__badge"
          fill={isRefined ? altFill : color.eclipse}
          type={value}
        />
      ) : null
    }
    {
      includeCount ? (
        <span>
          <span className="search-refinement-list__label-text">
            {label}
          </span>
          <SearchRefinementFilterCount>
            {` (${count})`}
          </SearchRefinementFilterCount>
        </span>
      ) : (
        label
      )
    }
  </SearchRefinementFilterLabel>
);

SearchRefinementFilter.propTypes = {
  altFill: PropTypes.string,
  /** Algolia attribute used to filter results. */
  attribute: PropTypes.string.isRequired,
  /** Number of hits for this filter value. */
  count: PropTypes.number,
  includeCount: PropTypes.bool,
  /** Is this filter selected? */
  isRefined: PropTypes.bool.isRequired,
  /** Filter label */
  label: PropTypes.string.isRequired,
  /** Call this with the value of a filter to refine results based on filter. */
  refine: PropTypes.func.isRequired,
  /** Used to pass click functionality from jarvis etc. */
  handleClick: PropTypes.func,
  /** Value of filter to be used for refining results. */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
};

SearchRefinementFilter.defaultProps = {
  altFill: null,
  count: null,
  includeCount: true,
  handleClick: null,
};

export default SearchRefinementFilter;

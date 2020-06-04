import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connectSortBy } from 'react-instantsearch-dom';

import { color, font, fontSize, spacing } from '../../../../styles';

const SearchSortByList = styled.ul``;

const SearchSortByItem = styled.li`
  margin-bottom: ${spacing.sm};

  &:last-child {
    margin-bottom: 0;
  }
`;

const SearchSortByButton = styled.button`
  align-items: center;
  display: flex;
  letter-spacing: normal;

  &:hover {
    cursor: pointer;

    .search-sort-by__circle {
      background-color: ${color.mint};
      border-color: ${color.mint};
    }

    .search-sort-by__label {
      color: ${color.mint};
    }
  }
`;

const SearchSortByCircle = styled.div.attrs({
  className: 'search-sort-by__circle',
})`
  ${({ isRefined }) => (isRefined ? `
      background-color: ${color.mint};
      border: solid 1px ${color.mint};
  ` : `
      background-color: transparent;
      border: solid 1px ${color.nobel};
  `)}
  border-radius: 1.2rem;
  height: 1.2rem;
  margin-right: 0.6rem;
  width: 1.2rem;
`;

const SearchSortByLabel = styled.span.attrs({
  className: 'search-sort-by__label',
})`
  color: ${color.eclipse};
  font: ${fontSize.md}/1.38 ${font.pnr};
  font-size: ${fontSize.md};
`;

export const CustomSortBy = ({ items, refine }) => (
  <SearchSortByList>
    {
      items.map(({ isRefined, label, value }) => (
        <SearchSortByItem key={value}>
          <SearchSortByButton onClick={(e) => { e.preventDefault(); refine(value); }}>
            <SearchSortByCircle
              data-testid="sort-by__radio"
              isRefined={isRefined}
            />
            <SearchSortByLabel>
              {label}
            </SearchSortByLabel>
          </SearchSortByButton>
        </SearchSortByItem>
      ))
    }
  </SearchSortByList>
);

CustomSortBy.propTypes = {
  items: PropTypes.array.isRequired,
  refine: PropTypes.func.isRequired,
};

export default connectSortBy(CustomSortBy);

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { connectSortBy } from 'react-instantsearch-dom';

import { color, font, fontSize, lineHeight, spacing, withThemes } from '../../../../styles';

const SearchSortByList = styled.ul``;

const SearchSortByItemTheme = {
  default: css`
    margin-bottom: ${spacing.sm};

    &:last-child {
      margin-bottom: 0;
    }
  `,
  kids: css`
    margin-bottom: ${spacing.xsm};
  `,
};

const SearchSortByItem = styled.li`
  ${withThemes(SearchSortByItemTheme)}
`;

const SearchSortByButtonTheme = {
  default: css`
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
  `,
  kids: css`
    background-color: ${color.greySmoke};
    border-radius: 1rem;
    color: ${color.black};
    display: block;
    line-height: ${lineHeight.xlg};
    text-align: left;
    padding: 0.4rem 1.3rem;
    width: 100%;

    &:hover {
      box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);

      .search-sort-by__label {
        color: ${color.black};
      }
    }

    &.refined {
      background-color: ${color.jade};

      .search-sort-by__label {
        color: ${color.white};
      }
    }
  `,
};

const SearchSortByButton = styled.button`
  ${withThemes(SearchSortByButtonTheme)}
`;

const SearchSortByCircleTheme = {
  default: css`
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
  `,
  kids: css`
    display: none;
  `,
};

const SearchSortByCircle = styled.div.attrs({
  className: 'search-sort-by__circle',
})`${withThemes(SearchSortByCircleTheme)}`;

const SearchSortByLabelTheme = {
  default: css`
    color: ${color.eclipse};
    font: ${fontSize.md}/1.38 ${font.pnr};
    font-size: ${fontSize.md};
  `,
  kids: css``,
};

const SearchSortByLabel = styled.span.attrs({
  className: 'search-sort-by__label',
})`${withThemes(SearchSortByLabelTheme)}`;

export const CustomSortBy = ({ items, refine }) => (
  <SearchSortByList>
    {
      items.map(({ isRefined, label, value }) => (
        <SearchSortByItem key={value}>
          <SearchSortByButton
            className={isRefined ? 'refined' : ''}
            onClick={(e) => { e.preventDefault(); refine(value); }}
          >
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

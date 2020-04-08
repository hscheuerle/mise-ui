import React from 'react';
import PropTypes from 'prop-types';
import { connectCurrentRefinements } from 'react-instantsearch-dom';
import styled from 'styled-components';

import { color, font, fontSize } from '../../styles';

const StyledClearRefinements = styled.button`
  color: ${color.eclipse};
  font: ${fontSize.md}/1 ${font.pnr};

  &[disabled] {
    display: none;
  }

  &:hover {
    color: ${color.mint};
    cursor: pointer;
  }
`;

const ClearRefinements = ({ handleClick, items, refine }) => (
  <StyledClearRefinements
    onClick={() => {
      refine(items);
      if (handleClick) handleClick();
    }}
    disabled={!items.length}
    type="button"
  >
    Clear filters
  </StyledClearRefinements>
);

ClearRefinements.propTypes = {
  handleClick: PropTypes.func,
  items: PropTypes.array.isRequired,
  refine: PropTypes.func.isRequired,
};

ClearRefinements.defaultProps = {
  handleClick: null,
};

const CustomClearRefinements = connectCurrentRefinements(ClearRefinements);

const SearchClearRefinements = ({ handleClick }) => (
  <CustomClearRefinements handleClick={handleClick} />
);

SearchClearRefinements.propTypes = {
  handleClick: PropTypes.func,
};

SearchClearRefinements.defaultProps = {
  handleClick: null,
};

export default SearchClearRefinements;

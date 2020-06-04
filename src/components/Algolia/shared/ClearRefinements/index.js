import React from 'react';
import PropTypes from 'prop-types';
import { connectCurrentRefinements } from 'react-instantsearch-dom';
import styled from 'styled-components';

import { color, font, fontSize, lineHeight, spacing } from '../../../../styles';

const StyledClearRefinements = styled.button`
  color: ${color.eclipse};
  font: ${fontSize.md}/${lineHeight.sm} ${font.pnr};
  margin-bottom: ${spacing.xsm};

  &[disabled] {
    display: none;
  }

  &:hover {
    color: ${color.mint};
    cursor: pointer;
  }
`;

export const CustomClearRefinements = ({ handleClick, items, refine }) => (
  <StyledClearRefinements
    className="clear-refinements-button"
    disabled={!items.length}
    onClick={() => {
      refine(items);
      if (handleClick) handleClick();
    }}
    type="button"
  >
    Clear filters
  </StyledClearRefinements>
);

CustomClearRefinements.propTypes = {
  handleClick: PropTypes.func,
  items: PropTypes.array.isRequired,
  refine: PropTypes.func.isRequired,
};

CustomClearRefinements.defaultProps = {
  handleClick: null,
};

export default connectCurrentRefinements(CustomClearRefinements);

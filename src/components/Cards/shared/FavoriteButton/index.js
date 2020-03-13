import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { color, spacing } from '../../../../styles';
import { FavoriteRibbon } from '../../../DesignTokens/Icon';

const StyledFavoriteButton = styled.button`
  flex-shrink: 0;
  margin-top: ${spacing.xxsm};
  stroke: currentColor;
  fill: transparent;

  [class*="ribbon"] {
    fill: transparent;
    transition: .1s all ease-in-out;
  }

  &:hover {
    [class*="ribbon"] {
      fill: ${color.eclipse};
    }
  }

  [class*="vertical-line"],
  [class*="horizontal-line"] {
    stroke: ${color.white};
  }

  ${props => props.isFavorited && css`
    [class*="ribbon"] {
      fill: ${color.eclipse};
    }

    [class*="vertical-line"],
    [class*="horizontal-line"] {
      stroke: ${color.eclipse};
    }

    &:hover {
      [class*="horizontal-line"] {
        stroke: ${color.white};
      }

      [class*="vertical-line"] {
        stroke: ${color.eclipse};
      }
    }
  `}
`;

const FavoriteButton = ({ isFavorited, onClick }) => (
  <StyledFavoriteButton
    isFavorited={isFavorited}
    onClick={onClick}
  >
    <FavoriteRibbon
      ariaHidden="true"
      ariaLabel={isFavorited ? 'Remove from favorites' : 'Save to favorites'}
      className="favorite-ribbon"
    />
  </StyledFavoriteButton>
);

FavoriteButton.propTypes = {
  isFavorited: PropTypes.bool,
  onClick: PropTypes.func,
};

FavoriteButton.defaultProps = {
  isFavorited: true,
  onClick: null,
};

export default FavoriteButton;

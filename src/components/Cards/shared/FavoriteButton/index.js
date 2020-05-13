import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, spacing } from '../../../../styles';
import { FavoriteRibbon } from '../../../DesignTokens/Icon';

const StyledFavoriteButton = styled.button`
  flex-shrink: 0;
  margin-top: -${spacing.xxsm};
  padding: ${spacing.xsm} 0 0 ${spacing.xsm};

  [class*="ribbon"] {
    fill: transparent;
    transition: 0.1s all ease-in-out;
  }

  [class*="vertical-line"],
  [class*="horizontal-line"] {
    stroke: transparent;
  }

  @media(hover: hover) {
    &:hover {
      [class*="ribbon"] {
        fill: ${color.eclipse};
        transition: 0.1s all ease-in-out;
      }
    }
  }

  &.favorited {
    [class*="ribbon"] {
      fill: ${color.eclipse};
    }

    [class*="vertical-line"],
    [class*="horizontal-line"] {
      stroke: ${color.eclipse};
      transition: 0.1s all ease-in-out;
    }

    @media(hover: hover) {
      &:hover {
        [class*="horizontal-line"] {
          stroke: transparent;
          transition: 0.1s all ease-in-out;
        }

        [class*="vertical-line"] {
          stroke: ${color.eclipse};
        }
      }
    }
  }
`;

/**

The Favorite Button allows users to add or remove a piece of content from their
favorites.

Favorite Buttons appear on all Standard Cards for document types that
are currently ‘likeable’:
<ul>
<li>Recipe</li>
<li>Equipment Review</li>
<li>Taste Test</li>
<li>Clip</li>
<li>Episode</li>
<li>How-to</li>
</ul>

-----

<b>States:</b>
<ul>
<li>Default (not bookmarked)</li>
<li>Hover</li>
<li>Hover is a plus on a default button</li>
<li>Hover is a minus on a bookmarked button</li>
<li>Favorited</li>
</ul>

-----

Coming soon: Environmental theming changes some colors, but not dimensions, of a favorite button
In a light-themed environment, the favorite button uses a dark stroke
On a dark-themed environment, the favorite button uses a light stroke

*/

const FavoriteButton = ({
  isFavorited,
  objectId,
  siteKey,
  title,
}) => (
  <StyledFavoriteButton
    ariaLabel={isFavorited ? `Remove ${title} from favorites` : `Save ${title} to favorites`}
    className={`favorite-action ${isFavorited ? 'favorited' : ''}`}
    data-document-title={title}
    data-favoritable-id={objectId}
    data-origin-site={siteKey}
  >
    <FavoriteRibbon
      ariaHidden
      ariaLabel=""
      className="favorite-ribbon"
    />
  </StyledFavoriteButton>
);

FavoriteButton.propTypes = {
  isFavorited: PropTypes.bool,
  objectId: PropTypes.string.isRequired,
  siteKey: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

FavoriteButton.defaultProps = {
  isFavorited: false,
};

export default FavoriteButton;

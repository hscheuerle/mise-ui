import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { color, font, fontSize, lineHeight, spacing } from '../../../../styles';
import { Cookbook, Lock } from '../../../DesignTokens/Icon';

const StyledAttributions = styled.div`
  font: ${fontSize.md}/${lineHeight.md} ${font.pnr};
  margin-bottom: ${spacing.xsm};
  text-transform: capitalize;

  & > * {
    margin-right: ${spacing.xsm};
  }

  .attributions__content-type-wrapper {
    display: inline-block;
  }

  ${breakpoint('xs', 'lg')`
    font-size: 1.2rem;

    & > span {
      display: block;
    }

    .attributions__bullet {
      display: none;
    }
  `}
`;

const StyledLock = styled(Lock)`
  display: inline;
  height: 1rem;
  margin-right: ${spacing.xsm};
  width: 0.8rem;
`;

const StyledCookbook = styled(Cookbook)`
  margin-right: ${spacing.xsm};
  width: 1.6rem;
  height: 1.1rem;
`;

/**

An Attribution is an element of a card that gives the user more context about
the piece of content. Attributions always contain text, and on occasion
(Cookbook Collection) an icon.


<br>

-----

<br>

### Notes

Card attributions can include:

<ul>
<li>TV or Podcast Show name</li>
<li>Doc type (with or without lock depending on user state)</li>
<li>Recipe</li>
<li>Review</li>
<li>Episode</li>
<li>Author / test cook name (just one!)</li>
<li>Comment tally</li>
<li>Date (just one!)</li>
<li>Publish date</li>
<li>Last Updated date</li>
<li>Air date</li>
</ul>

<br>

-----

<br>

*/



const Attributions = ({
  className,
  contentType,
  displayCookbook,
  displayLockIcon,
  commentCount,
  displayCommentCount,
  shopPrices,
}) => (
  <StyledAttributions>
    <div className="attributions__content-type-wrapper">
      { displayLockIcon ? <StyledLock className="lock-icon" fill={`${color.nobel}`} /> : null }
      { contentType === 'Cookbook Collection' || displayCookbook ? (
        <StyledCookbook
          className={className}
        />
      ) : null }
      {!shopPrices ? <span>{contentType}</span> : null}
      {
        shopPrices ? (
          <span>
            {
              shopPrices.salePrice ? (
                <span>
                  <ins>
                    {`$${shopPrices.salePrice} `}
                  </ins>
                  <del>
                    {`$${shopPrices.price}`}
                  </del>
                </span>
              ) : `$${shopPrices.price}`
            }
          </span>
        ) : null
      }
    </div>
    { displayCommentCount && commentCount > 0 ? (
      <>
        <span className="attributions__bullet">•</span>
        <span>{commentCount} {commentCount === 1 ? 'Comment' : 'Comments' }</span>
      </>
    ) : null }
  </StyledAttributions>
);

Attributions.propTypes = {
  className: PropTypes.string,
  commentCount: PropTypes.number,
  contentType: PropTypes.string.isRequired,
  displayLockIcon: PropTypes.bool,
  displayCommentCount: PropTypes.bool,
  displayCookbook: PropTypes.bool,
  shopPrices: PropTypes.object,
};

Attributions.defaultProps = {
  className: '',
  commentCount: null,
  displayCommentCount: false,
  displayCookbook: false,
  displayLockIcon: false,
  shopPrices: null,
};

export default Attributions;

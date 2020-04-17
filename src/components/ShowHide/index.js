import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import { Cookbook, Plus } from '../DesignTokens/Icon/svgs';
import { color, font, fontSize, letterSpacing, spacing } from '../../styles';

const ShowHideDivWrapper = styled.div``;
const ShowHideFieldsetWrapper = styled.fieldset``;

const ShowHideButton = styled.button`
  align-items: center;
  border: none;
  display: flex;
  font: ${fontSize.md}/1 ${font.pnb};
  justify-content: space-between;
  letter-spacing: ${letterSpacing.md};
  margin: 0 0 ${spacing.xsm};
  padding: ${spacing.xsm} ${spacing.xxsm} ${spacing.xsm} 0;
  text-transform: uppercase;
  width: 100%;

  &:hover {
    cursor: pointer;

    svg {
      fill: ${color.mint};
    }
  }

  ${breakpoint('xlg')`
    width: 85%;
  `}
`;

const ShowHideLabelWrapper = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: flex-start;

  ${({ hasIcon }) => (
    hasIcon ? `
      legend {
        max-width: 10rem;
      }
    ` : ''
  )}

  svg {
    margin: 0 0 0.2rem 1rem;
    max-width: 1.6rem;
    min-height: 1.2rem;
    width: 1.6rem;
  }
`;

const ShowHideSvgWrapper = styled.div`
  height: 2rem;
  max-height: 2rem;
  max-width: 2rem;
  width: 2rem;

  svg {
    height: 100%;
    transition: all 0.2s ease;
    width: 100%;

    ${({ isExpanded }) => (isExpanded ? `
      transform: rotate(90deg);

      rect {
        &:first-child {
          opacity: 0;
        }
      }
    ` : '')}
  }
`;

const ShowHideContent = styled.div`
  display: ${({ hidden }) => (hidden ? 'none' : 'block')};
`;

const icons = {
  cookbook: Cookbook,
};

function ShowHide({ children, icon, isFieldset, isHidden, label }) {
  const [hidden, toggleHidden] = useState(isHidden);
  const ShowHideWrapper = isFieldset ? ShowHideFieldsetWrapper : ShowHideDivWrapper;
  const Icon = icon ? icons[icon] : null;
  return (
    <ShowHideWrapper>
      <ShowHideButton
        aria-controls={`show-hide--${label.split(' ').join('')}`}
        aria-expanded={!hidden}
        className="show-hide__expand-collapse-button"
        onClick={() => toggleHidden(!hidden)}
      >
        {
          isFieldset ? (
            <ShowHideLabelWrapper hasIcon={icon}>
              <legend>{label}</legend>
              {Icon ? <Icon className={`show-hide__icon--${icon}`} /> : null}
            </ShowHideLabelWrapper>
          ) : label
        }
        <ShowHideSvgWrapper isExpanded={!hidden}>
          <Plus />
        </ShowHideSvgWrapper>
      </ShowHideButton>
      <ShowHideContent id={`show-hide--${label.split(' ').join('')}`} hidden={hidden ? true : null}>
        {children}
      </ShowHideContent>
    </ShowHideWrapper>
  );
}

ShowHide.propTypes = {
  /** Content that will be hidden by expand collapse behavior. */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  /** Unique id string for svg icon to render next to label */
  icon: PropTypes.string,
  /** For accessability we need a fieldset version of this component. */
  isFieldset: PropTypes.bool,
  /** Sets initial state of the hidden content. */
  isHidden: PropTypes.bool,
  /** Clickable text that appears in button next to plus/minus icon. */
  label: PropTypes.string.isRequired,
};

ShowHide.defaultProps = {
  icon: null,
  isFieldset: false,
  isHidden: false,
};

export default ShowHide;

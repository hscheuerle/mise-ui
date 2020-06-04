import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import { Content, Cookbook, Plus, Sort } from '../DesignTokens/Icon/svgs';
import { color, font, fontSize, letterSpacing, spacing, withThemes } from '../../styles';

const AccordionDivWrapper = styled.div``;
const AccordionFieldsetWrapper = styled.fieldset``;

const AccordionButtonTheme = {
  default: css`
    align-items: center;
    border: none;
    display: flex;
    font: ${fontSize.md}/1 ${font.pnb};
    justify-content: space-between;
    letter-spacing: ${letterSpacing.md};
    padding: ${spacing.xsm} ${spacing.xxsm} ${spacing.xsm} 0;
    text-transform: uppercase;
    width: 100%;

    @media(hover: hover) {
      &:hover {
        cursor: pointer;

        svg {
          fill: ${color.mint};
        }
      }
    }

    ${breakpoint('xlg')`
      width: 85%;
    `}
  `,
  kids: css`
    font: ${fontSize.xl}/1 ${font.cwf};
    text-transform: lowercase;

    ${breakpoint('xlg')`
      width: 100%;
    `}
  `,
  light: css`
  `,
};

const AccordionButton = styled.button`
  ${withThemes(AccordionButtonTheme)}
`;

const AccordionLabelWrapperTheme = {
  default: css`
    align-items: flex-end;
    display: flex;

    ${({ hasIcon }) => (
    hasIcon ? `
      legend {
        display: inline-block;
        margin-right: ${spacing.xsm};
        max-width: 11.25rem;
      }
    ` : ''
  )}

    svg {
      flex-shrink: 0;
      height: 1.4rem;
      margin-bottom: 0.2rem;
      width: 1.6rem;
    }
  `,
  kids: css`
    flex-direction: row-reverse;

    svg {
      margin-right: 0.5rem;
    }
  `,
};

const AccordionLabelWrapper = styled.div`
  ${withThemes(AccordionLabelWrapperTheme)}
`;

const AccordionSvgWrapper = styled.div`
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

const AccordionContent = styled.div`
  display: ${({ hidden }) => (hidden ? 'none' : 'block')};
`;

const icons = {
  content: Content,
  cookbook: Cookbook,
  sort: Sort,
};

function Accordion({ children, icon, isFieldset, isHidden, label }) {
  const [hidden, toggleHidden] = useState(isHidden);
  const AccordionWrapper = isFieldset ? AccordionFieldsetWrapper : AccordionDivWrapper;
  const Icon = icon ? icons[icon] : null;
  return (
    <AccordionWrapper>
      <AccordionButton
        aria-controls={`show-hide--${label.split(' ').join('')}`}
        aria-expanded={!hidden}
        className="show-hide__expand-collapse-button"
        onClick={() => toggleHidden(!hidden)}
      >
        {
          isFieldset ? (
            <AccordionLabelWrapper hasIcon={icon}>
              <legend>{label}</legend>
              {Icon ? <Icon className={`show-hide__icon--${icon}`} /> : null}
            </AccordionLabelWrapper>
          ) : label
        }
        <AccordionSvgWrapper isExpanded={!hidden}>
          <Plus />
        </AccordionSvgWrapper>
      </AccordionButton>
      <AccordionContent
        data-testid="accordion-content"
        id={`show-hide--${label.split(' ').join('')}`}
        hidden={hidden ? true : null}
      >
        {children}
      </AccordionContent>
    </AccordionWrapper>
  );
}

Accordion.propTypes = {
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

Accordion.defaultProps = {
  icon: null,
  isFieldset: false,
  isHidden: false,
};

export default Accordion;

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { connectNumericMenu } from 'react-instantsearch-dom';

import NumericMenu from '../../shared/NumericMenu';
import { ChefHat, Content, Cookbook, Knife, Sort, Time } from '../../../DesignTokens/Icon/svgs';
import { font, letterSpacing, spacing, withThemes } from '../../../../styles';

const RefinementListRefinements = styled.div`
  border: none;
  margin: 0;
  padding: 0;
`;

const RefinementListFieldsetTheme = {
  default: css`
    > div {
      display: flex;
      justify-content: center;
    }

    legend {
      margin-right: 2rem;
    }

    label {
      margin: 0 1rem 0;
    }

    ul {
      display: flex;
    }
  `,
};

const RefinementListFieldset = styled.fieldset`
  ${withThemes(RefinementListFieldsetTheme)}
`;

const RefinementListLegendTheme = {
  default: css`
    padding: 0 ${spacing.xxsm};

    @media(hover: hover) {
      &:hover {
        cursor: pointer;
      }
    }

    &.with-icon {
      display: flex;
      align-items: center;

      svg {
        margin-right: 0.5rem;
      }
    }
  `,
  kidsSearch: css`
    font: 2rem/1 ${font.cwf};
    letter-spacing: ${letterSpacing.md};
    text-transform: lowercase;

    svg {
      width: 1.7rem;
    }
  `,
};

const RefinementListLegend = styled.legend`
  ${withThemes(RefinementListLegendTheme)}
`;

const labelRe = /[-_]/g;
const icons = {
  chefHat: ChefHat,
  content: Content,
  cookbook: Cookbook,
  knife: Knife,
  sort: Sort,
  time: Time,
};

export const CustomBasicNumericMenu = ({
  attribute,
  icon,
  items,
  label,
  ...restProps
}) => {
  const Icon = icon ? icons[icon] : null;
  return (
    <RefinementListRefinements>
      <RefinementListFieldset>
        <div>
          <RefinementListLegend
            className={Icon ? 'with-icon' : null}
          >
            {icons[icon] ? <Icon /> : null}
            {label || attribute.replace(labelRe, ' ')}
          </RefinementListLegend>
          <NumericMenu
            attribute={attribute}
            items={items}
            {...restProps}
          />
        </div>
      </RefinementListFieldset>
    </RefinementListRefinements>
  );
};

CustomBasicNumericMenu.propTypes = {
  attribute: PropTypes.string.isRequired,
  icon: PropTypes.string,
  items: PropTypes.array,
  label: PropTypes.string,
};

CustomBasicNumericMenu.defaultProps = {
  icon: null,
  items: null,
  label: null,
};

const NumericMenuBasic = ({ attribute, items, ...restProps }) => (
  items.length > 0 && (
    <CustomBasicNumericMenu
      attribute={attribute}
      items={items}
      {...restProps}
    />
  )
);

NumericMenuBasic.propTypes = {
  /** Algolia attribute that is used to pull refinement values. */
  attribute: PropTypes.string.isRequired,
  /** Algolia attribute, list of refinement values. */
  items: PropTypes.array.isRequired,
  /** Unique id string for svg icon to render next to label */
  icon: PropTypes.string,
  /** Legend text for the fieldset */
  label: PropTypes.string,
  /** Initial number of refinement filters that are visible in the refinement list. */
  transformItems: PropTypes.func,
};

NumericMenuBasic.defaultProps = {
  icon: null,
  label: null,
  transformItems: null,
};

export default connectNumericMenu(NumericMenuBasic);

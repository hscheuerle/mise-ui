import React from 'react';
import styled from 'styled-components';
import { connectCurrentRefinements } from 'react-instantsearch-dom';

import { Close } from '../DesignTokens/Icon/svgs';
import { color, font, fontSize } from '../../styles';

const RefinementsList = styled.ul`
  display: flex;
  padding: 1.2rem 0 1rem 0;
  margin: 0;
`;

const RefinementListItem = styled.li`
  margin-right: 1.6rem;
`;

const Refinement = styled.div`
  display: flex;
`;

const RefinementLabel = styled.p`
  font: ${fontSize.md}/1 ${font.pnr};
  color: ${color.eclipse};
  margin-right: 0.8rem;
`;

const RefinementClearButton = styled.button`
  font: ${fontSize.md}/1 ${font.pnr};
  color: ${color.nobel};
  height: 0.8rem;
  width: 0.8rem;
`;

const CurrentRefinements = ({ items, refine }) => (
  <RefinementsList>
    {
      items.map(category => (
        category.items.map(({ label, value }) => (
          <RefinementListItem key={`clear-refinement--${label}`}>
            <Refinement>
              <RefinementLabel>
                {label}
              </RefinementLabel>
              <RefinementClearButton onClick={(e) => { e.preventDefault(); refine(value); }}>
                <Close fill={color.nobel} />
              </RefinementClearButton>
            </Refinement>
          </RefinementListItem>
        ))
      ))
    }
  </RefinementsList>
);

const CustomCurrentRefinements = connectCurrentRefinements(CurrentRefinements);

export default () => <CustomCurrentRefinements />;
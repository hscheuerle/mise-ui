import React from 'react';
import styled from 'styled-components';
import { withKnobs } from '@storybook/addon-knobs';

import Accordion from './index';

export default {
  title: 'Components|Accordion',
  component: Accordion,
  decorators: [withKnobs],
};

const AccordionWrapper = styled.div`
  max-width: 30rem;
`;

export const Default = () => (
  <AccordionWrapper>
    <Accordion label="button">
      <p>Hidden Content</p>
    </Accordion>
  </AccordionWrapper>
);

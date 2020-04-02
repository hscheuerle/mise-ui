import React from 'react';
import styled from 'styled-components';
import { ShowHide } from '../ShowHide';
import { withKnobs } from "@storybook/addon-knobs";

export default {
  title: 'Components|ShowHide',
  component: ShowHide,
  decorators: [withKnobs],
};

const ShowHideWrapper = styled.div`
  max-width: 30rem;
`;

export const Default = () => (
  <ShowHideWrapper>
    <ShowHide label="button">
      <p>Hidden Content</p>
    </ShowHide>
  </ShowHideWrapper>
);

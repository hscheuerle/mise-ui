import React from 'react';
import { ShowHide } from '../ShowHide';
import { withKnobs } from "@storybook/addon-knobs";

export default {
  title: 'Components|ShowHide',
  component: ShowHide,
  decorators: [withKnobs],
};

export const Default = () => (
  <ShowHide label="button">
    <p>Hidden Content</p>
  </ShowHide>
);

import React from 'react';

import styled, { css, ThemeProvider } from 'styled-components';
import { action } from '@storybook/addon-actions';

import LoadingCard from './index';
import { breakpoints, color, spacing, withThemes } from '../../../styles';

export default {
  title: 'Components|Cards/LoadingCard',
  component: LoadingCard,
};

const StoryWrapperTheme = {
  default: css`
    padding: 12rem;
  `,
  dark: css`
    background-color: ${color.nero};
  `,
}

const StoryWrapper = styled.div`
  ${withThemes(StoryWrapperTheme)}
`;

export const StandardCard = () => (
  <ThemeProvider theme={{breakpoints, mode: 'dark'}}>
    <StoryWrapper>
      <LoadingCard type="standard" />
    </StoryWrapper>
  </ThemeProvider>
);

export const FeatureCard = () => (
  <LoadingCard type="feature" />
);

export const FeatureCardWide = () => (
  <LoadingCard type="feature-wide" />
);

export const HeroCard = () => (
  <LoadingCard type="hero" />
);

export const TallCard = () => (
  <LoadingCard type="tall" />
);

export const QueueCard = () => (
  <LoadingCard type="queue" />
);

export const PersonCard = () => (
  <LoadingCard type="person" />
);

export const PodcastEpisodeCard = () => (
  <LoadingCard type="podcast-episode" />
);

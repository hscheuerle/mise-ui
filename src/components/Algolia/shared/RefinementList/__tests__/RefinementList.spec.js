import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';

import { CustomRefinementList } from '../index';
import breakpoints from '../../../../../styles/breakpoints';

describe('RefinementList component should', () => {
  const renderComponent = (props) => {
    const testRenderer = render(
      <ThemeProvider theme={{ breakpoints }}>
        <CustomRefinementList
          {...props}
          currentRefinement={[]}
          refine={() => {}}
        />
      </ThemeProvider>,
    );
    return testRenderer.root;
  };

  const items = [
    {
      isRefined: false,
      label: 'American',
      value: 'American',
    },
    {
      isRefined: false,
      label: 'Asian',
      value: 'Asian',
    },
    {
      isRefined: false,
      label: 'Italian',
      value: 'Italian',
    },
    {
      isRefined: false,
      label: 'Mexican',
      value: 'Mexican',
    },
  ];

  it('render a ShowMoreLess component for non-search_site_list attributes', () => {
    renderComponent({ attribute: 'search_cuisine_list', items });
    expect(screen.getByText('+ Show More'));
  });

  it('not render a ShowMoreLess component for search_site_list attribute', () => {
    renderComponent({ attribute: 'search_site_list' });
    expect(!screen.queryByText('+ Show More'));
  });

  it('render a RefinementFilter for each item in items prop', () => {
    renderComponent({ attribute: 'search_cuisine_list', items });
    expect(screen.getByText('American'));
    expect(screen.getByText('Asian'));
    expect(screen.getByText('Italian'));
    expect(screen.getByText('Mexican'));
  });
});

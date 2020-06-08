import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';

import RefinementFilter from '../RefinementFilter';
import breakpoints from '../../../../../styles/breakpoints';

describe('RefinementFilter component should', () => {
  const renderComponent = (props) => {
    const testRenderer = render(
      <ThemeProvider theme={{ breakpoints }}>
        <RefinementFilter
          {...props}
          refine={() => {}}
        />
      </ThemeProvider>,
    );
    return testRenderer.root;
  };

  it('render a Checkmark when refined', () => {
    renderComponent({
      attribute: 'search_cuisine_list',
      isRefined: true,
      label: 'Asian',
      value: 'Asian',
    });
    expect(screen.getByTestId('refinement-filter__checkmark'));
  });

  it('not render a Checkmark when unrefined', () => {
    renderComponent({
      attribute: 'search_cuisine_list',
      isRefined: false,
      label: 'American',
      value: 'American',
    });
    expect(!screen.queryByTestId('refinement-filter__checkmark'));
  });

  it('render a count when includeCount prop is true', () => {
    renderComponent({
      attribute: 'search_cuisine_list',
      count: 100,
      includeCount: true,
      isRefined: false,
      label: 'Mexican',
      value: 'Mexican',
    });
    expect(screen.getByTestId('refinement-filter__count'));
  });

  it('not render a count when includeCount prop is false', () => {
    renderComponent({
      attribute: 'search_cuisine_list',
      includeCount: false,
      isRefined: false,
      label: 'Indian',
      value: 'Indian',
    });
    expect(!screen.queryByTestId('refinement-filter__count'));
  });
});

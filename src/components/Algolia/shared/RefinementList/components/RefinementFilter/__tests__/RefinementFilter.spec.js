import React from 'react';
import { ThemeProvider } from 'styled-components';
import TestRenderer from 'react-test-renderer';
import 'jest-styled-components';

import Badge from '../../../../../../Badge';
import RefinementFilter from '../RefinementFilter';
import { Checkmark } from '../../../../../../DesignTokens/Icon/svgs';
import breakpoints from '../../../../../../../styles/breakpoints';

describe('RefinementFilter component should', () => {
  const componentSetup = (props) => {
    const testRenderer = TestRenderer.create(
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
    const testInstance = componentSetup({
      attribute: 'search_cuisine_list',
      isRefined: true,
      label: 'Asian',
      value: 'Asian',
    });
    expect(testInstance.findByType(Checkmark));
  });

  it('not render a Checkmark when unrefined', () => {
    const testInstance = componentSetup({
      attribute: 'search_cuisine_list',
      isRefined: false,
      label: 'American',
      value: 'American',
    });
    expect(testInstance.findAllByType(Checkmark).length).toBe(0);
  });

  it('render a Badge for search_site_list attribute', () => {
    const testInstance = componentSetup({
      attribute: 'search_site_list',
      isRefined: false,
      label: 'America\'s Test Kitchen',
      value: 'atk',
    });
    expect(testInstance.findByType(Badge));
  });

  it('not render a Badge for non-search_site_list attribute', () => {
    const testInstance = componentSetup({
      attribute: 'search_cuisine_list',
      isRefined: false,
      label: 'Italian',
      value: 'Italian',
    });
    expect(testInstance.findAllByType(Badge).length).toBe(0);
  });

  it('render a count when includeCount prop is true', () => {
    const testInstance = componentSetup({
      attribute: 'search_cuisine_list',
      includeCount: true,
      isRefined: false,
      label: 'Mexican',
      value: 'Mexican',
    });
    expect(testInstance.findByProps({ className: 'search-refinement-filter__count' }));
  });

  it('not render a count when includeCount prop is false', () => {
    const testInstance = componentSetup({
      attribute: 'search_cuisine_list',
      includeCount: false,
      isRefined: false,
      label: 'Indian',
      value: 'Indian',
    });
    expect(testInstance.findAllByProps({ className: 'search-refinement-filter__count' }).length).toBe(0);
  });
});

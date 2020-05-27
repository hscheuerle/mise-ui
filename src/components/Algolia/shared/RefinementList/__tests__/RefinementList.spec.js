import React from 'react';
import { ThemeProvider } from 'styled-components';
import TestRenderer from 'react-test-renderer';
import 'jest-styled-components';

import RefinementFilter from '../components/RefinementFilter/RefinementFilter';
import ShowMoreLess from '../../../../ShowMoreLess';
import { CustomRefinementList } from '../index';
import breakpoints from '../../../../../styles/breakpoints';

describe('RefinementList component should', () => {
  const componentSetup = (props) => {
    const testRenderer = TestRenderer.create(
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

  it('render a ShowMoreLess component for non-search_site_list attributes', () => {
    const testInstance = componentSetup({
      attribute: 'search_cuisine_list',
      items: [
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
      ],
    });
    expect(testInstance.findByType(ShowMoreLess));
  });

  it('not render a ShowMoreLess component for search_site_list attribute', () => {
    const testInstance = componentSetup({ attribute: 'search_site_list' });
    expect(testInstance.findAllByType(ShowMoreLess).length).toBe(0);
  });

  it('render a RefinementFilter for each item in items prop', () => {
    const testInstance = componentSetup({
      attribute: 'search_cuisine_list',
      items: [
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
      ],
    });
    expect(testInstance.findAllByType(RefinementFilter).length).toBe(4);
  });
});

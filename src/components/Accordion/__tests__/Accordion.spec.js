import React from 'react';
import { ThemeProvider } from 'styled-components';
import TestRenderer from 'react-test-renderer';
import 'jest-styled-components';

import Accordion from '../index';
import { Plus } from '../../DesignTokens/Icon/svgs';
import breakpoints from '../../../styles/breakpoints';

describe('Accordion component', () => {
  const componentSetup = (props) => {
    const testRenderer = TestRenderer.create(
      <ThemeProvider
        theme={{ breakpoints }}
      >
        <Accordion {...props}>
          <p>Test content</p>
        </Accordion>
      </ThemeProvider>,
    );
    return testRenderer.root;
  };

  it('renders a Plus icon', () => {
    const testInstance = componentSetup({ label: 'Test' });
    expect(testInstance.findByType(Plus));
  });

  it('renders a label icon', () => {
    const testInstance = componentSetup({ isFieldset: true, icon: 'cookbook', label: 'Test' });
    expect(
      testInstance.findByProps({ className: 'show-hide__icon--cookbook' }));
  });

  it('renders content when expanded', () => {
    const testInstance = componentSetup({ isHidden: false, label: 'Test' });
    expect(testInstance.findByProps({ id: 'show-hide--Test' }).props.hidden).toBe(null);
  });

  it('hides content when collapsed', () => {
    const testInstance = componentSetup({ isHidden: true, label: 'Test' });
    expect(testInstance.findByProps({ id: 'show-hide--Test' }).props.hidden).toBe(true);
  });
});

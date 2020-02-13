import React from 'react';
import Spacing from './Spacing';
import { ImportCode } from '../utils';

export default {
  title: 'Design Tokens|Spacing',
  component: Spacing,
};

export const All = () => {
  return (
    <>
      <ImportCode>{`import { spacing } from '../../styles'`};</ImportCode>
      <Spacing heading="Spacing values" description="Margins and padding values" />
    </>
  );
}

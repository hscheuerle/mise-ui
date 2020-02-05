import React from 'react';
import Colors from './Colors';

export default {
  title: 'Design Tokens|Colors',
  component: Colors,
};

export const All = () => {
  return (
    <>
      <Colors tokenGroup="globalColor" heading="Global colors" description="Lorem ipsum dolor sit amet" />
      <Colors tokenGroup="atkColor" heading="ATK Colors" description="Lorem ipsum dolor sit amet" />
      <Colors tokenGroup="ccoColor" heading="CCO Colors" description="Lorem ipsum dolor sit amet" />
      <Colors tokenGroup="cioColor" heading="CIO Colors" description="Lorem ipsum dolor sit amet" />
    </>
  );
}

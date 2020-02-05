import React from 'react';
import Colors from './Colors';

export default {
  title: 'Design Tokens|Colors',
  component: Colors,
};

export const All = () => {
  return (
    <Colors tokenGroup="color" heading="All colors" description="Lorem ipsum dolor sit amet" />
  );
}

export const ATK = () => {
  return (
    <>
      <Colors tokenGroup="atkColor" heading="ATK Colors" description="Lorem ipsum dolor sit amet" />
    </>
  );
}

export const CCO = () => {
  return (
    <Colors tokenGroup="ccoColor" heading="CCO Colors" description="Lorem ipsum dolor sit amet" />
  );
}

export const CIO = () => {
  return (
    <Colors tokenGroup="cioColor" heading="CIO Colors" description="Lorem ipsum dolor sit amet" />
  );
}

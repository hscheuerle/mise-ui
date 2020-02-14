import React from 'react';
import PropTypes from 'prop-types';
import * as Icons from './svgs';

function Icon(props) {
  const { children } = props;
  return (
    <>
      {children}
    </>
  );
}

Icon.propTypes = {
  children: PropTypes.node.isRequired,
};

export const ATK = props => (
  <Icon {...props}>
    <Icons.Atk />
  </Icon>
);

export const CIO = props => (
  <Icon {...props}>
    <Icons.Cio />
  </Icon>
);

export const CCO = props => (
  <Icon {...props}>
    <Icons.Cco />
  </Icon>
);
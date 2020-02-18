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
  /** children are typically svgs */
  children: PropTypes.node.isRequired,
  // but what about hover states?
  fill: PropTypes.string,
  stroke: PropTypes.string,
};

export const BreadcrumbArrow = props => (
  <Icon>
    <Icons.BreadcrumbArrow
      fill={props.fill}
    />
  </Icon>
)

export const FavoriteRibbon = props => (
  <Icon>
    <Icons.FavoriteRibbon
      fill={props.fill}
      stroke={props.stroke}
    />
  </Icon>
)

export const VideoPlay = props => (
  <Icon>
    <Icons.VideoPlay
      fill={props.fill}
    />
  </Icon>
)
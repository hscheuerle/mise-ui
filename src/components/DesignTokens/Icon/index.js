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
};

export const BreadcrumbArrow = props => (
  <Icon>
    <Icons.BreadcrumbArrow
    />
  </Icon>
)

export const FavoriteRibbon = props => (
  <Icon>
    <Icons.FavoriteRibbon
      className={props.className}
      role={props.role}
      aria-label={props.ariaLabel}
    />
  </Icon>
)

export const Lock = props => (
  <Icon>
    <Icons.Lock
      className={props.className}
      fill={props.fill}
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

export const Collection = props => (
  <Icon>
    <Icons.Collection
      fill={props.fill}
    />
  </Icon>
)

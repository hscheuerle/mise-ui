import React from 'react';
import { Badge } from '../Badge';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { color } from '../../styles';

export default {
  title: 'Components|Badge',
  component: Badge,
  decorators: [withKnobs],
}

export const ATKBadge = () => <Badge type='atk' fill={text('fill', color.transparentBlack)} />

export const CIOBadge = () => <Badge type='cio' fill={text('fill', color.transparentBlack)} />

export const CCOBadge = () => <Badge type='cco' fill={text('fill', color.transparentBlack)} />

export const KidsBadge = () => <Badge type='kids' fill={text('fill', color.transparentBlack)} />

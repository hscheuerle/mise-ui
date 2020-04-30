import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import {
  color,
  font,
  fontSize,
  lineHeight,
} from '../../../../styles';

const StyledAudioItem = styled.div.attrs({
  className: 'audio-item',
})`
  background-color: #191919;
  color: ${color.white};
  display: flex;
  margin-bottom: 2rem;
  padding: 2rem;
`;

const AudioItemTitle = styled.h4.attrs({
  className: 'audio-item__title',
})`
  font: ${fontSize.md}/${lineHeight.sm} ${font.pnb};
  padding-left: 1.4rem;
`;

const AudioItemPlay = styled.button.attrs({
  className: 'audio-item__play',
})`
  height: 1.8rem;
  position: relative;
  width: 1.8rem;

  &::after {
    content: url("data:image/svg+xml; utf8, <svg width='18px' height='18px' viewBox='0 0 18 18' xmlns='http://www.w3.org/2000/svg'><path d='M15.5615866,8.10002147 L3.87056367,0.225209313 C3.05219207,-0.33727727 2,0.225209313 2,1.12518784 L2,16.8748122 C2,17.7747907 3.05219207,18.3372773 3.87056367,17.7747907 L15.5615866,9.89997853 C16.1461378,9.44998927 16.1461378,8.55001073 15.5615866,8.10002147 L15.5615866,8.10002147 Z' fill='white'></path></svg>");
    display: block;
    height: 1.8rem;
    position: absolute;
    width: 1.8rem;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .playing &::after {
    content: url("data:image/svg+xml; utf8, <svg width='18px' height='18px' viewBox='0 0 18 18' xmlns='http://www.w3.org/2000/svg'><path d='M6,1 L3,1 C2.4,1 2,1.4 2,2 L2,16 C2,16.6 2.4,17 3,17 L6,17 C6.6,17 7,16.6 7,16 L7,2 C7,1.4 6.6,1 6,1 L6,1 Z' fill='white'></path><path d='M12,1 C11.4,1 11,1.4 11,2 L11,16 C11,16.6 11.4,17 12,17 L15,17 C15.6,17 16,16.6 16,16 L16,2 C16,1.4 15.6,1 15,1 L12,1 Z' fill='white'></path></svg>");
  }
`;

const AudioItem = ({
  id,
  subtitle,
  title,
}) => (
  <StyledAudioItem
    data-id={id}
    data-subtitle={subtitle}
    data-title={title}
  >
    <AudioItemPlay
      type="button"
    />
    <AudioItemTitle>
      {title}
    </AudioItemTitle>
  </StyledAudioItem>
);

AudioItem.propTypes = {
  id: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
};

AudioItem.defaultProps = {
  subtitle: null,
};

export default AudioItem;

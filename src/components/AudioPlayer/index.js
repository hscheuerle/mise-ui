import breakpoint from 'styled-components-breakpoint';
import React, { useEffect, useRef, useState } from 'react';
import Plyr from 'plyr';
import styled from 'styled-components';

import NextButton from './components/NextButton';
import PlayButton from './components/PlayButton';
import PrevButton from './components/PrevButton';
import './scss/plyr.scss';

import breakpoints from '../../styles/breakpoints';
import {
  color,
  font,
  fontSize,
  letterSpacing,
  lineHeight,
} from '../../styles';

const plyrOptions = { controls: ['progress', 'current-time'] };
let player;

const PlayerWrapper = styled.div`
  background-color: ${color.translucentBlack};
  color: ${color.white};
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const PlayerContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.6rem;
  width: 100%;

  ${breakpoint('md')`
    align-items: center;
    flex-direction: row;
    padding: 3rem;
  `}

  ${breakpoint('lg')`
    align-items: center;
    flex-direction: row;
  `}

  ${breakpoint('lg')`
    max-width: ${breakpoints.xlg};
  `}
`;

const TitleWrapper = styled.div`
  flex: 0 0 60%;

  ${breakpoint('md')`
    flex-basis: 30%;
  `}
`;

const Title = styled.h2`
  font: ${fontSize.lg}/${lineHeight.md} ${font.pnb};
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.h3`
  font: 1.2rem/${lineHeight.sm} ${font.pnr};
  letter-spacing: ${letterSpacing.lg};
  margin-bottom: 1rem;
  text-transform: uppercase;
`;

const MetaWrapper = styled.div`
  flex: 0 0 60%;
  margin-bottom: 1rem;

  ${breakpoint('md')`
    flex-basis: 10rem;
    margin-bottom: 0
    order: 1;
    text-align: right;
  `}
`;

const ControlsWrapper = styled.div`
  align-items: center;
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  padding: 2rem;

  ${breakpoint('md')`
    align-items: center;
    display: flex;
    flex-basis: 9.6rem;
    position: relative;
  `}
`;

const PlyrPlayer = styled.div`
  ${breakpoint('md')`
    flex-basis: 50rem;
  `}
`;

function Episode(item) {
  this.item = item;
}

Episode.prototype = {
  toPlyr() {
    return {
      type: 'audio',
      subtitle: this.subtitle,
      title: this.title,
      sources: [{ src: this.src, type: 'audio/mp3' }],
    };
  },
  get id() {
    return this.item.id;
  },
  get title() {
    return this.item.title;
  },
  get subtitle() {
    return this.item.subtitle;
  },
  get src() {
    return `https://rss.art19.com/episodes/${this.id}.mp3`;
  },
  equals(other) {
    return this.id === other.id;
  },
};

const queryItems = () => {
  const itemsList = document.querySelectorAll('.audio-item');
  if (!itemsList.length > 0) return [];

  return [].slice.call(itemsList).reduce((accum, itemEl) => {
    accum.push(new Episode(itemEl.dataset));
    return accum;
  }, []);
};

const pauseCurrentElements = () => {
  const active = document.querySelectorAll('.audio-item.playing');
  if (active.length > 0) [].slice.call(active).forEach(i => i.classList.remove('playing'));
};

const playCurrentElements = () => {
  const playerWrapper = document.querySelector('.player__wrapper');
  if (playerWrapper) {
    const { id } = playerWrapper.dataset;
    const newActive = document.querySelectorAll(`.audio-item[data-id="${id}"]`);
    if (newActive.length > 0) [].slice.call(newActive).forEach(i => i.classList.add('playing'));
  }
};

const AudioPlayer = () => {
  const items = useRef([]);
  const playerEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [idx, setIdx] = useState();

  // setIdx, making sure not to exceed either limit
  const setIndex = (newIndex) => {
    if (newIndex > items.current.length - 1) newIndex = 0;
    if (newIndex < 0) newIndex = items.current.length - 1;
    setIdx(newIndex);
  };

  // this only happens once, on mount
  useEffect(() => {
    if (!player) {
      player = new Plyr(playerEl.current, plyrOptions);
      player.on('playing', () => {
        pauseCurrentElements();
        playCurrentElements();
      });
      player.on('pause', pauseCurrentElements);
      items.current = queryItems();
      if (items.current.length > 0) setIdx(0);
    }
    return () => player.destroy();
  }, []);

  // do this when idx changes
  useEffect(() => {
    // click on DOM item, outside of player
    const handleItemClick = (evt) => {
      const el = evt.target.closest('.audio-item');
      if (!el) return;

      evt.preventDefault();
      const itemObj = new Episode(el.dataset);
      let newIndex = items.current.findIndex(i => i.equals(itemObj));
      // if you clicked the currently playing element, pause it!
      if (player.playing && itemObj.src === player.source) {
        setIsPlaying(false);
      // otherwise, set the new item and play it
      } else {
        // add a new item to the list of items
        if (newIndex === -1) {
          setIsPlaying(false);
          items.current.push(itemObj);
          newIndex = items.current.length - 1;
        }

        setIndex(newIndex);
        setIsPlaying(true);
      }
    };
    const newItem = items.current[idx];
    if (newItem) player.source = newItem.toPlyr();
    document.addEventListener('click', handleItemClick, false);
    const nextIndex = () => setIndex(idx + 1);
    player.on('ended', nextIndex);
    return () => {
      document.removeEventListener('click', handleItemClick, false);
      player.off('ended', nextIndex);
    };
  }, [idx]);

  // Do this when isPlaying changes
  useEffect(() => {
    player.togglePlay(isPlaying);
  }, [isPlaying, idx]);

  /**
   * Clicking >> or << in the controls, move fwd or back one idx
   */
  const handleDiffClick = (evt) => {
    evt.preventDefault();
    const diff = parseInt(evt.target.dataset.diff, 10);
    setIndex(idx + diff);
    setIsPlaying(true);
  };

  /**
   * Click play/pause button in player
   */
  const handlePlayToggle = (evt) => {
    evt.preventDefault();
    setIsPlaying(!isPlaying);
  };

  const item = items.current[idx];

  return (
    <PlayerWrapper
      className={`player__wrapper ${isPlaying ? 'playing' : 'paused'}`}
      data-id={item?.id}
    >
      <PlayerContent>
        <TitleWrapper>
          <Subtitle>{item?.subtitle}</Subtitle>
          <Title>{item?.title}</Title>
        </TitleWrapper>
        <MetaWrapper>
          More From
        </MetaWrapper>
        <ControlsWrapper>
          <PrevButton
            className="player__button--prev"
            onClick={handleDiffClick}
            type="button"
          />
          <PlayButton
            onClick={handlePlayToggle}
            playing={isPlaying}
          />
          <NextButton
            className="player__button--next"
            onClick={handleDiffClick}
            type="button"
          />
        </ControlsWrapper>
        <PlyrPlayer>
          <audio ref={playerEl}>
            <source src={item?.src} type="audio/mp3" />
          </audio>
        </PlyrPlayer>
      </PlayerContent>
    </PlayerWrapper>
  );
};

export default AudioPlayer;

import React, { useEffect, useState } from 'react';
import fetch from 'cross-fetch';

import AudioPlayer from './index';
import AudioItem from './components/AudioItem';

export default {
  title: 'Components|AudioPlayer',
  component: AudioPlayer,
};

export const WithList = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        'https://www-staging.americastestkitchen.com/api/v6/podcasts',
        {
          method: 'GET',
        },
      );
      const episodes = await response.json().catch((err) => {
        console.error('REQUEST RESPONSE.JSON PARSING ERROR', url); // eslint-disable-line
        console.error(err); // eslint-disable-line
      });
      setEpisodes(episodes.slice(0, 10).map(({
        episodeID: id,
        title,
        episode,
        description,
      }) => ({
        id,
        title,
        description,
        subtitile: episode?.season?.title,
      })));
    }
    fetchData();
  }, []);

  return episodes.length > 0 ? (
    <>
      <AudioPlayer />
      { episodes.map(episode => (
        <AudioItem
          key={episode.id}
          {...episode}
        />
      ))}
    </>
  ) : <h2>Loading...</h2>;
};

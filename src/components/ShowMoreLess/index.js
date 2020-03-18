import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { color, font } from '../../styles';

const ShowMoreLessInitial = styled.div`
  margin-bottom: 1.8rem;
`;

const ShowMoreLessRest = styled.div`
  margin-bottom: 1.2rem;
`;

const ShowMoreLessButton = styled.button`
  color: ${color.nobel};
  font: 1.2rem/1 ${font.pnb};
  letter-spacing: 1.2px;
  text-transform: uppercase;
`;

const ShowMoreLess = ({ initialCount, items, key }) => {
  const [hidden, toggleHidden] = useState(true);
  let initialItems = null;
  let restItems = null;
  if (items.length > initialCount) {
    initialItems = items.slice(0, initialCount);
    restItems = items.slice(initialCount);
  }
  return (
    <div>
      {
        initialItems && restItems ? (
          <>
            <ShowMoreLessInitial>
              {initialItems.map(item => item)}
            </ShowMoreLessInitial>
            <ShowMoreLessRest
              hidden={hidden || null}
              id={`show-hide--${key}`}
            >
              {restItems.map(item => item)}
            </ShowMoreLessRest>
            <ShowMoreLessButton
              aria-controls={`show-hide--${key}`}
              aria-expanded={!hidden}
              onClick={() => { toggleHidden(!hidden); }}
            >
              {hidden ? '+ Show More' : '- Show Less'}
            </ShowMoreLessButton>
          </>
        ) : (
          <>
            {items.map(item => item)}
          </>
        )
      }
    </div>
  );
};

ShowMoreLess.propTypes = {
  /** Initial number of 'items' that render before clicking 'Show More'. */
  initialCount: PropTypes.number.isRequired,
  /** The list of 'items' to render. */
  items: PropTypes.array.isRequired,
  /** Unique idea for this ShowMoreLess. */
  key: PropTypes.string.isRequired,
};

export default ShowMoreLess;

import React from 'react';
import PropTypes from 'prop-types';
import { connectInfiniteHits } from 'react-instantsearch-dom';
import Button from '../Button';

const ShowMoreResults = ({
  className,
  hasMore,
  refineNext,
  resultsCount,
}) => {
  return (
    <Button
      className={className}
      disabled={!hasMore}
      onClick={refineNext}
    >
      Show {`${resultsCount}`} more results
    </Button>
  );
};

ShowMoreResults.propTypes = {
  className: PropTypes.string,
  resultsCount: PropTypes.number.isRequired,
}

ShowMoreResults.defaultProps = {
  className: '',
};

const CustomShowMoreResults = connectInfiniteHits(ShowMoreResults);

export default CustomShowMoreResults;

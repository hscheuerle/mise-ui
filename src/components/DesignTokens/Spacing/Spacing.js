import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, font, fontSize, lineHeight, spacing } from '../../../styles';
import { TokenTable } from '../utils';

const TokenGroup = styled.div`
  margin: 0 auto;
  padding: ${spacing.md} ${spacing.md} ${spacing.xlg} ${spacing.md};
  max-width: 80rem;

  h2 {
    color: ${color.eclipse};
    font: ${fontSize.lg}/${lineHeight.md} ${font.pnb};
  }

  p {
    font: ${fontSize.sm}/${lineHeight.md} ${font.pnr};
  }
`;

export default function Spacing({
  heading,
  description,
  notes,
}) {
  const tokensArray = [];
  const tokens = spacing;

  Object.keys(tokens).forEach((token) => {
    const tokenValue = tokens[token];
    if (tokenValue) {
      tokensArray.push(
        <>
          <td>{`spacing.${token}`}</td>
          <td>{tokenValue}</td>
          <td>
            <span style={{width: `${tokenValue}`, display: 'inline-block', backgroundColor: `${color.silver}`, height: 1 + 'rem'}}></span>
          </td>
          <td>{notes}</td>
        </>
      );
    }
  });

  return (
    <TokenGroup>
      <h2>{heading}</h2>
      <p>{description}</p>
      <TokenTable tokens={tokensArray} />
    </TokenGroup>
  );
};

Spacing.propTypes = {
  description: PropTypes.string,
  heading: PropTypes.string,
  notes: PropTypes.string,
};

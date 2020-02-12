import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, font, fontSize, lineHeight, spacing } from '../../../styles';

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

const TokenTable = styled.table`
  border-collapse: collapse;
  font: ${fontSize.md}/${lineHeight.lg} ${font.pnr};
  width: 100%;

  th {
    background-color: ${color.whiteSmoke};
    font: ${fontSize.sm}/${lineHeight.sm} ${font.pnb};
    text-align: left;
  }

  th,
  td {
    padding: ${spacing.xsm};
  }

  tr {
    border-bottom: 1px solid ${color.miseUiGrayBorder};
    padding-left: ${spacing.md};
    padding-right: ${spacing.md};
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
      <TokenTable>
        <thead>
          <tr>
            <th>Token</th>
            <th>Value</th>
            <th>Example</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {tokensArray.map((el, i) => (
            <tr key={i}>{el}</tr>
          ))}
        </tbody>
      </TokenTable>
    </TokenGroup>
  );
};

Spacing.propTypes = {
  description: PropTypes.string,
  heading: PropTypes.string,
  notes: PropTypes.string,
};

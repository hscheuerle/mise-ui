import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, font, fontSize, spacing } from '../../../styles';

const SpacingGroup = styled.div`
  margin: 0 auto;
  padding-bottom: 4rem;
  padding-top: 2rem;
  width: 60rem;

  h2 {
    color: ${color.eclipse};
    font: ${fontSize.lg}/1.5 ${font.pnb};
  }

  p {
    font: 1.4rem/1 ${font.pnr};
  }
`;

const SpacingTable = styled.table`
  border-collapse: collapse;
  font: 1.6rem/1.5 ${font.pnr};
  margin: 0 auto;
  width: 60rem;

  th {
    background-color: ${color.whiteSmoke};
    font: 1.6rem/1 ${font.pnb};
    text-align: left;
  }

  th,
  td {
    padding: ${spacing.xsm};
  }

  tr {
    border-bottom: 1px solid #EFEFEF;
    padding-left: ${spacing.md};
    padding-right: ${spacing.md};
  }
`;

export default function Spacing({
  heading,
  description,
}) {
  const tokensArray = [];
  const tokens = spacing;

  Object.keys(tokens).forEach((token) => {
    const tokenValue = tokens[token];
    if (tokenValue) {
      tokensArray.push(
        <>
          <td>{token}</td>
          <td>{tokenValue}</td>
          <td>
            <span style={{width: `${tokenValue}`, display: 'inline-block', backgroundColor: '#c2c2c2', height: 1 + 'rem'}}></span>
          </td>
        </>
      );
    }
  });

  return (
    <SpacingGroup>
      <h2>{heading}</h2>
      <p>{description}</p>
      <SpacingTable>
        <thead>
          <tr>
            <th>Token</th>
            <th>Value</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          {tokensArray.map((el, i) => (
            <tr key={i}>{el}</tr>
          ))}
        </tbody>
      </SpacingTable>
    </SpacingGroup>
  );
};

Spacing.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
};

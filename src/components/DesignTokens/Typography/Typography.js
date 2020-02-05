import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, spacing, font, fontSize } from '../../../styles';

const TypographyGroup = styled.div`
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

const TypographyTable = styled.table`
  border-collapse: collapse;
  font: 1.6rem/1.5 ${font.pnr};
  margin: 0 auto;
  min-width: 60rem;

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

const TokenName = styled.td``;

export default function Typography({
  tokenGroup,
  heading,
  description,
}) {
  const tokensArray = [];
  let tokenGroups = {
    'fontSize': fontSize,
    'font': font,
  };
  const tokens = tokenGroups[tokenGroup];

  Object.keys(tokens).forEach((token) => {
    const tokenValue = tokens[token];

    if (tokenValue) {
      tokensArray.push(
        <>
          <TokenName>{token}</TokenName>
          <TokenName>{tokenValue}</TokenName>
          {tokenGroup === 'font' ? (
            <td style={{ fontFamily: `${tokenValue}` }}>{tokenValue}</td>
          ) : (
            <td style={{ fontSize: `${tokenValue}` }}>{token}</td>
          )}
        </>
      );
    }
  });
  return (
    <TypographyGroup>
      <h2>{heading}</h2>
      <p>{description}</p>
      <TypographyTable>
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
      </TypographyTable>
    </TypographyGroup>
  );
}

Typography.propTypes = {
  tokenGroup: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
};

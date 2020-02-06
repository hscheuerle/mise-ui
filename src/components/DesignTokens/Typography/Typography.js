import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, spacing, font, fontSize, lineHeight } from '../../../styles';

const TypographyGroup = styled.div`
  margin: 0 auto;
  padding-bottom: 4rem;
  padding-top: 2rem;
  max-width: 80rem;

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
  width: 100%;

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

  .notes {
    font-size: ${fontSize.xsm};
  }
`;

const TokenName = styled.td``;

export default function Typography({
  brand,
  description,
  heading,
  notes,
  tokenGroup,
}) {

  const atkFonts = [
    'pnb',
    'pnr',
    'mwr',
  ];

  const ccoFonts = [
    'clb',
    'pnr',
    'pnb',
    'mwr',
  ];

  const cioFonts = [
    'mwr',
    'pnr',
    'pnb',
  ];

  const kidsFonts = [
    'cwf',
    'gdn',
    'pnr',
    'pnb',
  ];

  let brands = {
    'atkFonts': atkFonts,
    'ccoFonts': ccoFonts,
    'cioFonts': cioFonts,
    'kidsFonts': kidsFonts,
  }

  let tokenGroups = {
    'fontSize': fontSize,
    'font': font,
    'lineHeight': lineHeight,
  };

  const tokensArray = [];

  if (tokenGroup === 'font') {
    const tokens = brands[brand];

    tokens.map(keys => {
      const tokenValue = font[keys];
      tokensArray.push(
        <>
          <TokenName>{`${tokenGroup}.${keys}`}</TokenName>
          <TokenName>{tokenValue}</TokenName>
          <td style={{ fontFamily: `${tokenValue}` }}>{tokenValue}</td>
          <td>{notes}</td>
        </>
      )
      return tokensArray;
    });
  } else {
    const tokens = tokenGroups[tokenGroup];

    Object.keys(tokens).forEach((token) => {
      const tokenValue = tokens[token];
      if (tokenValue) {
        tokensArray.push(
          <>
            <TokenName>{`${tokenGroup}.${token}`}</TokenName>
            <TokenName>{tokenValue}</TokenName>
            <td style={{[tokenGroup]: tokenValue}}>{token}</td>
            <td>{notes}</td>
          </>
        );
      }
    });
  }
  return (
    <TypographyGroup tokenGroup={tokenGroup} brand={brand}>
      <h2>{heading}</h2>
      <p>{description}</p>
      <TypographyTable>
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
      </TypographyTable>
    </TypographyGroup>
  );
}

Typography.propTypes = {
  brand: PropTypes.string,
  description: PropTypes.string,
  heading: PropTypes.string,
  notes: PropTypes.string,
  tokenGroup: PropTypes.string,
};

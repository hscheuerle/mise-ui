import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, font, fontSize, letterSpacing, lineHeight, spacing } from '../../../styles';

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

  .notes {
    font-size: ${fontSize.xsm};
  }
`;

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
    'letterSpacing': letterSpacing,
  };

  //TODO: add documentation for line-height and letter-spacing usage guidelines
  //when it's available

  const tokensArray = [];

  if (tokenGroup === 'font') {
    const tokens = brands[brand];

    tokens.map(keys => {
      const tokenValue = font[keys];
      tokensArray.push(
        <>
          <td>{`${tokenGroup}.${keys}`}</td>
          <td>{tokenValue}</td>
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
            <td>{`${tokenGroup}.${token}`}</td>
            <td>{tokenValue}</td>
            <td style={{[tokenGroup]: tokenValue}}>{token}</td>
            <td>{notes}</td>
          </>
        );
      }
    });
  }
  return (
    <TokenGroup tokenGroup={tokenGroup} brand={brand}>
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
}

Typography.propTypes = {
  brand: PropTypes.string,
  description: PropTypes.string,
  heading: PropTypes.string,
  notes: PropTypes.string,
  tokenGroup: PropTypes.string,
};

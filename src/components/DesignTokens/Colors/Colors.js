import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, spacing, font, fontSize, } from '../../../styles';

const ColorGroup = styled.div`
  margin: 0 auto;
  padding-bottom: 4rem;
  padding-top: 2rem;
  text-align: left;
  max-width: 80rem;

  h2 {
    color: ${color.eclipse};
    font: ${fontSize.lg}/1.5 ${font.pnb};
  }

  p {
    font: 1.4rem/1 ${font.pnr};
  }
`;

const ColorTable = styled.table`
  border-collapse: collapse;
  font: 1.6rem/1.5 ${font.pnr};
  margin: 0 auto;
  width: 100%;

  th {
    background-color: ${color.whiteSmoke};
    font: 1.4rem/1 ${font.pnb};
    padding: ${spacing.sm};
    text-align: left;
  }

  th,
  td {
    padding: ${spacing.xsm};
  }

  td {
    padding-right: ${spacing.md};
  }
`;

const ColorSwatch = styled.div`
  border: 2px solid ${color.whiteSmoke};
  height: 3rem;
  width: 6rem;
`;

const ColorName = styled.td`
  font: 1.6rem/1.5 ${font.pnr};
  margin-right: 1.6rem;
`;

const ColorValue = styled.td`
  font: 1.6rem/1.5 ${font.pnr};
  margin-right: 1.6rem;
`;

const ColorRow = styled.tr`
  border-bottom: 2px solid #EFEFEF;
  padding-left: ${spacing.md};
  padding-right: ${spacing.md};
`;

export default function Colors({
  tokenGroup,
  heading,
  description,
}) {

  const atkColor = [
    'tomato',
    'rust',
    'mint',
    'darkerMint',
    'turquoise',
    'seaSalt',
    'whiteSmoke',
    'white',
    'black',
    'eclipse',
    'regentGray',
    'silver',
    'nobel',
  ];

  const globalColor = [
    'tomato',
    'rust',
    'black',
    'white',
  ];

  const ccoColor = [
    'white',
    'black',
    'denim',
    'malibu',
    'arapawa',
    'cornflower',
    'whiteSmoke',
    'silver',
  ];

  const cioColor = [
    'linen',
    'squirrel',
    'cork',
    'bone',
    'dijon',
    'sand',
  ];

  let tokenGroups = {
    'globalColor': globalColor,
    'atkColor': atkColor,
    'ccoColor': ccoColor,
    'cioColor': cioColor,
  }

  const tokensArray = [];
  const tokens = tokenGroups[tokenGroup];

  tokens.map(keys => {
    const tokenValue = color[keys];
    tokensArray.push(
      <>
        <ColorName>{keys}</ColorName>
        <ColorValue>{tokenValue}</ColorValue>
        <td>
          <ColorSwatch style={{ backgroundColor: tokenValue }} />
        </td>
        <td>Notes here</td>
      </>
    )
    return tokensArray;
  });

  return (
    <ColorGroup tokenGroup={tokenGroup}>
      <h2>{heading}</h2>
      <ColorTable>
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
            <ColorRow key={i}>{el}</ColorRow>
          ))}
        </tbody>
      </ColorTable>
    </ColorGroup>
  );
}

Colors.propTypes = {
  tokenGroup: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
};

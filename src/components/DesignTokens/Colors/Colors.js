import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { atkColor,
         ccoColor,
         cioColor,
         color,
         spacing,
         font,
         fontSize,
        } from '../../../styles';

const ColorGroup = styled.div`
  border-bottom: 1px solid ${color.silver};
  margin: 0 auto;
  padding-bottom: 4rem;
  padding-top: 2rem;
  text-align: left;
  width: 60rem;

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
  width: 60rem;

  th {
    background-color: ${color.whiteSmoke};
    font: 1.4rem/1 ${font.pnb};
    text-align: left;
  }

  th,
  td {
    padding: ${spacing.xsm};
  }
`;

const ColorSwatch = styled.div`
  border: 1px solid ${color.whiteSmoke};
  height: 3rem;
  width: 6rem;
`;

const ColorName = styled.td`
  font: 1.6rem/1.5 ${font.pnr};
  margin-right: 1.6rem;
`;

const ColorRow = styled.tr`
  border-bottom: 1px solid #EFEFEF;
  padding-left: ${spacing.md};
  padding-right: ${spacing.md};
`;

export default function Colors({
  tokenGroup,
  heading,
  description,
}) {
  const tokensArray = [];
  let tokenGroups = {
    'color': color,
    'atkColor': atkColor,
    'ccoColor': ccoColor,
    'cioColor': cioColor,
  }
  const tokens = tokenGroups[tokenGroup];

  Object.keys(tokens).forEach((token) => {
    const tokenValue = tokens[token];

    if (tokenValue) {
      tokensArray.push(
        <>
          <ColorName>{token}</ColorName>
          <ColorName>{tokenValue}</ColorName>
          <td>
            <ColorSwatch style={{ backgroundColor: tokenValue }} />
          </td>
        </>
      );
    }
  });

  return (
    <ColorGroup tokenGroup={tokenGroup}>
      <h2>{heading}</h2>
      <p>{description}</p>
      <ColorTable>
        <thead>
          <tr>
            <th>Token</th>
            <th>Value</th>
            <th>Example</th>
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

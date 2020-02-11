import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, font, fontSize, lineHeight, spacing } from '../../../styles';

const TokenGroup = styled.div`
  margin: 0 auto;
  padding-bottom: ${spacing.xlg};
  padding-top: ${spacing.md};
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

  td {
    font: 1.6rem/1.5 ${font.pnr};
    margin-right: 1.6rem;
  }

  tr {
    border-bottom: 2px solid ${color.miseUiGrayBorder};
    padding-left: ${spacing.md};
    padding-right: ${spacing.md};
  }
`;

const ColorSwatch = styled.div`
  border: 2px solid ${color.whiteSmoke};
  height: 3rem;
  width: 6rem;
`;

export default function Color({
  description,
  heading,
  notes,
  tokenGroup,
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
    'transparentBlack',
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

  const socialColor = [
    'email',
    'emailHover',
    'facebook',
    'facebookHover',
    'pinterest',
    'pinterestHover',
    'twitter',
    'twitterHover',
  ];

  let tokenGroups = {
    'globalColor': globalColor,
    'atkColor': atkColor,
    'ccoColor': ccoColor,
    'cioColor': cioColor,
    'socialColor': socialColor,
  }

  const tokensArray = [];
  const tokens = tokenGroups[tokenGroup];

  tokens.map(keys => {
    const tokenValue = color[keys];
    tokensArray.push(
      <>
        <td>{`color.${keys}`}</td>
        <td>{tokenValue}</td>
        <td>
          <ColorSwatch style={{ backgroundColor: tokenValue }} />
        </td>
        <td>{notes}</td>
      </>
    )
    return tokensArray;
  });

  return (
    <TokenGroup tokenGroup={tokenGroup}>
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

Color.propTypes = {
  description: PropTypes.string,
  heading: PropTypes.string,
  notes: PropTypes.string,
  tokenGroup: PropTypes.string,
};

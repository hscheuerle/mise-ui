import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  padding: 8px 16px;
  position: relative;
  text-align: center;
  opacity: 1;
  margin: 0;
`;

export function Button({
  children
}) {
  return (
    <StyledButton>
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.node,
}
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connectSearchBox } from 'react-instantsearch-dom';

import { color, font, fontSize } from '../../styles';
import { SearchIcon, Close } from '../DesignTokens/Icon';


const StyledSearch = styled.form`
  height: 5rem;
  position: relative;

  input[type="search"] {
    background-color: ${color.whiteSmoke};
    border: none;
    height: 100%;
    font: ${fontSize.lg} ${font.mwr};
    padding-left: 5.2rem;
    width: 100%;

    &::placeholder {
      color: ${color.eclipse};
      font: ${fontSize.lg} ${font.mwr};
      font-style: italic;
      line-height: 1.44;
      text-align: left;
    }

    &::-webkit-search-cancel-button {
      -webkit-appearance:none;
    }
  }

  button {
    background: none;
    border: none;
    position: absolute;
    right: 0;
    margin-right: 0.5rem;
    top: 50%;
    height: 1.5rem;
    transform: translate(0%,-50%);
  }

  svg {
    fill: ${color.regentGray};
    position: absolute;
    z-index: 1;

    &.search-icon {
      height: 2rem;
      left: 0;
      margin-left: 1.6rem;
      top: 50%;
      transform: translateY(-50%);
      width: 2rem;
    }

    &.close {
      left: 0;
      height: 100%;
      top: 0;
      width: 100%;
    }
  }
`;

class StyledSearchBox extends Component {
  constructor(props) {
    super(props);
    this.timerId = null;
  }

  onInputMount = (input) => {
    this.input = input;
  }

  onChangeDebounced = (event) => {
    const { refine, delay } = this.props;
    const value = event.currentTarget.value;

    clearTimeout(this.timerId);
    this.timerId = setTimeout(() => refine(value), delay);
  };

  onReset = () => {
    const { refine } = this.props;
    refine('');
    this.input.value = '';
    this.input.focus();
  }

  onSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.input.blur();
    const { refine } = this.props;
    refine(this.input.value);
    return false;
  }

  render() {
    const { currentRefinement, refine, placeholder } = this.props;
    return (
      <StyledSearch
        noValidate
        action=""
        onSubmit={this.onSubmit}
        onReset={this.onReset}
        role="search"
      >
        <SearchIcon
          fill={color.regentGray}
        />
        <input
          type="search"
          defaultValue={currentRefinement}
          ref={this.onInputMount}
          onChange={this.onChangeDebounced}
          placeholder={placeholder}
        />
        <button type="reset" onClick={() => refine('')} hidden={!currentRefinement}>
          <Close ariaLabel="clear search input" fill={color.regentGray} />
        </button>
      </StyledSearch>
    );
  }
};

StyledSearchBox.propTypes = {
  currentRefinement: PropTypes.string.isRequired,
  delay: PropTypes.number,
  refine: PropTypes.func.isRequired,
};

StyledSearchBox.defaultProps = {
  delay: 250,
};

const SearchBox = connectSearchBox(StyledSearchBox);

const SearchInput = ({ placeholder }) => (
  <SearchBox
    placeholder={placeholder}
  />
);

SearchInput.propTypes = {
  placeholder: PropTypes.string,
}

SearchInput.defaultProps = {
  placeholder: 'What are you curious about?'
}

export default SearchInput;

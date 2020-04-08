import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connectCurrentRefinements, connectSearchBox } from 'react-instantsearch-dom';

import { color, font, fontSize, spacing } from '../../styles';
import { SearchIcon, Close } from '../DesignTokens/Icon';

const StyledSearchInputContainer = styled.div`
  background-color: ${color.white};
  border: 1px solid ${color.silver};
  position: relative;
  width: 100%;
`;

const StyledSearch = styled.form`
  position: relative;
  height: 5rem;
  width: 100%;

  input[type="search"] {
    border: 0;
    font: ${fontSize.lg} ${font.mwr};
    height: 100%;
    padding-left: 5rem;
    width: 100%;

    &::placeholder {
      color: ${color.eclipse};
      font: ${fontSize.lg} ${font.mwr};
      font-style: italic;
      text-align: left;
    }

    &::-webkit-search-cancel-button {
      -webkit-appearance: none;
    }
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

  onChangeDebounced = (evt) => {
    clearTimeout(this.timerId);
    const { refine, delay } = this.props;
    const value = evt.currentTarget.value;
    this.timerId = setTimeout(() => refine(value), delay);
  };

  onSubmit = (evt) => {
    const { handleSubmit } = this.props;
    evt.preventDefault();
    evt.stopPropagation();
    clearTimeout(this.timerId);
    this.input.blur();
    if (handleSubmit) handleSubmit();
    const { refine } = this.props;
    refine(this.input.value);
  }

  onFocus = () => {
    const { handleFocus } = this.props;
    if (handleFocus) handleFocus();
  }

  render() {
    const {
      currentRefinement,
      placeholder,
    } = this.props;

    return (
      <StyledSearch
        noValidate
        action=""
        onSubmit={this.onSubmit}
        onReset={this.onReset}
        role="search"
      >
        <SearchIcon
          fill={color.mint}
        />
        <input
          className="search-input__input"
          type="search"
          defaultValue={currentRefinement}
          ref={this.onInputMount}
          onChange={this.onChangeDebounced}
          onFocus={this.onFocus}
          placeholder={placeholder}
        />
      </StyledSearch>
    );
  }
}

StyledSearchBox.propTypes = {
  currentRefinement: PropTypes.string.isRequired,
  delay: PropTypes.number,
  handleFocus: PropTypes.func,
  handleSubmit: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
  refine: PropTypes.func.isRequired,
};

StyledSearchBox.defaultProps = {
  delay: 200,
  handleFocus: null,
  handleSubmit: null,
};

const SearchBox = connectSearchBox(StyledSearchBox);

const StyledResetButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto ${spacing.sm};
  height: 1rem;
  width: 1rem;

  svg {
    fill: ${color.regentGray};
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
  }
`;

const ResetButton = connectCurrentRefinements(({ handleClick, items, refine }) => (
  <StyledResetButton
    type="reset"
    onClick={() => { if (handleClick) handleClick(); refine(items); }}
    hidden={!items || !items.length}
  >
    <Close
      ariaLabel="clear search input"
      fill={color.regentGray}
    />
  </StyledResetButton>
));

const SearchInput = ({ handleClickClose, handleFocus, handleSubmit, placeholder }) => (
  <StyledSearchInputContainer
    className="search-input-container"
  >
    <SearchBox
      handleFocus={handleFocus}
      handleSubmit={handleSubmit}
      placeholder={placeholder}
    />
    <ResetButton
      clearsQuery
      handleClick={handleClickClose}
    />
  </StyledSearchInputContainer>
);

SearchInput.propTypes = {
  handleClickClose: PropTypes.func,
  handleFocus: PropTypes.func,
  handleSubmit: PropTypes.func,
  placeholder: PropTypes.string,
};

SearchInput.defaultProps = {
  handleClickClose: null,
  handleFocus: null,
  handleSubmit: null,
  placeholder: 'What are you curious about?',
};

export default SearchInput;

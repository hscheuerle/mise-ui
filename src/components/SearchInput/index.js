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
  width: 100%;

  input[type="search"] {
    border: 0;
    color: ${color.eclipse};
    font: ${fontSize.lg} ${font.mwr};
    padding: 1.35rem 0 1.35rem 5rem;
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
      bottom: 0;
      height: 2rem;
      left: 0;
      margin: auto auto auto ${spacing.sm};
      top: 0;
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
      defaultValue,
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
          defaultValue={defaultValue}
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
  defaultValue: PropTypes.string,
  delay: PropTypes.number,
  handleFocus: PropTypes.func,
  handleSubmit: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
  refine: PropTypes.func.isRequired,
};

StyledSearchBox.defaultProps = {
  defaultValue: null,
  delay: 200,
  handleFocus: null,
  handleSubmit: null,
};

const SearchBox = connectSearchBox(StyledSearchBox);

const StyledResetButton = styled.button`
  position: absolute;
  top: 0.2rem;
  right: 0.2rem;
  bottom: 0.2rem;
  padding: ${spacing.sm};

  svg {
    fill: ${color.regentGray};
    height: 1rem;
    width: 1rem;

    g {
      transition: stroke 0.2s ease-in-out;
    }
  }

  &:hover svg g {
    stroke: ${color.mint};
  }

  && {
    background-color: ${color.white};
  }
`;

const ResetButton = connectCurrentRefinements(({ handleClick, items, refine }) => (
  <StyledResetButton
    className="search-input__reset-button"
    type="reset"
    onClick={() => { if (handleClick) handleClick(); refine(items); }}
    hidden={!items || !items.length}
  >
    <Close
      ariaLabel="clear current search term"
    />
  </StyledResetButton>
));

const SearchInput = ({
  defaultValue,
  handleClickClose,
  handleFocus,
  handleSubmit,
  placeholder,
}) => (
  <StyledSearchInputContainer
    className="search-input-container"
  >
    <SearchBox
      defaultValue={defaultValue}
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
  defaultValue: PropTypes.string,
  handleClickClose: PropTypes.func,
  handleFocus: PropTypes.func,
  handleSubmit: PropTypes.func,
  placeholder: PropTypes.string,
};

SearchInput.defaultProps = {
  defaultValue: null,
  handleClickClose: null,
  handleFocus: null,
  handleSubmit: null,
  placeholder: 'Search recipes, reviews & more',
};

export default SearchInput;

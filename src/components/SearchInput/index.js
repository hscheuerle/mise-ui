import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connectCurrentRefinements, connectSearchBox } from 'react-instantsearch-dom';

import { color, font, fontSize } from '../../styles';
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
    padding: 1.35rem 3.5rem 1.35rem 4.5rem;
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
      height: 2.3rem;
      left: 0;
      margin: auto auto auto 1.2rem;
      top: 0;
      width: 2.3rem;
    }
  }
`;

class StyledSearchBox extends Component {
  constructor(props) {
    super(props);
    this.timerId = null;
  }

  componentDidMount() {
    /*
       Value swapping is done here because on some browsers focusing on the
       input element on mount will place the cursor at the beginning of the
       search query rather than at the end.
    */
    const tempVal = this.input.value;
    this.input.focus();
    this.input.value = '';
    this.input.value = tempVal;
  }

  onInputMount = (input) => {
    this.input = input;
  }

  onChangeDebounced = (evt) => {
    clearTimeout(this.timerId);
    const { handleChange, refine, delay } = this.props;
    const value = evt.currentTarget.value;
    this.timerId = setTimeout(
      () => {
        refine(value);
        if (handleChange) handleChange();
      },
      delay,
    );
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
  handleChange: PropTypes.func,
  handleFocus: PropTypes.func,
  handleSubmit: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
  refine: PropTypes.func.isRequired,
};

StyledSearchBox.defaultProps = {
  defaultValue: null,
  delay: 200,
  handleChange: null,
  handleFocus: null,
  handleSubmit: null,
};

const SearchBox = connectSearchBox(StyledSearchBox);

const StyledResetButton = styled.button`
  position: absolute;
  top: 0.2rem;
  right: 0.2rem;
  bottom: 0.2rem;
  padding: 1.2rem;

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

const ResetButton = connectCurrentRefinements(({ handleClick, items, refine, query }) => (
  <StyledResetButton
    className="search-input__reset-button"
    type="reset"
    onClick={() => { if (handleClick) handleClick(); refine(items); }}
    hidden={!query || query.length === 0}
  >
    <Close
      ariaLabel="clear current search term"
    />
  </StyledResetButton>
));

const SearchInput = ({
  defaultValue,
  handleChange,
  handleClickClose,
  handleFocus,
  handleSubmit,
  placeholder,
  query,
}) => (
  <StyledSearchInputContainer
    className="search-input-container"
  >
    <SearchBox
      defaultValue={defaultValue}
      handleChange={handleChange}
      handleFocus={handleFocus}
      handleSubmit={handleSubmit}
      placeholder={placeholder}
    />
    <ResetButton
      clearsQuery
      handleClick={handleClickClose}
      query={query}
    />
  </StyledSearchInputContainer>
);

SearchInput.propTypes = {
  defaultValue: PropTypes.string,
  handleChange: PropTypes.func,
  handleClickClose: PropTypes.func,
  handleFocus: PropTypes.func,
  handleSubmit: PropTypes.func,
  placeholder: PropTypes.string,
  query: PropTypes.string,
};

SearchInput.defaultProps = {
  defaultValue: null,
  handleChange: null,
  handleClickClose: null,
  handleFocus: null,
  handleSubmit: null,
  placeholder: 'Search recipes, reviews & more',
  query: '',
};

export default SearchInput;

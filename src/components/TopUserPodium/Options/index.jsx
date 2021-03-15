import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';

const Options = ({ option, optionList, valueChangeHandler }) => {
  const buttonClickHandler = op => () => {
    if (valueChangeHandler) {
      valueChangeHandler(op);
    }
  };

  const options = optionList.map(op => {
    return (
      <S.Option
        active={option === op}
        onClick={buttonClickHandler(op)}
        key={op}
      >
        {op}
      </S.Option>
    );
  });

  return <S.OptionsWrap>{options}</S.OptionsWrap>;
};

Options.propTypes = {
  option: PropTypes.string,
  optionList: PropTypes.arrayOf(PropTypes.string),
  valueChangeHandler: PropTypes.func,
};

Options.defaultProps = {
  option: '',
  optionList: [],
  valueChangeHandler: null,
};

export default Options;

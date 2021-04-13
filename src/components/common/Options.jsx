import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Options = ({ option, optionList, onChange, left, right, center }) => {
  const onChangeHandler = op => () => {
    if (onChange) {
      onChange(op);
    }
  };

  const options = optionList.map(op => {
    return (
      <Option $active={option === op} onClick={onChangeHandler(op)} key={op}>
        {op}
      </Option>
    );
  });

  const align =
    (left && 'flex-start') || (right && 'flex-end') || (center && 'center');
  return <OptionsBlock $align={align}>{options}</OptionsBlock>;
};

Options.propTypes = {
  option: PropTypes.string,
  optionList: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
  left: PropTypes.bool,
  right: PropTypes.bool,
  center: PropTypes.bool,
};

Options.defaultProps = {
  option: '',
  optionList: [],
  onChange: null,
  left: false,
  right: true,
  center: false,
};

const OptionsBlock = styled.div`
  display: flex;
  justify-content: ${props => props.$align || 'flex-end'};
  padding: 0 0 10px;
`;

const Option = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.grayColor || '#ddd'};
  background-color: ${props =>
    props.$active
      ? props.theme.colors.textColor || '#1e1e1e'
      : props.theme.colors.bgColor || '#fff'};
  color: ${props =>
    props.$active
      ? props.theme.colors.bgColor || '#fff'
      : props.theme.colors.textColor || '#1e1e1e'};
  border-radius: 2rem;
  padding: 5px 10px;
  margin: 0 10px;
  transition: 0.2s;

  &:hover {
    color: ${props => props.theme.colors.bgColor || '#fff'};
    background-color: ${props => props.theme.colors.textColor || '#1e1e1e'};
  }
`;

export default Options;

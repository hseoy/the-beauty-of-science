import React, { useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Options = ({
  option,
  optionList,
  onChange,
  left,
  right,
  center,
  borderRadius,
}) => {
  const onChangeHandler = useCallback(
    op => () => {
      if (onChange) {
        onChange(op);
      }
    },
    [onChange],
  );

  const options = useMemo(
    () =>
      optionList.map(op => {
        return (
          <Option
            $active={option === op}
            onClick={onChangeHandler(op)}
            key={op}
            $borderRadius={borderRadius}
          >
            {op}
          </Option>
        );
      }),
    [optionList, option, onChange, borderRadius],
  );

  const align =
    (center && 'center') || (left && 'flex-start') || (right && 'flex-end');
  return <OptionsBlock $align={align}>{options}</OptionsBlock>;
};

Options.propTypes = {
  option: PropTypes.string,
  optionList: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
  left: PropTypes.bool,
  right: PropTypes.bool,
  center: PropTypes.bool,
  borderRadius: PropTypes.string,
};

Options.defaultProps = {
  option: '',
  optionList: [],
  onChange: null,
  left: false,
  right: false,
  center: false,
  borderRadius: '',
};

const OptionsBlock = styled.div`
  display: flex;
  justify-content: ${props => props.$align || 'center'};
  width: 100%;
`;

const Option = styled.button`
  border: 3px solid ${({ theme }) => theme.colors.accentColor || '#000'};
  border-radius: ${props => props.$borderRadius || '50%'};
  padding: 5px 10px;
  margin: 0 10px;
  transition: 0.2s;
  background-color: ${props =>
    props.$active
      ? props.theme.colors.accentColor || '#000'
      : props.theme.colors.primaryColor || '#fff'};
  color: ${props =>
    props.$active
      ? props.theme.colors.primaryColor || '#fff'
      : props.theme.colors.accentColor || '#000'};
  font-family: ${({ theme }) => theme.font.family.accent || 'sans-serif'};

  &:hover {
    color: ${props => props.theme.colors.primaryColor || '#fff'};
    background-color: ${props => props.theme.colors.accentColor || '#000'};
  }
`;

export default Options;

import React, { useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Options from './Options';

const NumberOptions = ({
  option,
  start,
  count,
  onChange,
  left,
  right,
  center,
}) => {
  const optionNumber = useMemo(() => option.toString(), [option]);

  const onChangeHandler = useCallback(
    op => {
      if (onChange) {
        onChange(parseInt(op, 10));
      }
    },
    [onChange],
  );

  const options = useMemo(() => {
    const nums = [];
    for (let i = start; i < count; i += 1) {
      nums.push(i.toString());
    }
    return nums;
  }, [start, count]);

  return (
    <NumberOptionsBlock>
      <Options
        option={optionNumber}
        optionList={options}
        onChange={onChangeHandler}
        left={left}
        right={right}
        center={center}
        borderRadius="50%"
      />
    </NumberOptionsBlock>
  );
};

NumberOptions.propTypes = {
  option: PropTypes.number,
  start: PropTypes.number,
  count: PropTypes.number,
  onChange: PropTypes.func,
  left: PropTypes.bool,
  right: PropTypes.bool,
  center: PropTypes.bool,
};

NumberOptions.defaultProps = {
  option: 0,
  start: 0,
  count: 0,
  onChange: null,
  left: false,
  right: false,
  center: false,
};

const NumberOptionsBlock = styled.div`
  width: 100%;
`;

export default NumberOptions;

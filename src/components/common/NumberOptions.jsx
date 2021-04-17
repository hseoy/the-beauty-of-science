import React, { useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Options from './Options';

const NumberOptions = ({
  option,
  start,
  count,
  nums,
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
    if (Array.isArray(nums) && nums.length > 0) {
      return nums.filter(num => num).map(num => num.toString());
    }

    const numList = [];
    for (let i = start; i < count + start; i += 1) {
      numList.push(i.toString());
    }
    return numList;
  }, [start, count, nums]);

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
  nums: PropTypes.arrayOf(PropTypes.number),
  onChange: PropTypes.func,
  left: PropTypes.bool,
  right: PropTypes.bool,
  center: PropTypes.bool,
};

NumberOptions.defaultProps = {
  option: 0,
  start: 0,
  count: 0,
  nums: [],
  onChange: null,
  left: false,
  right: false,
  center: false,
};

const NumberOptionsBlock = styled.div`
  width: 100%;
`;

export default NumberOptions;

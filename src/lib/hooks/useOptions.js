import { useState, useCallback } from 'react';

const useOptions = (options, defaultValue) => {
  const defaultOption = options.find(elm => elm === defaultValue) || options[0];
  const [option, setOption] = useState(defaultOption);
  const changeOption = useCallback(
    op => {
      const optionValue = options.find(elm => elm === op) || defaultOption;
      setOption(optionValue);
    },
    [options],
  );
  return [option, changeOption];
};

export default useOptions;

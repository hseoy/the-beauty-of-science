import { useState, useCallback } from 'react';

const useToggle = defaultValue => {
  const [value, setValue] = useState(defaultValue);
  const onToggle = useCallback(() => {
    setValue(!value);
  }, [value]);
  return [value, onToggle];
};

export default useToggle;

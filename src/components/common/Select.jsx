import React, { useMemo, useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeContext } from 'styled-components';
import ReactSelect from 'react-select';

const commonStyle = theme => ({
  backgroundColor: theme.colors.primaryColor || '#fff',
  color: theme.colors.accentColor || '#000',
  fontFamily: theme.font.family.accent || 'sans-serif',
});

const selectStyles = theme => ({
  control: styles => ({
    ...styles,
    ...commonStyle(theme),
    border: `3px solid ${theme.colors.accentColor || '#fff'}`,
    boxShadow: 'none',
    ':hover': {
      borderColor: theme.colors.accentColor || '#fff',
    },
    cursor: 'pointer',
  }),
  menuList: styles => ({
    ...styles,
    ...commonStyle(theme),
    border: `3px solid ${theme.colors.accentColor || '#fff'}`,
  }),
  option: (styles, { isFocused }) => ({
    ...styles,
    ...commonStyle(theme),
    transition: '0.12s',
    backgroundColor: isFocused
      ? theme.colors.accentColor || '#000'
      : theme.colors.primaryColor || '#fff',
    color: isFocused
      ? theme.colors.primaryColor || '#000'
      : theme.colors.accentColor || '#fff',
    cursor: 'pointer',
  }),
  singleValue: styles => ({
    ...styles,
    color: theme.colors.accentColor || '#000',
    fontFamily: theme.font.family.accent || 'sans-serif',
  }),
  indicatorSeparator: styles => ({
    ...styles,
    width: '2px',
    backgroundColor: theme.colors.accentColor || '#000',
  }),
  dropdownIndicator: styles => ({
    ...styles,
    color: theme.colors.accentColor || '#000',
  }),
});

const Select = ({ options, name, width, onChange }) => {
  const themeContext = useContext(ThemeContext);
  const styles = useMemo(() => selectStyles(themeContext), [themeContext]);
  const onChangeHandler = option => {
    if (onChange) {
      onChange(option.value);
    }
  };

  return (
    <SelectBlock $width={width}>
      <ReactSelect
        name={name}
        options={options}
        defaultValue={options[0]}
        styles={styles}
        isSearchable={false}
        onChange={onChangeHandler}
      />
    </SelectBlock>
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    }),
  ).isRequired,
  name: PropTypes.string,
  width: PropTypes.string,
  onChange: PropTypes.func,
};

Select.defaultProps = {
  name: '',
  width: '100%',
  onChange: null,
};

const SelectBlock = styled.div`
  width: ${props => props.$width || '100%'};
`;

export default Select;

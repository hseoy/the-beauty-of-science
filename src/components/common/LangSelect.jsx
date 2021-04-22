import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Select from 'components/common/Select';
import { useTranslation } from 'react-i18next';

const languages = [
  { value: 'ko', label: '한국어' },
  { value: 'en', label: 'English' },
];

const LangSelect = ({ menuPlacement }) => {
  const { i18n } = useTranslation('translation', { useSuspense: false });
  const currentLang = languages.filter(lang => lang.value === i18n.language);

  return (
    <LangSelectBlock>
      <Select
        value={currentLang}
        options={languages}
        onChange={lang => i18n.changeLanguage(lang)}
        menuPlacement={menuPlacement}
      />
    </LangSelectBlock>
  );
};

LangSelect.propTypes = {
  menuPlacement: PropTypes.string,
};

LangSelect.defaultProps = {
  menuPlacement: 'bottom',
};

const LangSelectBlock = styled.div`
  width: 12.5rem;
`;

export default LangSelect;

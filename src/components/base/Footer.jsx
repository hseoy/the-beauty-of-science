import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Select from 'components/common/Select';
import { useTranslation } from 'react-i18next';

const getCurrentYear = () => {
  const date = new Date();
  return date.getFullYear();
};

const languages = [
  { value: 'ko', label: 'Korean' },
  { value: 'en', label: 'English' },
];

const Footer = ({ copyrightYear, author, homepage }) => {
  const { i18n } = useTranslation('translation', { useSuspense: false });
  const currentLang = i18n.language === 'ko' ? languages[0] : languages[1];

  return (
    <FooterBlock>
      <div className="copyright">
        {`Copyright ${copyrightYear}. `}
        <FooterAuthorLink
          target="_blank"
          rel="noopener noreferrer"
          href={homepage}
        >
          {author}
        </FooterAuthorLink>
        . All rights reserved.
      </div>
      <div className="lang">
        <Select
          value={currentLang}
          options={languages}
          onChange={lang => i18n.changeLanguage(lang)}
          menuPlacement="top"
        />
      </div>
    </FooterBlock>
  );
};

Footer.propTypes = {
  copyrightYear: PropTypes.number,
  author: PropTypes.string,
  homepage: PropTypes.string,
};

Footer.defaultProps = {
  copyrightYear: getCurrentYear(),
  author: '',
  homepage: '#',
};

const FooterBlock = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryColor || '#fff'};
  border-top: 3px solid ${({ theme }) => theme.colors.accentColor || '#000'};
  width: 100%;
  padding: 2rem 0 4rem;
  text-align: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.font.family.accent || 'sans-serif'};

  > .lang {
    position: absolute;
    right: 0;
    margin-right: 10px;
    width: 200px;
  }
`;

const FooterAuthorLink = styled.a`
  color: ${({ theme }) => theme.colors.accentColor || '#fff'};
  border: 3px solid ${({ theme }) => theme.colors.accentColor || '#000'};
  margin: 0 0.125rem;
  border-radius: 20px;
  padding: 0.125rem 0.3125rem;
  transition: 0.2s;

  &:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primaryColor || '#fff'};
    background-color: ${({ theme }) => theme.colors.accentColor || '#000'};
    ${props => props.theme.utils.selectionStyle(props.theme, true)}
  }
`;

export default Footer;

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import S from './style';

const getCurrentYear = () => {
  const date = new Date();
  return date.getFullYear();
};

const Footer = ({ copyrightYear, author, homepage }) => {
  const themeContext = useContext(ThemeContext);

  return (
    <S.Wrap bgColor={themeContext.colors.primaryColor}>
      <p>
        {`Copyright ${copyrightYear}. `}
        <S.AuthorLink
          target="_blank"
          rel="noreferrer"
          href={homepage}
          color={themeContext.colors.accentColor}
          bdColor={themeContext.colors.accentColor}
          hoverBgColor={themeContext.colors.accentColor}
          hoverColor={themeContext.colors.primaryColor}
        >
          {author}
        </S.AuthorLink>
        . All rights reserved.
      </p>
    </S.Wrap>
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

export default Footer;

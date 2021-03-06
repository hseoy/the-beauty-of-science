import React from 'react';
import PropTypes from 'prop-types';
import S from './style';

const getCurrentYear = () => {
  const date = new Date();
  return date.getFullYear();
};

const Footer = ({ copyrightYear, author, homepage }) => {
  return (
    <S.Wrap>
      <p>
        {`Copyright ${copyrightYear}. `}
        <S.AuthorLink target="_blank" rel="noreferrer" href={homepage}>
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

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const getCurrentYear = () => {
  const date = new Date();
  return date.getFullYear();
};

const Footer = ({ copyrightYear, author, homepage }) => {
  return (
    <FooterBlock>
      {`Copyright ${copyrightYear}. `}
      <FooterAuthorLink target="_blank" rel="noreferrer" href={homepage}>
        {author}
      </FooterAuthorLink>
      . All rights reserved.
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
  width: 100%;
  height: 5rem;
  text-align: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.font.family.accent || 'sans-serif'};
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
  }
`;

export default Footer;

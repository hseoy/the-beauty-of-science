import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AuthTemplate = ({ children, maintitle, subtitle }) => {
  return (
    <AuthTemplateBlock>
      <div className="inner">
        <hgroup>
          <h2 className="main-title">{maintitle}</h2>
          {subtitle && <h3 className="sub-title">{subtitle}</h3>}
        </hgroup>
        <div className="body">{children}</div>
      </div>
    </AuthTemplateBlock>
  );
};

AuthTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  maintitle: PropTypes.string,
  subtitle: PropTypes.string,
};

AuthTemplate.defaultProps = {
  children: null,
  maintitle: 'The Beauty of Science',
  subtitle: 'AUTH',
};

const AuthTemplateBlock = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primaryColor || '#fff'};

  > .inner {
    width: 60%;
    display: inline-block;

    > hgroup {
      > .main-title {
        font-size: 2.5rem;
        text-align: center;
        font-family: ${({ theme }) => theme.font.family.accent || 'sans-serif'};
        color: ${({ theme }) => theme.colors.accentColor || '#000'};
      }
      > .sub-title {
        text-align: center;
        font-family: ${({ theme }) => theme.font.family.accent || 'sans-serif'};
        color: ${({ theme }) => theme.colors.accentColor || '#000'};
      }
    }

    > .body {
      padding: 30px 0;
    }
  }
`;

export default AuthTemplate;

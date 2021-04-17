import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HomeElement = ({ children, width, maintitle, subtitle }) => {
  return (
    <HomeElementBlock width={width}>
      <div className="title">
        <span className="main-title">{maintitle}</span>
        {subtitle && <span>|</span>}
        <span className="sub-title">{subtitle}</span>
      </div>
      <div className="body">{children}</div>
    </HomeElementBlock>
  );
};

HomeElement.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  width: PropTypes.string,
  maintitle: PropTypes.string,
  subtitle: PropTypes.string,
};

HomeElement.defaultProps = {
  children: null,
  width: '100%',
  maintitle: '',
  subtitle: '',
};

const HomeElementBlock = styled.div`
  position: relative;
  margin: 0 10px;
  width: ${props => props.width || '100%'};

  > .title {
    font-family: ${({ theme }) => theme.font.family.accent || 'sans-srif'};
    text-align: center;
    padding: 20px 0;
    position: relative;
    border-bottom: 3px dashed
      ${({ theme }) => theme.colors.accentColor || '#000'};

    .main-title {
      font-size: 25px;
      padding-bottom: 10px;
    }

    .sub-title {
      font-size: 20px;
    }
  }

  > .body {
    width: 100%;
    overflow: hidden;
    padding: 30px 0px;
  }
`;

export default HomeElement;

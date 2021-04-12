import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeaderTitle = ({ maintitle, subtitle }) => {
  return (
    <HeaderTitleBlock>
      <h1 className="main-title">{maintitle}</h1>
      <h2 className="sub-title">{subtitle}</h2>
    </HeaderTitleBlock>
  );
};

HeaderTitle.propTypes = {
  maintitle: PropTypes.string,
  subtitle: PropTypes.string,
};

HeaderTitle.defaultProps = {
  maintitle: '',
  subtitle: '',
};

const HeaderTitleBlock = styled.div`
  display: block;
  position: relative;
  margin-bottom: 3.75rem;

  color: ${({ theme }) => theme.colors.accentColor || '#000'};

  .main-title {
    font-size: 2.375rem;
    letter-spacing: 1.25rem;
    padding-left: 1.25rem;
    margin-bottom: 0.3125rem;
  }

  .sub-title {
    font-size: 1.25rem;
    letter-spacing: 0.078125rem;
    padding-left: 0.078125rem;
    padding-top: 1.875rem;
  }

  .main-title,
  .sub-title {
    font-family: ${({ theme }) => theme.font.family.accent || 'sans-seif'};
  }
`;

export default HeaderTitle;

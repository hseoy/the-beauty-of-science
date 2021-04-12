import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const PageTemplate = ({
  children,
  style,
  className,
  hideHeader,
  hideFooter,
}) => {
  return (
    <PageTemplateBlock style={style} className={className}>
      {!hideHeader && <Header />}
      {children}
      {!hideFooter && <Footer />}
    </PageTemplateBlock>
  );
};

PageTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  style: PropTypes.oneOfType([PropTypes.object]),
  className: PropTypes.string,
  hideHeader: PropTypes.bool,
  hideFooter: PropTypes.bool,
};

PageTemplate.defaultProps = {
  children: null,
  style: null,
  className: '',
  hideHeader: false,
  hideFooter: false,
};
const PageTemplateBlock = styled.div``;

export default PageTemplate;

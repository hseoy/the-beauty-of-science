import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import LinkButton from 'components/common/LinkButton';
import Header from './Header';
import Footer from './Footer';

const PageTemplate = ({
  children,
  style,
  className,
  hideHeader,
  hideFooter,
  contentPadding,
  location,
}) => {
  return (
    <PageTemplateBlock
      style={style}
      className={className}
      $contentPadding={contentPadding}
    >
      {location.pathname !== '/' && <GoHomeLink to="/">Go Home</GoHomeLink>}
      {!hideHeader && <Header />}
      <div className="inner">
        <div className="content">{children}</div>
      </div>
      {!hideFooter && (
        <Footer
          author="Yunseo Hwang"
          homepage="https://github.com/hseoy/the-beauty-of-science"
        />
      )}
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
  contentPadding: PropTypes.string,
  location: PropTypes.oneOfType([PropTypes.object]),
};

PageTemplate.defaultProps = {
  children: null,
  style: null,
  className: '',
  hideHeader: false,
  hideFooter: false,
  contentPadding: '',
  location: null,
};

const PageTemplateBlock = styled.div`
  > .inner {
    width: 80%;
    max-width: 1240px;
    margin: 0 auto;
    position: relative;

    > .content {
      padding: ${props => props.$contentPadding || '0px'};
    }
  }
`;

const GoHomeLink = styled(LinkButton)`
  display: inline-block;
  position: fixed;
  top: 0;
  left: 0;
  margin: 10px;
`;

export default withRouter(PageTemplate);

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import LinkButton from 'components/common/LinkButton';
import zIndexes from 'lib/styles/zIndexes';
import Header from './Header';
import Footer from './Footer';

const PageTemplate = ({
  children,
  style,
  className,
  hideHeader,
  hideFooter,
  contentPadding,
  useCustomInner,
  fullSizeInner,
  location,
}) => {
  return (
    <PageTemplateBlock
      style={style}
      className={className}
      $contentPadding={contentPadding}
      $fullSizeInner={fullSizeInner}
    >
      {location.pathname !== '/' && <GoHomeLink to="/">Go Home</GoHomeLink>}
      {!hideHeader && <Header />}
      {useCustomInner ? (
        children
      ) : (
        <div className="inner">
          <div className="content">{children}</div>
        </div>
      )}
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
  fullSizeInner: PropTypes.bool,
  useCustomInner: PropTypes.bool,
  location: PropTypes.oneOfType([PropTypes.object]),
};

PageTemplate.defaultProps = {
  children: null,
  style: null,
  className: '',
  hideHeader: false,
  hideFooter: false,
  contentPadding: '',
  fullSizeInner: false,
  useCustomInner: false,
  location: null,
};

const PageTemplateBlock = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: auto;

  > .inner {
    width: 80%;
    max-width: 1240px;
    height: ${props => (props.$fullSizeInner ? '100%' : 'auto')};
    margin: 0 auto;
    position: relative;

    > .content {
      width: 100%;
      height: ${props => (props.$fullSizeInner ? '100%' : 'auto')};
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
  z-index: ${zIndexes.GoHomeLink};
`;

export default withRouter(PageTemplate);

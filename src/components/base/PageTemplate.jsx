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
  contentPadding,
}) => {
  return (
    <PageTemplateBlock
      style={style}
      className={className}
      $contentPadding={contentPadding}
    >
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
};

PageTemplate.defaultProps = {
  children: null,
  style: null,
  className: '',
  hideHeader: false,
  hideFooter: false,
  contentPadding: '',
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

export default PageTemplate;

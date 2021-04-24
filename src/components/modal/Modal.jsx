import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import zIndexes from 'lib/styles/zIndexes';
import Overlay from './Overlay';
import Portal from '../common/Portal';
import ModalTemplate from './ModalTemplate';

const Modal = ({
  children,
  closeHandler,
  maskClosable,
  closable,
  visible,
  useTemplate,
  title,
  button,
  checkHandler,
  customInner,
  bgColor,
  bdColor,
  color,
}) => {
  useEffect(() => {
    if (visible) {
      document.body.style.cssText = `position:fixed; top:-${window.scrollY}px;left:-${window.scrollX}px;overflow: hidden`;
      return () => {
        const scrollY = document.body.style.top;
        const scrollX = document.body.style.left;
        document.body.style.cssText = `position: ""; top: "";left: "";`;
        window.scrollTo(
          parseInt(scrollX || '0', 10) * -1,
          parseInt(scrollY || '0', 10) * -1,
        );
      };
    }
    return () => {};
  }, [visible]);

  const close = e => {
    if (closeHandler) {
      closeHandler(e);
    }
  };

  const onMaskClick = e => {
    if (e.target === e.currentTarget) {
      close(e);
    }
  };

  return (
    <Portal elementId="modal-root">
      <Overlay visible={visible} animation>
        <ModalBlock
          tapIndex="-1"
          onClick={maskClosable ? onMaskClick : null}
          $visible={visible}
          $color={color}
          $bdColor={bdColor}
          $bgColor={bgColor}
        >
          {customInner ? (
            children
          ) : (
            <div className="inner">
              {closable && (
                <button className="close-button" type="button" onClick={close}>
                  &times;
                </button>
              )}
              <div className="content">
                {useTemplate ? (
                  <ModalTemplate
                    title={title}
                    button={button}
                    checkHandler={checkHandler}
                    primaryColor={bgColor}
                    accentColor={color}
                  >
                    {children}
                  </ModalTemplate>
                ) : (
                  children
                )}
                {children}
              </div>
            </div>
          )}
        </ModalBlock>
      </Overlay>
    </Portal>
  );
};

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  closeHandler: PropTypes.func,
  maskClosable: PropTypes.bool,
  closable: PropTypes.bool,
  visible: PropTypes.bool,
  useTemplate: PropTypes.bool,
  title: PropTypes.string,
  button: PropTypes.string,
  checkHandler: PropTypes.func,
  customInner: PropTypes.bool,
  bgColor: PropTypes.string,
  bdColor: PropTypes.string,
  color: PropTypes.string,
};

Modal.defaultProps = {
  closeHandler: null,
  maskClosable: true,
  closable: true,
  visible: false,
  useTemplate: false,
  title: '',
  button: '',
  checkHandler: null,
  customInner: false,
  bgColor: '',
  bdColor: '',
  color: '',
};

const ModalBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.6s;
  overflow: hidden;
  width: 100%;
  height: ${props => (props.$visible ? '100%' : '0%')};

  > .inner {
    box-sizing: border-box;
    position: relative;
    border-radius: 20px;
    min-width: 500px;
    overflow: hidden;

    background-color: ${props =>
      props.$bgColor || props.theme.colors.primaryColor || '#fff'};
    border: 5px solid
      ${props => props.$bdColor || props.theme.colors.accentColor || '#000'};
    color: ${props => props.$color || props.theme.colors.accentColor || '#000'};

    > .close-button {
      position: absolute;
      top: 0px;
      right: 0px;
      width: 40px;
      height: 40px;
      background-color: transparent;
      font-size: 18px;
      font-weight: bold;
      cursor: pointer;
      z-index: ${zIndexes.ModalCloseButton};
    }

    > .content {
      position: relative;
      width: 100%;
      padding: 20px;
      overflow-y: auto;
    }
  }
`;

export default Modal;

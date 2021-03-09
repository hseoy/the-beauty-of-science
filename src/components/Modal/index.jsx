import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Portal from 'components/Portal';
import Overlay from 'components/Overlay';
import S from './style';
import Inner from './Inner';

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
}) => {
  useEffect(() => {
    document.body.style.cssText = `position:fixed; top:-${window.scrollY}px`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = `position: ""; top: "";`;
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  });

  const onMaskClick = e => {
    if (e.target === e.currentTarget && closeHandler) {
      closeHandler(e);
    }
  };

  return (
    <Portal elementId="modal-root">
      <Overlay visible={visible} animation>
        <S.ModalWrap
          tapIndex="-1"
          onClick={maskClosable ? onMaskClick : null}
          visible={visible}
        >
          {customInner ? (
            children
          ) : (
            <Inner
              closable={closable}
              closeHandler={closeHandler}
              useTemplate={useTemplate}
              title={title}
              button={button}
              checkHandler={checkHandler}
            >
              {children}
            </Inner>
          )}
        </S.ModalWrap>
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
};

Modal.defaultProps = {
  closeHandler: undefined,
  maskClosable: true,
  closable: true,
  visible: false,
  useTemplate: false,
  title: '',
  button: '',
  checkHandler: undefined,
  customInner: false,
};

export default Modal;

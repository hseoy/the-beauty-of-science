import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Portal from 'components/Portal';
import S from './style';

const Modal = ({ children, closeHandler, maskClosable, closable, visible }) => {
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

  const close = e => {
    if (closeHandler) {
      closeHandler(e);
    }
  };

  return (
    <Portal elementId="modal-root">
      <S.Wrap visible={visible}>
        <S.Overlay visible={visible} />
        <S.ModalWrap
          tapIndex="-1"
          onClick={maskClosable ? onMaskClick : null}
          visible={visible}
        >
          <S.Inner tabIndex="0">
            {closable && <S.CloseButton onClick={close}>&times;</S.CloseButton>}
            <S.Content>{children}</S.Content>
          </S.Inner>
        </S.ModalWrap>
      </S.Wrap>
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
};

Modal.defaultProps = {
  closeHandler: undefined,
  maskClosable: true,
  closable: true,
  visible: false,
};

export default Modal;

import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/modal/Modal';

const AuthModal = ({ visible, title, body, checkHandler }) => {
  return (
    <Modal
      useTemplate
      maskClosable={false}
      closable={false}
      visible={visible}
      title={title}
      button="Check"
      checkHandler={checkHandler}
    >
      {body}
    </Modal>
  );
};

AuthModal.propTypes = {
  visible: PropTypes.bool,
  title: PropTypes.string,
  body: PropTypes.string,
  checkHandler: PropTypes.func,
};

AuthModal.defaultProps = {
  visible: false,
  title: '',
  body: '',
  checkHandler: null,
};

export default AuthModal;

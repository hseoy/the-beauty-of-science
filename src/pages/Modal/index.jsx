import React, { useState } from 'react';
import Modal from 'components/Modal';

const ModalPage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState('TITLE');

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const checkModal = () => {
    if (modalTitle === 'HELLO') {
      closeModal();
      setModalTitle('TITLE');
    } else {
      setModalTitle('HELLO');
    }
  };

  return (
    <>
      <button type="button" onClick={openModal}>
        Open Modal
      </button>
      <Modal
        visible={modalVisible}
        closable
        maskClosable
        closeHandler={closeModal}
        useTemplate
        title={modalTitle}
        button="CHECK"
        checkHandler={checkModal}
      >
        Hello
      </Modal>
    </>
  );
};

export default ModalPage;

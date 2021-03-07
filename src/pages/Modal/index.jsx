import React, { useState } from 'react';
import Modal from 'components/Modal';

const ModalPage = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
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
      >
        Hello
      </Modal>
    </>
  );
};

export default ModalPage;

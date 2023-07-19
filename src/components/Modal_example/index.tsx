import Modal from "components/Modal";
import React, { useState } from "react";

const ModalExample = ({
  isOpen,
  close,
}: {
  isOpen: boolean;
  close: () => void;
}) => {
  return (
    <Modal.Wrapper open={isOpen} onClose={close}>
      <Modal.Head>testing </Modal.Head>
      <Modal.Body>testing </Modal.Body>
      <Modal.Footer>testing </Modal.Footer>
    </Modal.Wrapper>
  );
};

export default ModalExample;

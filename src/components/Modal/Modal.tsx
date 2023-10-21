import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

import useLockBodyScroll from '../../hooks/useLockBodyScroll';

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

const Modal = ({ children, onClose }: ModalProps) => {
  const modalRoot = document.querySelector('#modal-root');
  useLockBodyScroll();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!modalRoot) return null;
  return createPortal(
    <ModalOverlay onClick={onClose}>
      <ModalContent>{children}</ModalContent>
    </ModalOverlay>,
    modalRoot,
  );
};

export default Modal;

const ModalOverlay = styled.div`
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  width: 327px;
  height: 441px;
  display: flex;
  align-items: center;
  padding: 32px 24px 32px 24px;
  gap: 32px;
  border-radius: 24px;
  background-color: rgba(255, 255, 255, 1);
`;

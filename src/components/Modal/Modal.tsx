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
  height: 100%;
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

  .modal__wrapper {
    height: 100%;
    width: 100%;
    padding: 12px 8px;
    position: relative;

    .modal__createdAt {
      color: rgba(147, 147, 148, 1);
      font-size: 14px;
    }

    .modal__answer {
      font-size: 16px;
      line-height: 24px;
      color: rgba(15, 18, 46, 1);
    }

    .ToAnsersButton {
      width: 275px;
      height: 48px;
      border-radius: 24px;
      padding: 8px 16px;
      gap: 8px;
      background-color: rgba(131, 163, 216, 1);
      color: rgba(255, 255, 255, 1);
      border: none;
      position: absolute;
      bottom: 4px;
    }
  }
`;

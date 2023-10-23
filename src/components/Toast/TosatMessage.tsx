import { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

import Toast from './Toast';

interface Props {
  show: boolean;
  type?: 'link' | 'kakao';
  handleShow: (arg1: boolean) => void;
}

const messages = {
  link: {
    icon: 'link.svg',
    text: '질문 링크가 복사됐어요',
  },
  kakao: {
    icon: 'check.svg',
    text: '확인 코드가 카카오톡으로 전송됐어요',
  },
};

const TosatMessage = ({ show, type, handleShow }: Props) => {
  const message = messages[type ?? 'link'];

  useEffect(() => {
    let timeId = 0;
    if (show) {
      timeId = setTimeout(() => {
        handleShow(false);
      }, 2000);
    }
    return () => {
      clearTimeout(timeId);
    };
  }, [show]);

  return (
    <>
      {type && (
        <StyledToastMessage $isOpen={show}>
          <Toast text={message.text} icon={message.icon} />
        </StyledToastMessage>
      )}
    </>
  );
};

export default TosatMessage;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20%);
  }
  to {
    opacity: 1;
    transform: translateY(-20%);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(-20%);
  }
  to {
    opacity: 0;
    transform: translateY(20%);
    display: none;
  }
`;

const StyledToastMessage = styled.div<{ $isOpen: boolean }>`
  position: absolute;

  top: -44px;
  width: 100%;

  opacity: 0;

  animation-name: ${({ $isOpen }) => ($isOpen ? fadeIn : fadeOut)};
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
`;

import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

import Button from '../components/Button';
import Title from '../components/Title';
import Toast from '../components/Toast';
import useClipboard from '../hooks/useClipboard';
import useKakaoShare from '../hooks/useKakaoShare';

const QuestionSharePage = () => {
  const navigate = useNavigate();
  const { confirmMessage } = useKakaoShare();
  const { handleShareCodeCopy, isOpen } = useClipboard();

  const handleMoveHome = () => {
    navigate('/');
  };

  return (
    <StyledContainer>
      <Title>
        질문이 생성됐어요
        <br />
        아래 공유하기 버튼을 눌러
        <br />
        링크를 복사하세요
      </Title>
      <img src="/logo.svg" alt="로고 이미지" />
      <StyledBottomBox>
        <Button color="primary" onClick={() => handleShareCodeCopy('UUID')}>
          질문 공유하기
        </Button>
        <Button color="disabled" onClick={() => confirmMessage('UUID/123456')}>
          확인 코드
        </Button>

        <StyledToastMessage $isOpen={isOpen}>
          <Toast />
        </StyledToastMessage>

        <StyledText onClick={handleMoveHome}>새 질문 만들기</StyledText>
      </StyledBottomBox>
    </StyledContainer>
  );
};

export default QuestionSharePage;

const StyledContainer = styled.div`
  position: relative;

  padding-top: 141px;
  height: 100vh;

  border: 1px solid lightgray;

  background: ${({ theme }) => theme.background};

  text-align: center;
`;

const StyledBottomBox = styled.div`
  position: absolute;

  bottom: 62px;
  left: 50%;

  display: flex;
  flex-direction: column;
  gap: 8px;

  text-align: center;

  transform: translateX(-50%);
`;

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

const StyledText = styled.span`
  cursor: pointer;

  margin-top: 8px;

  color: ${({ theme }) => theme.color.gray100};
  font-size: 14px;
  font-weight: 600;
`;

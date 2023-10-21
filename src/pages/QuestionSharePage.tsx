import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../components/Button';
import Title from '../components/Title';
import Toast from '../components/Toast';

const QuestionSharePage = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleShareCodeCopy = () => {
    setIsOpen(true);
  };

  const handleMoveHome = () => {
    navigate('/');
  };

  useEffect(() => {
    let timeId = 0;
    if (isOpen) {
      timeId = setTimeout(() => {
        setIsOpen(false);
      }, 3000);
    }
    return () => {
      clearTimeout(timeId);
    };
  }, [isOpen]);

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
        <Button color="primary" onClick={handleShareCodeCopy}>
          질문 공유하기
        </Button>
        <Button color="disabled" onClick={() => alert('확인코드 복사')}>
          확인 코드
        </Button>

        {isOpen && (
          <StyledToastMessage>
            <Toast />
          </StyledToastMessage>
        )}

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

const StyledToastMessage = styled.div`
  position: absolute;

  top: -44px;
  left: 50%;

  transform: translateX(-50%);
`;

const StyledText = styled.span`
  cursor: pointer;

  margin-top: 8px;

  color: ${({ theme }) => theme.color.gray100};
  font-size: 14px;
  font-weight: 600;
`;

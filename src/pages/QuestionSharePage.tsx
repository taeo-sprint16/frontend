import styled from 'styled-components';

import Button from '../components/Button';
import Title from '../components/Title';

const QuestionSharePage = () => {
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
        <Button color="primary" onClick={() => alert('질문링크 복사')}>
          질문 공유하기
        </Button>
        <Button color="disabled" onClick={() => alert('확인코드 복사')}>
          확인 코드
        </Button>
        <StyledText>새 질문 만들기</StyledText>
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

const StyledText = styled.span`
  cursor: pointer;

  margin-top: 8px;

  color: ${({ theme }) => theme.color.gray100};
  font-size: 14px;
  font-weight: 600;
`;

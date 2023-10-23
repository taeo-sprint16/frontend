import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../components/Button';
import Title from '../components/Title';
import TosatMessage from '../components/Toast/TosatMessage';
import useKakaoShare from '../hooks/useKakaoShare';
import { clipboardText } from '../utils/clipboardWrite';

const ROOT_URL = import.meta.env.PROD
  ? 'https://aboutme-ko.vercel.app'
  : 'http://localhost:5173';

const QuestionSharePage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const confirmCode = searchParams.get('confirmCode');
  const shareCode = searchParams.get('shareCode');

  const { confirmMessage } = useKakaoShare();
  const [isShow, setIsShow] = useState<boolean>(false);
  const [type, setType] = useState<'link' | 'kakao' | undefined>();

  const handleMoveHome = () => {
    navigate('/');
  };

  const handleShowMessage = (show: boolean) => {
    setIsShow(show);
  };

  const handleShareCode = (type: 'link' | 'kakao') => {
    if (type === 'link') {
      clipboardText(`${ROOT_URL}/answer/${shareCode || 'sharecode'}`);
    } else if (type === 'kakao') {
      confirmMessage(confirmCode);
    }
    setType(type);
    handleShowMessage(true);
  };

  return (
    <StyledContainer>
      <Title>질문이 생성됐어요!</Title>
      <StyeldDescription>
        ‘질문 공유하기’ 버튼을 눌러 질문을 공유해 주세요.
        <br />
        답변은 확인코드를 입력해야 확인할 수 있어요.
        <br />
        ‘확인코드 받기’ 후 반드시 코드를 기억해두세요!
      </StyeldDescription>
      <img src="/logo.svg" alt="로고 이미지" />
      <StyledBottomBox>
        <Button color="primary100" onClick={() => handleShareCode('link')} hover>
          질문 공유하기
        </Button>
        <Button
          color="secondary100"
          textColor="primary100"
          onClick={() => handleShareCode('kakao')}
          hover
        >
          확인 코드
        </Button>

        <TosatMessage type={type} show={isShow} handleShow={handleShowMessage} />

        <StyledText onClick={handleMoveHome}>새 질문 만들기</StyledText>
      </StyledBottomBox>
    </StyledContainer>
  );
};

export default QuestionSharePage;

const StyledContainer = styled.div`
  position: relative;

  padding-top: 20%;
  width: 100%;
  height: 100%;

  border: 1px solid lightgray;

  background: ${({ theme }) => theme.background};

  text-align: center;
`;

const StyeldDescription = styled.p`
  color: ${({ theme }) => theme.color.gray200};
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`;

const StyledBottomBox = styled.div`
  position: absolute;

  width: 100%;
  padding: 0 24px;

  bottom: 20px;

  display: flex;
  flex-direction: column;
  gap: 8px;

  text-align: center;
`;

const StyledText = styled.span`
  cursor: pointer;

  margin-top: 8px;

  color: ${({ theme }) => theme.color.gray200};
  font-size: 14px;
  font-weight: 600;

  &:hover {
    color: ${({ theme }) => theme.color.gray100};
  }
`;

import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../components/Button';
import Title from '../components/Title';
import TosatMessage from '../components/Toast/TosatMessage';
import useClipboard from '../hooks/useClipboard';
import useKakaoShare from '../hooks/useKakaoShare';

const QuestionSharePage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const confirmCode = searchParams.get('confirmCode');
  const shareCode = searchParams.get('shareCode');

  // console.log(confirmCode, shareCode);

  // if (!confirmCode && !shareCode) {
  //   navigate('/');
  // }

  const { confirmMessage } = useKakaoShare();
  const { handleShareCodeCopy } = useClipboard();
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
      handleShareCodeCopy(String(shareCode));
    } else if (type === 'kakao') {
      confirmMessage(String(confirmCode));
    }
    setType(type);
    handleShowMessage(true);
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
        <Button color="primary" onClick={() => handleShareCode('link')}>
          질문 공유하기
        </Button>
        <Button color="disabled" onClick={() => handleShareCode('kakao')}>
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
  width: 100%;

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

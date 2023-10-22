import { useEffect, useState } from 'react';
import styled from 'styled-components';

import Button from '../components/Button';
import Title from '../components/Title';

const ConfirmPage = () => {
  const [inputText, setInputText] = useState<string>('');
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const handleCodeConfirm = () => {
    console.log(inputText);
  };

  useEffect(() => {
    if (inputText) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [inputText]);

  return (
    <StyledContainer>
      <Title>
        질문 생성 후 받은 확인 코드를
        <br />
        아래에 입력하여
        <br />
        도착한 답변을 확인해 보세요.
      </Title>
      <img src="/confirm.svg" alt="로고 이미지" />
      <StyledBottomBox>
        <StyledInput
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          type="text"
          placeholder="확인코드를 입력해주세요."
        />
        <Button color="primary100" disabled={isDisabled} onClick={handleCodeConfirm}>
          답변 확인하기
        </Button>
      </StyledBottomBox>
    </StyledContainer>
  );
};

export default ConfirmPage;

const StyledContainer = styled.div`
  position: relative;

  padding-top: 141px;
  height: 100vh;
  width: 100%;

  border: 1px solid lightgray;

  background: ${({ theme }) => theme.background};

  text-align: center;
`;

const StyledBottomBox = styled.div`
  position: absolute;

  width: 100%;
  padding: 0 24px;

  bottom: 62px;
  left: 50%;

  display: flex;
  flex-direction: column;
  gap: 8px;

  text-align: center;

  transform: translateX(-50%);
`;

const StyledInput = styled.input`
  outline: none;

  width: 100%;
  height: 48px;

  color: ${({ theme }) => theme.color.gray300};
  text-align: center;

  background-color: inherit;

  border: 1px solid ${({ theme }) => theme.color.gray300};
  border-radius: 24px;

  &:focus::placeholder {
    color: transparent;
  }

  &::placeholder {
    font-size: 16px;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
  }
`;

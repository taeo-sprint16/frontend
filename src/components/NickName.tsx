import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';

import { nickNameState } from '../atom';

const NickName = () => {
  const [nickName, setNickName] = useRecoilState(nickNameState);
  const navigate = useNavigate();

  const handleNickNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickName(event.target.value);
  };

  const handleComplete = () => {
    navigate('/write-question');
  };

  return (
    <StyledQuestionContainer>
      <Wrapper>
        <UserIcon>
          <img src="/user.svg" alt="user" />
        </UserIcon>
        <Title>
          <span>질문자님의 닉네임을 입력해주세요.</span>
          <span> 적어주신 닉네임은 답변자에게 공유됩니다.</span>
        </Title>
        <PlaceHolder
          type="text"
          placeholder="닉네임을 입력하세요."
          value={nickName}
          onChange={handleNickNameChange}
        />
      </Wrapper>
      <CompleteButton onClick={handleComplete} disabled={nickName === '' ? true : false}>
        다음
      </CompleteButton>
    </StyledQuestionContainer>
  );
};

const StyledQuestionContainer = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin: 0 auto;
  padding: 0 24px;
`;

const UserIcon = styled.div`
  width: 20rem;
  height: 2rem;
  margin-top: 3.3rem;
  margin-bottom: 1.25rem;
  gap: 1.25rem;
  img {
    width: 2rem;
    height: 2rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 480px;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;

  span:nth-child(1),
  span:nth-child(2) {
    font-weight: bold;
  }
  span:nth-child(1) {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
  }
  span:nth-child(2) {
    color: #939394;
    font: normal 500 0.875rem / normal 'Pretendard';
    line-height: 1.25rem;
    margin-bottom: 1.25rem;
  }
`;

const PlaceHolder = styled.input`
  text-align: left;
  font: normal 500 1rem / normal 'Pretendard';
  border: none;
  margin-bottom: 28rem;

  color: ${({ theme }) => theme.color.gray100};
  font-weight: 500;
  line-height: 24px;

  &::placeholder {
    padding-right: 1rem;
    color: ${({ theme }) => theme.color.gray400};
  }
  overflow: hidden;
  outline: none;
`;

const CompleteButton = styled.button`
  position: absolute;
  bottom: 20px;
  display: flex;
  width: calc(100% - 48px);
  max-width: calc(480px - 48px);
  left: 50%;
  transform: translateX(-50%);
  height: 3rem;
  padding: 0 24px;
  justify-content: center;
  align-items: center;
  border-radius: 1.5rem;
  background-color: ${({ theme }) => theme.color.primary100};

  color: white;
  border: none;
  cursor: pointer;
  font-weight: 700;
  &:hover {
    ${({ theme }) => theme.hover.primary100}
  }
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

export default NickName;

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
      <UserIcon>
        <img src="/user.svg" alt="user" />
      </UserIcon>
      <Wrapper>
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
  width: 20.4rem;
  height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 0 24px;
`;

const UserIcon = styled.div`
  width: 20rem;
  height: 2rem;
  margin-top: 3.3rem;
  margin-bottom: 1.25rem;
  margin-left: 1.5rem;
  gap: 1.25rem;
  img {
    width: 2rem;
    height: 2rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
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
  }
  span:nth-child(2) {
    color: #939394;
    font: normal 500 0.875rem / normal 'Pretendard';
    line-height: 1.25rem;
    margin-bottom: 2rem;
  }
`;

const PlaceHolder = styled.input`
  text-align: left;
  font: normal 500 1rem / normal 'Pretendard';
  border: none;
  margin-bottom: 28rem;
  &::placeholder {
    padding-right: 1rem;
  }

  display: flex;
  justify-content: flex-start;
  width: 100%;
  overflow: hidden;
  outline: none;
`;

const CompleteButton = styled.button`
  position: absolute;
  bottom: 3.125rem;
  display: flex;
  width: calc(100% - 48px);
  max-width: calc(480px - 48px);
  left: 50%;
  transform: translateX(-50%);
  height: 3rem;
  padding: 0.5rem 1.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 1.5rem;
  background: #86aff4;
  color: white;
  border: none;
  cursor: pointer;
  font-weight: 700;
  &:hover {
    background: #7aa3e9;
  }
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

export default NickName;

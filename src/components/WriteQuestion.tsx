import axios from 'axios';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { styled } from 'styled-components';

import { nickNameState } from '../atom';

type KeyWord = '장점' | '단점' | '첫인상' | '성격';

interface PlaceHolderProps {
  [key: string]: string;
}

const WriteQuestion = () => {
  const [question, setQuestion] = useState('');
  const [count, setCount] = useState(0);
  const [doneClicked, setDoneClicked] = useState(false);

  const [activeButton, setActiveButton] = useState('');

  const navigate = useNavigate();

  const nickName = useRecoilValue(nickNameState);

  const ref = useRef<HTMLTextAreaElement | null>(null);

  const handleQuestion = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputText = event.target.value;
    setQuestion(inputText);
    setCount(inputText.length);
  };

  const handleDoneClick = () => {
    setDoneClicked(true);
  };

  const updatePlaceHodler = (word: string) => {
    const placeholderItem: PlaceHolderProps = {
      장점: '내 장점에 대한 질문을 적어보세요.',
      단점: '내 단점에 대한 질문을 적어보세요.',
      첫인상: '제 첫인상은 어떤가요?',
      성격: '제 성격은 어떤가요?',
    };

    const placeholderText = placeholderItem[word] || '질문';
    setQuestion('');
    if (ref.current) ref.current.placeholder = placeholderText;
  };

  const handleSelect = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const selectedKeyword = (event.currentTarget.textContent || '') as KeyWord;
    if (activeButton === selectedKeyword) return;
    updatePlaceHodler(selectedKeyword);
    setActiveButton(selectedKeyword);
  };

  const handleCompleteQuestion = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      const response = await axios({
        method: 'POST',
        url: import.meta.env.VITE_BASE_URL + '/api/content/create',
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify({
          nickname: nickName,
          question,
        }),
      });

      const res = response.data;

      navigate(
        `/share?confirmCode=${res.data.confirmCode}&shareCode=${res.data.shareCode}`,
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <StyledQuestionContainer>
      <Wrapper>
        <WriteIcon>
          <img src="/write-question.svg" alt="write-question" />
        </WriteIcon>
        <Title>
          <span>나에 대해 알고 싶은 질문을 적어보세요.</span>
          <span>
            적절한 질문이 생각나지 않는다면
            <br />
            키워드 선택으로 질문을 입력해보세요.
          </span>
        </Title>
        <ButtonContainer>
          <Button onClick={handleSelect} type="button" $active={activeButton === '장점'}>
            장점
          </Button>
          <Button onClick={handleSelect} type="button" $active={activeButton === '단점'}>
            단점
          </Button>
          <Button
            onClick={handleSelect}
            type="button"
            $active={activeButton === '첫인상'}
          >
            첫인상
          </Button>
          <Button onClick={handleSelect} type="button" $active={activeButton === '성격'}>
            성격
          </Button>
          <Button
            onClick={handleSelect}
            type="button"
            $active={activeButton === '의사소통'}
          >
            의사소통
          </Button>
        </ButtonContainer>
        <PlaceHolder
          ref={ref}
          placeholder={'질문을 입력하세요.'}
          value={question}
          onChange={handleQuestion}
        />
      </Wrapper>
      {doneClicked ? (
        <CompleteButton
          onClick={handleCompleteQuestion}
          disabled={question === '' ? true : false}
        >
          질문 작성 완료
        </CompleteButton>
      ) : (
        <DoneContainer>
          <span>{count} / 50</span>
          <button type="button" onClick={handleDoneClick}>
            완료
          </button>
        </DoneContainer>
      )}
    </StyledQuestionContainer>
  );
};

const StyledQuestionContainer = styled.form`
  width: 20.4rem;
  height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 0 24px;
`;

const WriteIcon = styled.div`
  width: 20rem;
  height: 2rem;
  margin-top: 3.3rem;
  margin-left: 2.5rem;
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
  align-items: center;
  gap: 1.25rem;
  padding: 0 24px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  span {
    gap: 12px;
  }
  span:nth-child(1) {
    font-weight: bold;
    margin-bottom: 0.75rem;
  }
  span:nth-child(2) {
    color: #939394;
    line-height: 1.25rem;
    font-weight: 500;
    margin-bottom: 1.25rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  width: 100%;
`;

const Button = styled.button<{ $active: boolean }>`
  display: flex;
  height: 1.75rem;
  justify-content: space-between;
  align-items: center;
  border: none;
  font-weight: 600;
  color: #939394;
  border-radius: 1rem;
  background: ${(props) => (props.$active ? '#7aa3e9' : '#f4f5f9')};
  cursor: pointer;
  &:focus {
    background: #7aa3e9;
    color: #f4f5f9;
  }
`;

const CompleteButton = styled.button`
  display: flex;
  width: 23.4rem;
  height: 3rem;
  padding: 0.5rem 1.5rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
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

const PlaceHolder = styled.textarea`
  text-align: left;
  font: normal 500 1rem / normal 'Pretendard';
  border: none;
  margin-bottom: 28rem;
  &::placeholder {
    padding-right: 1rem;
  }
  display: flex;
  justify-content: flex-start;
  overflow: hidden;
  outline: none;
`;

const DoneContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span,
  button {
    font-weight: bold;
  }
  button {
    border: none;
    outline: none;
    background: transparent;
    cursor: pointer;
  }
`;

export default WriteQuestion;

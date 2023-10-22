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
    // adjustTextareaHeight();
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
    const res = await axios({
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
    navigate(`/share?confirmCode${res.data.confirmCode}&shareCode=${res.data.shareCode}`);
  };

  return (
    <StyledQuestionContainer>
      <WriteIcon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <g clipPath="url(#clip0_24_2042)">
            <path
              d="M28.6299 9.07794C29.6246 10.607 29.1235 12.4845 27.8359 13.7767L13.7735 27.8888C13.3301 28.3338 12.7453 28.6071 12.1182 28.6435C10.9683 28.7101 8.7742 28.8081 5.42532 28.8402C5.28546 28.8415 5.14757 28.7993 5.0354 28.7158C4.74743 28.5013 4.42117 28.2309 4.09491 27.9047C3.76854 27.5783 3.49809 27.2519 3.28356 26.9639C3.20003 26.8517 3.15786 26.7139 3.15921 26.574C3.19133 23.2252 3.28926 21.0311 3.35596 19.8813C3.39235 19.2541 3.66561 18.6694 4.11058 18.226L18.2228 4.1636C19.515 2.87598 21.3924 2.3749 22.9215 3.36966C23.8089 3.94697 24.8762 4.77349 26.0511 5.9484C27.226 7.12327 28.0525 8.19047 28.6299 9.07794Z"
              fill="#DEE7FA"
            />
            <path
              d="M29.0373 6.9236L27.9822 8.1546C27.4766 7.48287 26.8428 6.73987 26.0513 5.9484C25.2601 5.1572 24.5177 4.52399 23.8462 4.01847L25.0768 2.96312C25.8017 2.34172 26.7627 1.97515 27.6061 2.42299C27.9576 2.60969 28.3456 2.87883 28.7336 3.26682C29.1216 3.6548 29.3907 4.04279 29.5774 4.39437C30.0253 5.23769 29.6587 6.19865 29.0373 6.9236Z"
              fill="#EAF1FF"
            />
            <path
              d="M12.9593 28.4441C12.695 28.5577 12.4115 28.6263 12.1186 28.6433C10.9688 28.71 8.7747 28.8079 5.42582 28.8401C5.28596 28.8414 5.14807 28.7992 5.0359 28.7157C4.74793 28.5012 4.42167 28.2308 4.09541 27.9045C3.76903 27.5782 3.49859 27.2518 3.28406 26.9638C3.20052 26.8516 3.15836 26.7137 3.1597 26.5739C3.19182 23.2251 3.28976 21.0309 3.35646 19.8811C3.37348 19.5878 3.44233 19.3037 3.55633 19.0391C4.94623 20.0641 6.7551 21.5197 8.56397 23.3223C10.4306 25.1825 11.9264 27.0427 12.9593 28.4441Z"
              fill="#EAF1FF"
            />
            <path
              d="M28.6303 9.07794C29.6251 10.607 29.124 12.4845 27.8364 13.7767L13.774 27.8888C13.3306 28.3338 12.7458 28.6071 12.1186 28.6435C10.9688 28.7101 8.7747 28.8081 5.42582 28.8402C5.28596 28.8415 5.14807 28.7993 5.0359 28.7158C4.74793 28.5013 4.42167 28.2309 4.09541 27.9047C3.76903 27.5783 3.49859 27.2519 3.28406 26.9639C3.20052 26.8517 3.15836 26.7139 3.1597 26.574C3.19182 23.2252 3.28976 21.0311 3.35646 19.8813C3.39284 19.2541 3.66611 18.6694 4.11107 18.226L18.2233 4.1636C19.5155 2.87598 21.3929 2.3749 22.922 3.36966C23.8094 3.94697 24.8767 4.77349 26.0516 5.9484C27.2265 7.12327 28.053 8.19047 28.6303 9.07794Z"
              stroke="#86AFF4"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M23.8457 4.01816L25.0766 2.96312C25.8015 2.34172 26.7625 1.97515 27.6058 2.42299C27.9574 2.60969 28.3454 2.87883 28.7334 3.26682C29.1213 3.6548 29.3905 4.04279 29.5772 4.39437C30.025 5.23769 29.6584 6.19865 29.037 6.9236L27.982 8.1546"
              stroke="#86AFF4"
              strokeWidth="3"
            />
            <path
              d="M24.9929 16.1145C25.2207 16.6177 25.8131 16.841 26.3163 16.6132C26.8194 16.3855 27.0427 15.793 26.8149 15.2898L24.9929 16.1145ZM16.7105 5.18541C16.2073 4.95768 15.6148 5.18094 15.3871 5.68409C15.1593 6.18724 15.3826 6.77975 15.8857 7.00748L16.7105 5.18541ZM25.9039 15.7022C26.8149 15.2898 26.8148 15.2895 26.8147 15.2891C26.8146 15.289 26.8144 15.2887 26.8143 15.2884C26.8141 15.288 26.8139 15.2874 26.8136 15.2869C26.8131 15.2858 26.8125 15.2845 26.8119 15.2832C26.8107 15.2804 26.8091 15.2772 26.8074 15.2735C26.8039 15.266 26.7995 15.2566 26.794 15.2452C26.7831 15.2224 26.7681 15.1918 26.7486 15.1535C26.7097 15.077 26.653 14.9699 26.5758 14.8339C26.4214 14.562 26.185 14.1748 25.8444 13.6851C25.1629 12.7056 24.0653 11.3182 22.3737 9.62662L20.9595 11.0409C22.5699 12.6513 23.5909 13.948 24.2026 14.8273C24.5085 15.267 24.7124 15.6027 24.8365 15.8214C24.8987 15.9308 24.9409 16.011 24.966 16.0604C24.9785 16.085 24.9868 16.102 24.9912 16.1111C24.9934 16.1157 24.9946 16.1182 24.9949 16.1188C24.995 16.1191 24.9949 16.1189 24.9945 16.1181C24.9944 16.1178 24.9942 16.1173 24.9939 16.1167C24.9937 16.1164 24.9936 16.1161 24.9935 16.1158C24.9933 16.1156 24.9932 16.1152 24.9932 16.1151C24.9931 16.1148 24.9929 16.1146 25.9039 15.7022ZM22.3737 9.62662C20.6821 7.93508 19.2947 6.83742 18.3152 6.15598C17.8256 5.81532 17.4383 5.57894 17.1663 5.42456C17.0303 5.34737 16.9233 5.2907 16.8467 5.25177C16.8085 5.2323 16.7779 5.21728 16.7551 5.20633C16.7437 5.20086 16.7343 5.19641 16.7268 5.19294C16.7231 5.1912 16.7199 5.18971 16.7171 5.18846C16.7158 5.18783 16.7145 5.18726 16.7134 5.18676C16.7129 5.1865 16.7123 5.18626 16.7119 5.18604C16.7116 5.18593 16.7113 5.18577 16.7111 5.18572C16.7108 5.18556 16.7105 5.18541 16.2981 6.09644C15.8857 7.00748 15.8855 7.00735 15.8851 7.00715C15.8851 7.00715 15.8847 7.00702 15.8845 7.00695C15.8842 7.00675 15.8839 7.00662 15.8835 7.00648C15.8829 7.00622 15.8825 7.00595 15.8821 7.00582C15.8814 7.00548 15.8812 7.00535 15.8815 7.00548C15.8821 7.00575 15.8846 7.00695 15.8892 7.00915C15.8983 7.01355 15.9153 7.02182 15.9399 7.03442C15.9893 7.05948 16.0695 7.10168 16.1789 7.16382C16.3976 7.28795 16.7333 7.49182 17.173 7.79775C18.0523 8.40948 19.3491 9.43042 20.9595 11.0409L22.3737 9.62662Z"
              fill="#86AFF4"
            />
            <path
              d="M12.9593 28.4441C11.9264 27.0428 10.4306 25.1826 8.56393 23.3225C6.755 21.5198 4.94607 20.0641 3.55615 19.0391"
              stroke="#86AFF4"
              strokeLinecap="round"
            />
            <path
              d="M17.4857 5.19091C17.9592 5.47506 18.5735 5.32149 18.8576 4.84791C19.1418 4.37433 18.9882 3.76007 18.5146 3.47592L17.4857 5.19091ZM15.1006 3.4187L15.231 2.42724L15.1006 3.4187ZM13.2191 4.11446L13.9262 4.82157L13.2191 4.11446ZM6.62639 9.29298C6.23586 9.68351 6.23586 10.3166 6.62639 10.7072C7.0169 11.0977 7.6501 11.0977 8.04063 10.7072L6.62639 9.29298ZM18.5146 3.47592C17.4077 2.81176 16.106 2.54234 15.231 2.42724L14.9702 4.41016C15.7444 4.512 16.7266 4.73543 17.4857 5.19091L18.5146 3.47592ZM12.512 3.40736L6.62639 9.29298L8.04063 10.7072L13.9262 4.82157L12.512 3.40736ZM15.231 2.42724C14.166 2.28714 13.1889 2.73044 12.512 3.40736L13.9262 4.82157C14.2495 4.4983 14.6328 4.36578 14.9702 4.41016L15.231 2.42724Z"
              fill="#86AFF4"
            />
            <path d="M4 28L2 30" stroke="#86AFF4" strokeLinejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_24_2042">
              <rect width="32" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </WriteIcon>
      <Wrapper>
        <Title>
          <span>나에 대해 알고 싶은 질문을 적어보세요.</span>
          <span>
            적절한 질문이 생각나지 않는다면
            <br />
            키워드 선택으로 질문을 입력해보세요.
          </span>
        </Title>
        <ButtonContainer>
          <Button onClick={handleSelect} type="button" active={activeButton === '장점'}>
            장점
          </Button>
          <Button onClick={handleSelect} type="button" active={activeButton === '단점'}>
            단점
          </Button>
          <Button onClick={handleSelect} type="button" active={activeButton === '첫인상'}>
            첫인상
          </Button>
          <Button onClick={handleSelect} type="button" active={activeButton === '성격'}>
            성격
          </Button>
          <Button
            onClick={handleSelect}
            type="button"
            active={activeButton === '의사소통'}
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
  margin-top: 60px;
  width: 375px;
  height: 812px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 0 24px;
`;

const WriteIcon = styled.svg`
  width: 20rem;
  height: 2rem;
  margin-top: 3.3rem;
  margin-bottom: 1.25rem;
  margin-right: 1.5rem;
  gap: 1.25rem;
  svg {
    width: 2rem;
    height: 2rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 20.4rem;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  span:nth-child(1) {
    font-weight: bold;
  }
  span:nth-child(2) {
    color: #939394;
    line-height: 1.25rem;
    font-weight: 500;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;

const Button = styled.button<{ active: boolean }>`
  display: flex;
  height: 1.75rem;
  padding: 0.5rem 0.5rem;
  justify-content: space-between;
  align-items: center;
  border: none;
  font-weight: 600;
  color: #939394;
  border-radius: 1rem;
  background: ${(props) => (props.active ? '#7aa3e9' : '#f4f5f9')};
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
  font:
    normal 500 1rem / normal 'Pretendard',
    sans-serif;
  border: none;
  margin-bottom: 23rem;
  &::placeholder {
    padding-right: 1rem;
  }
  resize: none;
  width: 100%;
  min-height: 6.25rem;
  overflow: hidden;
  outline: none;
  padding: 0 24px;
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

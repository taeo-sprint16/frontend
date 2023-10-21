import axios from 'axios';
import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

import { AnswerPageProps } from '../../pages/AnswerPage';

const API_ANSWER_POST_URL =
  'http://aboutme.ap-northeast-2.elasticbeanstalk.com/api/content/answer';

const AnswerPageMain = ({ nickname, quesiton, setStep }: AnswerPageProps) => {
  const [answerText, setAnswerText] = useState('');

  const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setAnswerText(event.target.value);
  };

  const postAnswerHandler = async () => {
    try {
      const response = await axios.post(API_ANSWER_POST_URL, {
        shareCode: '7716N2EK',
        answer: answerText,
      });
      if (response.data === 'Created') {
        console.log(response);
        setStep('complete');
      } else {
        console.log('답변 작성에 실패했습니다.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <StyledAnswerPageMainContainer>
      <img
        className="main__pencilicon"
        src="/answerMainPencil.svg"
        alt="답변 메인 연필"
      />
      <h1 className="main__question">
        {nickname}에게 답변해주세요.
        <br />
        {quesiton}
      </h1>
      <p className="main__guidetext">안내 문구</p>
      <textarea
        onChange={onChangeHandler}
        placeholder="답변을 입력해주세요"
        className="main__answertext"
      />
      <div className="main__buttonWrapper">
        <button className="main__submitbutton" onClick={postAnswerHandler}>
          답변 작성 완료
        </button>
      </div>
    </StyledAnswerPageMainContainer>
  );
};

export default AnswerPageMain;

const StyledAnswerPageMainContainer = styled.section`
  height: 100vh;
  padding-top: 90px;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 80px;

  .main__pencilicon {
    width: 32px;
    height: 32px;
  }

  .main__question {
    font-size: 20px;
  }

  .main__guidetext {
    margin-top: 10px;
    color: #939394;
  }

  .main__answertext {
    width: 100%;
    height: 400px;
    border: none;
    margin-top: 40px;
  }

  .main__answertext::placeholder {
    position: absolute;
    top: 0;
  }

  .main__buttonWrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    .main__submitbutton {
      position: absolute;
      bottom: 100px;
      background-color: #86aff4;
      width: 327px;
      height: 48px;
      gap: 8px;
      border-radius: 12px;
      border: none;
      color: white;
      cursor: pointer;
    }
  }
`;

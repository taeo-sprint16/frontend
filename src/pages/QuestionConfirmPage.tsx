import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Modal from '../components/Modal/Modal';
import { getCreatedYMD } from '../utils/getCreatedYMD';
// import { useParams } from 'react-router-dom';

interface Answer {
  answer: string;
  createdAt: number;
}

interface ResponseData {
  success: boolean;
  message: string;
  data: {
    nickname: string;
    question: string;
    aiAnalyzeText: string;
    answers: Answer[];
  };
}

const API_MY_ANSWERS_URL =
  'http://aboutme.ap-northeast-2.elasticbeanstalk.com/api/content/confirm';

const QuestionConfirmPage = () => {
  // const { confirmCode } = useParams();
  const mockConfirmCode = '5ADDTU09';
  const [myAnsersResponse, setMyAnswersResponse] = useState<ResponseData>();
  const router = useNavigate();

  useEffect(() => {
    fetchMyAnswers()
      .then((responseData) => {
        setMyAnswersResponse(responseData.data);
        console.log(responseData.data);
      })
      .catch((error) => console.error('내 질문지 가져오는 API 호출 오류 : ', error));
  }, []);

  const fetchMyAnswers = async () => {
    const data = await axios.post(API_MY_ANSWERS_URL, {
      confirmCode: mockConfirmCode,
    });
    return data;
  };

  //modal
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [clickedAnswer, setClickedAnswer] = useState<Answer | null>();

  const handleClickSpecificAnswer = (answer: Answer) => {
    setIsOpen(true);
    setClickedAnswer(answer);
  };

  return (
    <StyledQuestionConfirmContainer>
      <div className="questionConfirm__header">
        <img src="/questionIcon.svg" alt="질문 아이콘" />
        <h1 className="header__question">
          &quot;{myAnsersResponse?.data.question}&quot;
        </h1>
        <img src="/aiIcon.svg" alt="AI 아이콘" />
        {/* strict mode로 인해, ai 한마디가 두 번 화면에 보여지는 에러 발생 */}
        {/* TODO: 스켈레톤 UI 및 로딩스피너 필요 */}
        <p className="header__aiAnalyzeText">
          {/* TODO:  AI TEXT 최대 50자 전달해야됨*/}
          {myAnsersResponse?.data.aiAnalyzeText.slice(0, 50)}
        </p>
      </div>
      <ul className="answersList">
        {/* 11부터 slice한 이유 mockData의 답변 값들이 10번까지 다 비어있음 */}
        {myAnsersResponse?.data.answers.slice(11).map((answer) => (
          <li className="answersList__item" key={answer.createdAt}>
            <div>
              <h3 className="answersList__item--answer">{answer.answer}</h3>
              <p className="answersList__item--createdAt">
                {getCreatedYMD(answer.createdAt)}
              </p>
            </div>

            <button
              className="modalButton"
              onClick={() => handleClickSpecificAnswer(answer)}
            >
              <img src="/modalButton.svg" alt="상세모달창 띄우는 버튼" />
            </button>
          </li>
        ))}
      </ul>

      <div className="question__buttons">
        <button className="question__addButton" onClick={() => router('/question')}>
          질문 추가하기
        </button>
        {/* TODO: 라이 공유로직이랑 연동하기 */}
        <button className="question__shareButton">질문 공유하기</button>
      </div>

      {isOpen && clickedAnswer && (
        <Modal onClose={() => setIsOpen(false)}>
          <div className="modal__wrapper">
            <img src="/modalIcon.svg" alt="상세모달 아이콘" />
            <p className="modal__createdAt">{getCreatedYMD(clickedAnswer.createdAt)}</p>
            <p className="modal__answer">{clickedAnswer.answer}</p>
            <button className="ToAnsersButton">다른 답변 보기</button>
          </div>
        </Modal>
      )}
    </StyledQuestionConfirmContainer>
  );
};

export default QuestionConfirmPage;

const StyledQuestionConfirmContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;

  .questionConfirm__header {
    background: linear-gradient(
      180deg,
      #fbfdff 0%,
      #ffffff 0.01%,
      #eaf1ff 63.19%,
      #c8dcff 131.87%
    );

    padding: 16px;
    width: 375px;
    height: 212px;
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 15px;

    .header__question,
    .header__aiAnalyzeText {
      font-size: 16px;
      line-height: 24px;
    }
  }

  .answersList {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 375px;
    height: 420px;
    overflow-y: scroll;
    padding: 0;

    .answersList__item {
      width: 327px;
      height: 62px;
      border-radius: 16px;
      padding-left: 16px;

      background-color: rgba(245, 249, 255, 1);
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;

      .answersList__item--answer {
        font-size: 14px;
      }

      .answersList__item--createdAt {
        color: rgba(147, 147, 148, 1);
        font-size: 12px;
        margin-top: -8px;
      }

      .modalButton {
        background: none;
        border: none;
        cursor: pointer;
      }
    }
  }
  .question__buttons {
    width: 327px;
    display: flex;
    justify-content: space-between;

    .question__addButton,
    .question__shareButton {
      width: 159px;
      height: 48px;
      border-radius: 24px;
      padding: 8px;
      border: none;
      cursor: pointer;
    }

    .question__addButton {
      background-color: rgba(213, 227, 251, 1);
      color: rgba(131, 163, 216, 1);
    }

    .question__shareButton {
      background-color: rgba(131, 163, 216, 1);
      color: rgba(255, 255, 255, 1);
    }
  }
`;

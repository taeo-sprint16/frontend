import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Modal from '../components/Modal/Modal';
import SkeletonUi from '../components/Skeleton/SkeletonUi';
import useClipboard from '../hooks/useClipboard';
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
  const [isLoading, setIsLoading] = useState(true);
  const { handleShareCodeCopy } = useClipboard();

  useEffect(() => {
    fetchMyAnswers()
      .then((responseData) => {
        setMyAnswersResponse(responseData.data);
        setIsLoading(false);
      })
      .catch((error) => console.error('내 질문지 가져오는 API 호출 오류 : ', error));
  }, []);

  const fetchMyAnswers = async () => {
    const data = await axios.post(API_MY_ANSWERS_URL, {
      confirmCode: mockConfirmCode,
    });
    return data;
  };

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenCopyMessage, setIsOpenCopyMessage] = useState(false);
  const [clickedAnswer, setClickedAnswer] = useState<Answer | null>();

  const handleClickSpecificAnswer = (answer: Answer) => {
    setIsOpen(true);
    setClickedAnswer(answer);
  };

  const popCopyMessage = () => {
    setIsOpenCopyMessage(true);
    setTimeout(() => {
      setIsOpenCopyMessage(false);
    }, 1500);
  };

  return (
    <StyledQuestionConfirmContainer>
      <div className="questionConfirm__header">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/questionIcon.svg" alt="질문 아이콘" />
          <span style={{ marginLeft: '8px' }}>내가 한 질문</span>
        </div>
        <h1 className="header__question">
          &quot;{myAnsersResponse?.data.question ?? 'Loading...'}&quot;
        </h1>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/aiIcon.svg" alt="AI 아이콘" />
          <span style={{ marginLeft: '8px' }}>응답자 의견 요약</span>
        </div>
        {/* strict mode로 인해, ai 한마디가 두 번 화면에 보여지는 에러 발생 */}
        <p className="header__aiAnalyzeText">
          {myAnsersResponse?.data.aiAnalyzeText.slice(0, 50) ?? 'Loading...'}
        </p>
      </div>

      <ul className="answersList">
        {/* 12부터 slice한 이유 mockData의 답변 값들이 11번까지 다 비어있음 */}
        {isLoading ? (
          <SkeletonUi />
        ) : (
          myAnsersResponse?.data.answers.slice(12).map((answer) => (
            // eslint-disable-next-line
            <li
              className="answersList__item"
              key={answer.createdAt}
              onClick={() => handleClickSpecificAnswer(answer)}
            >
              <div>
                <h3 className="answersList__item--answer">{answer.answer}</h3>
                <p className="answersList__item--createdAt">
                  {getCreatedYMD(answer.createdAt)}
                </p>
              </div>

              <button className="modalButton">
                <img src="/modalButton.svg" alt="상세모달창 띄우는 버튼" />
              </button>
            </li>
          ))
        )}
      </ul>

      <div className="question__buttons">
        <button className="question__addButton" onClick={() => router('/question')}>
          질문 추가하기
        </button>
        <button
          onClick={() => {
            handleShareCodeCopy('7716N2EK');
            popCopyMessage();
          }}
          className="question__shareButton"
        >
          <span style={{ fontWeight: 700, fontSize: '16px' }}>질문 공유하기</span>
        </button>
      </div>

      {isOpenCopyMessage && (
        <img className="copyToast" src="/copyToast.svg" alt="복사 완료 토스트 메시지" />
      )}

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
  position: relative;

  .questionConfirm__header {
    background: linear-gradient(
      180deg,
      #fbfdff 0%,
      #ffffff 0.01%,
      #eaf1ff 63.19%,
      #c8dcff 131.87%
    );

    width: 100%;
    height: 232px;
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 24px;
    font-size: 16px;
    font-weight: 700;

    .header__question,
    .header__aiAnalyzeText {
      font-size: 16px;
      line-height: 24px;
      font-weight: 500;
    }
  }

  .answersList {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 486px;
    overflow-y: scroll;
    padding: 0 24px;

    .answersList__item {
      width: 100%;
      height: 74px;
      border-radius: 16px;
      padding: 16px 8px 16px 16px;
      gap: 8px;
      cursor: pointer;

      background-color: rgba(245, 249, 255, 1);
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;

      .answersList__item--answer {
        font-size: 14px;
        font-weight: 500;
        color: rgba(50, 57, 95, 1);
      }

      .answersList__item--createdAt {
        color: rgba(147, 147, 148, 1);
        font-size: 12px;
        margin-top: -8px;
      }

      .modalButton {
        background: none;
        border: none;
      }
    }
  }
  .question__buttons {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 8px;
    padding: 0 24px;

    .question__addButton,
    .question__shareButton {
      flex: 1;
      height: 48px;
      font-weight: 700;
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

    .question__shareButton:hover {
      background-color: rgba(101, 132, 183, 1);
    }

    .question__addButton:hover {
      background-color: rgba(194, 214, 250, 1);
    }
  }

  .copyToast {
    position: absolute;
    bottom: 110px;
    left: 50%;
    transform: translate(-50%, 0%);
  }
`;

import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

import axiosInstance from '../../apis/createAxiosRequestInstance';
import { AnswerPageProps } from '../../pages/AnswerPage';

interface ResponseData {
  success: boolean;
  message: string;
}

const AnswerPageMain = ({ nickname, quesiton, setStep, shareCode }: AnswerPageProps) => {
  const [answerText, setAnswerText] = useState('');

  const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (event.target.value.length > 200) {
      alert('답변은 200자를 넘어갈 수 없습니다.');
      return;
    }

    setAnswerText(event.target.value);
  };

  const postAnswerHandler = async () => {
    if (!answerText.length) {
      alert('답변을 작성해주세요!');
      return;
    }

    try {
      const response = await axiosInstance.request({
        method: 'post',
        url: 'api/content/answer',
        data: {
          shareCode: shareCode,
          answer: answerText,
        },
      });
      const responseData: ResponseData = response.data;
      if (responseData.success) {
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
        {nickname}님의 {quesiton}
      </h1>
      <p className="main__guidetext">답변은 익명으로 전달되니 걱정하지 마세요.</p>
      <textarea
        onChange={onChangeHandler}
        placeholder="답변을 입력해주세요"
        className="main__answertext"
        maxLength={200}
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
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 32px 24px 0;

  .main__pencilicon {
    width: 32px;
    height: 32px;
  }

  .main__question {
    margin: 20px 0 12px;
    font-size: 20px;
    font-weight: 700;
    line-height: 28px;
    color: ${({ theme }) => theme.color.gray100};
  }

  .main__guidetext {
    color: ${({ theme }) => theme.color.gray300};
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    margin: 0;
  }

  .main__answertext {
    width: 100%;
    height: 50vh;
    border: none;
    margin-top: 32px;
    padding: 0;

    outline: none;
    resize: none;

    font-weight: 500;
    line-height: 24px;
    color: ${({ theme }) => theme.color.gray100};
  }

  .main__answertext::placeholder {
    /* position: absolute; */
    /* top: 0; */
    font-weight: 500;
    line-height: 24px;
    color: ${({ theme }) => theme.color.gray400};
  }

  .main__buttonWrapper {
    width: 100%;
    display: flex;
    justify-content: center;

    .main__submitbutton {
      position: absolute;
      bottom: 20px;
      background-color: ${({ theme }) => theme.color.primary100};
      width: 90%;
      height: 48px;
      gap: 8px;
      border-radius: 24px;
      border: none;
      color: ${({ theme }) => theme.color.white};
      cursor: pointer;

      font-weight: 700;
      font-size: 16px;
    }

    .main__submitbutton:hover {
      ${({ theme }) => theme.hover.primary100};
    }
  }
`;

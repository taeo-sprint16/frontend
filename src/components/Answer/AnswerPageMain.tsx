import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

import axiosInstance from '../../apis/createAxiosRequestInstance';
import { AnswerPageProps } from '../../pages/AnswerPage';

interface ResponseData {
  success: boolean;
  message: string;
}

const AnswerPageMain = ({ nickname, quesiton, setStep }: AnswerPageProps) => {
  const [answerText, setAnswerText] = useState('');

  const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (event.target.value.length > 50) {
      return;
    }

    setAnswerText(event.target.value);
  };

  const postAnswerHandler = async () => {
    try {
      const response = await axiosInstance.request({
        method: 'post',
        url: 'api/content/answer',
        data: {
          shareCode: '7716N2EK',
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
        {nickname}에게 답변해주세요.
        <br />
        {quesiton}
      </h1>
      <p className="main__guidetext">최대 글자수는 50자입니다.</p>
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
    color: #939394;
    margin: 0;
  }

  .main__answertext {
    width: 100%;
    height: 50vh;
    border: none;
    margin-top: 24px;
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
      bottom: 40px;
      background-color: #86aff4;
      width: 90%;
      height: 48px;
      gap: 8px;
      border-radius: 24px;
      border: none;
      color: white;
      cursor: pointer;
    }
  }
`;

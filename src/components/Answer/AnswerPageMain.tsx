import axios from 'axios';
import { ChangeEvent, useState } from 'react';

import { AnswerPageProps } from '../../pages/AnswerPage';

const API_ANSWER_POST_URL =
  'http://aboutme.ap-northeast-2.elasticbeanstalk.com/api/content/answer';

const AnswerPageMain = ({ nickname, quesiton, setStep }: AnswerPageProps) => {
  const [answerText, setAnswerText] = useState('');

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
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
    <section>
      <h1>
        {nickname}에게 {quesiton}에 대한 답변을 해주세요.
        <input onChange={onChangeHandler} type="textarea" placeholder="답변하기" />
        <button onClick={postAnswerHandler}>답변 제출하기</button>
      </h1>
    </section>
  );
};

export default AnswerPageMain;

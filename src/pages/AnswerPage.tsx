import axios from 'axios';
import React, { useEffect, useState } from 'react';

import AnswerCompletePage from '../components/Answer/AnswerCompletePage';
import AnswerPageCover from '../components/Answer/AnswerPageCover';
import AnswerPageMain from '../components/Answer/AnswerPageMain';
// import { useParams } from 'react-router-dom';

const API_SHARE_URL =
  'http://aboutme.ap-northeast-2.elasticbeanstalk.com/api/content/share';

export type AnswerPageStep = 'cover' | 'main' | 'complete';

export type AnswerPageProps = {
  nickname: string | undefined;
  quesiton?: string | undefined;
  setStep: React.Dispatch<React.SetStateAction<AnswerPageStep>>;
};

interface ResponseData {
  success: boolean;
  message: string;
  data: {
    nickname: string;
    question: string;
  };
}

const AnswerPage = () => {
  // const { shareCode } = useParams();
  const mockShareCode = '7716N2EK';

  const [questionShareData, setQuestionShareData] = useState<ResponseData>();

  useEffect(() => {
    fetchData()
      .then((responseData) => {
        setQuestionShareData(responseData.data);
        console.log(responseData.data);
      })
      .catch((error) => console.error('API 호출 오류 : ', error));
  }, []);

  const fetchData = async () => {
    const data = await axios.post(API_SHARE_URL, {
      shareCode: mockShareCode,
    });
    return data;
  };

  const [step, setStep] = useState<AnswerPageStep>('cover');

  return (
    <div>
      {step === 'cover' && (
        <AnswerPageCover nickname={questionShareData?.data.nickname} setStep={setStep} />
      )}

      {step === 'main' && (
        <AnswerPageMain
          nickname={questionShareData?.data.nickname}
          quesiton={questionShareData?.data.question}
          setStep={setStep}
        />
      )}

      {step === 'complete' && <AnswerCompletePage />}
    </div>
  );
};

export default AnswerPage;

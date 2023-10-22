import React, { useEffect, useState } from 'react';

import axiosInstance from '../apis/createAxiosRequestInstance';
import AnswerCompletePage from '../components/Answer/AnswerCompletePage';
import AnswerPageCover from '../components/Answer/AnswerPageCover';
import AnswerPageMain from '../components/Answer/AnswerPageMain';
// import { useParams } from 'react-router-dom';

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
    const data = await axiosInstance.request({
      method: 'post',
      url: 'api/content/share',
      data: {
        shareCode: mockShareCode,
      },
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

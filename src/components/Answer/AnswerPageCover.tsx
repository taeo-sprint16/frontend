import { AnswerPageProps, AnswerPageStep } from '../../pages/AnswerPage';

const AnswerPageCover = ({ nickname, quesiton, setStep }: AnswerPageProps) => {
  return (
    <section>
      <h1>
        {nickname}님으로부터
        <br />
        질문이 들어왔어요!
      </h1>

      <img src="/answerCoverIcon.svg" alt="답변 커버 아이콘" />
      <div>{quesiton}</div>

      <button onClick={() => setStep('main' as AnswerPageStep)}>답변하기</button>
    </section>
  );
};

export default AnswerPageCover;

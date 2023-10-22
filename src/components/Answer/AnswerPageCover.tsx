import styled from 'styled-components';

import { AnswerPageProps, AnswerPageStep } from '../../pages/AnswerPage';

const AnswerPageCover = ({ nickname, setStep }: AnswerPageProps) => {
  return (
    <StyledAnswerPageCoverContainer>
      <h1 className="cover__title">
        {nickname}님으로부터
        <br />
        질문이 들어왔어요!
      </h1>

      <img className="cover__icon" src="/answerCoverIcon.svg" alt="답변 커버 아이콘" />

      <button className="cover__button" onClick={() => setStep('main' as AnswerPageStep)}>
        답변하기
      </button>
    </StyledAnswerPageCoverContainer>
  );
};

export default AnswerPageCover;

const StyledAnswerPageCoverContainer = styled.section`
  padding-top: 150px;
  height: 100vh;

  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(360deg, #f0f4f8 0%, #eaf1ff 34.9%, #a7bfe8 93.75%);

  .cover__title {
    width: 200px;
    height: 72px;
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    color: #0f122e;
    margin-bottom: 35px;
  }

  .cover__icon {
    width: 280px;
    height: 280px;
  }

  .cover__button {
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
`;

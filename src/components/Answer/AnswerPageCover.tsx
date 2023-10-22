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
      <p className="cover__description">
        답변하기를 눌러 {nickname}님에 대해 알려주세요.
      </p>

      <div className="cover__iconContainer">
        <img className="cover__icon" src="/answerCoverIcon.svg" alt="답변 커버 아이콘" />
      </div>

      <button className="cover__button" onClick={() => setStep('main' as AnswerPageStep)}>
        답변하기
      </button>
    </StyledAnswerPageCoverContainer>
  );
};

export default AnswerPageCover;

const StyledAnswerPageCoverContainer = styled.section`
  padding-top: 100px;
  height: 100vh;

  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(360deg, #f0f4f8 0%, #eaf1ff 34.9%, #a7bfe8 93.75%);

  .cover__title {
    width: 200px;
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    color: #0f122e;
    margin: 0;
  }

  .cover__description {
    color: rgba(77, 80, 105, 1);
    font-weight: 600;
    font-size: 16px;
    margin: 8px 0 0 0;
  }

  .cover__iconContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 70px 0;

    .cover__icon {
      width: 307.29px;
      height: 175px;
    }
  }

  .cover__button {
    position: absolute;
    bottom: 40px;
    width: 90%;
    background-color: rgba(131, 163, 216, 1);

    height: 48px;
    gap: 8px;
    padding: 8px;
    border-radius: 24px;
    border: none;
    color: rgba(255, 255, 255, 1);
    cursor: pointer;
  }

  .cover__button:hover {
    background-color: rgba(101, 132, 183, 1);
  }
`;

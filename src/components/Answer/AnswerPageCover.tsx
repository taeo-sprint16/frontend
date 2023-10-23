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
  padding-top: 20%;
  height: 100%;

  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.background};
  .cover__title {
    width: 200px;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    color: ${({ theme }) => theme.color.gray100};
    margin: 0;
  }

  .cover__description {
    color: ${({ theme }) => theme.color.gray200};
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
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
    bottom: 20px;
    width: 90%;
    background-color: ${({ theme }) => theme.color.primary100};

    height: 48px;
    gap: 8px;
    padding: 8px;
    border-radius: 24px;
    border: none;
    color: ${({ theme }) => theme.color.white};
    cursor: pointer;

    font-weight: 700;
  }

  .cover__button:hover {
    ${({ theme }) => theme.hover.primary100};
    /* background-color: rgba(194, 214, 250, 1); */
  }
`;

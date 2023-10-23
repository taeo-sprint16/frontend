import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const AnswerCompletePage = () => {
  const router = useNavigate();
  return (
    <StyledAnswerPageCompleteContainer>
      <h1 className="complete__title">
        답변이 완료됐어요!
        <br />
        질문을 만들어서 공유하고 싶다면
        <br />
        {`'질문 만들기'를 눌러주세요.`}
      </h1>

      <img
        className="complete__icon"
        src="/answerCompleteIcon.svg"
        alt="답변 완료 아이콘"
      />

      <button
        className="complete__button--RouteToQuestion"
        onClick={() => router('/question')}
      >
        나도 질문하기
      </button>
    </StyledAnswerPageCompleteContainer>
  );
};

export default AnswerCompletePage;

const StyledAnswerPageCompleteContainer = styled.section`
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  padding-top: 20%;
  background: ${({ theme }) => theme.background};

  .complete__title {
    font-size: 24px;
    line-height: 36px;
    font-weight: 700;
    text-align: center;
    margin: 0;
    margin-bottom: 40px;
  }

  .complete__icon {
    width: 236px;
    height: 175px;
    margin: 52px 0;
  }

  .complete__button--RouteToQuestion {
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
  }

  .complete__button--RouteToQuestion:hover {
    ${({ theme }) => theme.hover.primary100};
    /* background-color: rgba(101, 132, 183, 1); */
  }
`;

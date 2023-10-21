import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const AnswerCompletePage = () => {
  const router = useNavigate();
  return (
    <StyledAnswerPageCompleteContainer>
      <h1 className="complete__title">답변이 완료되었습니다.</h1>

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
  height: 100vh;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  padding-top: 120px;
  background: linear-gradient(360deg, #f0f4f8 0%, #eaf1ff 34.9%, #a7bfe8 93.75%);

  .complete__title {
    font-size: 24px;
  }

  .complete__icon {
    width: 240px;
    height: 210px;
    margin-top: 100px;
  }

  .complete__button--RouteToQuestion {
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

import { useNavigate } from 'react-router-dom';

const AnswerCompletePage = () => {
  const router = useNavigate();
  return (
    <div>
      <h1>답변이 완료되었습니다.</h1>

      <div>이미지</div>

      <button onClick={() => router('/question')}>나도 질문하기</button>
    </div>
  );
};

export default AnswerCompletePage;

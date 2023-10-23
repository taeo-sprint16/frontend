import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface ButtonProps {
  name: string;
}

const OnBoardingButton = () => {
  return (
    <ButtonContainer>
      <RouteLink to="/question" name="질문작성">
        <ButtonText>질문 만들기</ButtonText>
      </RouteLink>
      <RouteLink to="/confirm" name="답변확인">
        <ButtonText>답변 확인하기</ButtonText>
      </RouteLink>
    </ButtonContainer>
  );
};

export default OnBoardingButton;
const ButtonContainer = styled.div`
  position: absolute;
  bottom: 20px;

  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
const RouteLink = styled(Link)<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  margin: 0px 24px 0px 24px;
  padding: 10px 36px;
  height: 48px;
  border: none;
  border-radius: 24px;
  background-color: ${({ theme, name }) =>
    name === '질문작성' ? theme.color.primary100 : theme.color.secondary100};
  color: ${({ theme, name }) =>
    name === '질문작성' ? theme.color.white : theme.color.primary100};
  text-decoration: none;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: ${({ theme, name }) =>
      name === '질문작성' ? theme.color.secondary200 : theme.color.secondary300};
    outline: none;
  }
`;

const ButtonText = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

import styled from 'styled-components';

import OnBoardingButton from './OnBoardingButtons';
import OnBoardingList from './OnBoardingList';

const OnboardingPage = () => {
  return (
    <StyeldContainer className="onboarding">
      <OnBoardingList />
      <OnBoardingButton />
    </StyeldContainer>
  );
};

export default OnboardingPage;
const StyeldContainer = styled.section`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  height: 100%;
  background: ${({ theme }) => theme.background};
  text-align: center;
  font-family: 'Pretendard', sans-serif;
`;

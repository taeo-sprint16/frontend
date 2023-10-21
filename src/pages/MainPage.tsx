import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface SliderUlProps {
  current: number;
}

const MainPage = () => {
  const ReCloudVariableImgUrl = new URL(
    '../assets/icons/ReCloud Variable.png',
    import.meta.url,
  ).href;
  const ReCloudVariableImgUrl2 = new URL(
    '../assets/icons/ReCloud Variable2.png',
    import.meta.url,
  ).href;
  const ReCloudVariableImgUrl3 = new URL(
    '../assets/icons/ReCloud Variable3.png',
    import.meta.url,
  ).href;

  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const handleButtonClick = (newSlide: number) => {
    setCurrentSlide(newSlide);
  };

  return (
    <StyeldContainer className="onboarding">
      <SliderUl current={currentSlide}>
        <SliderLi>
          <img src={ReCloudVariableImgUrl} alt="질문 보내기에 대한 설명 아이콘입니다" />
          <SliderTitle>질문 보내기에 대한 설명</SliderTitle>
          <SliderDescription>질문 보내기에 대한 부설명 적기</SliderDescription>
        </SliderLi>
        <SliderLi>
          <img
            src={ReCloudVariableImgUrl2}
            alt="링크 전달 답변 받기에 대한 설명 아이콘입니다"
          />
          <SliderTitle>링크 전달 답변 받기에 대한 설명</SliderTitle>
          <SliderDescription>링크 전달 답변 받기에 대한 설명 적기</SliderDescription>
        </SliderLi>
        <SliderLi>
          <img src={ReCloudVariableImgUrl3} alt="받은 답변으로 생각 기록 설명" />
          <SliderTitle>받은 답변으로 생각 기록 설명</SliderTitle>
          <SliderDescription>받은 답변으로 생각 기록에 대한 설명 적기</SliderDescription>
        </SliderLi>
      </SliderUl>
      <NavBox>
        <NavButton onClick={() => handleButtonClick(0)}>
          <NavSpan>질문 보내기 설명 슬라이드</NavSpan>
        </NavButton>
        <NavButton onClick={() => handleButtonClick(1)}>
          <NavSpan>링크 전달 답변받기 슬라이드</NavSpan>
        </NavButton>
        <NavButton onClick={() => handleButtonClick(2)}>
          <NavSpan>받은 답변으로 생각 기록 설명 슬라이드</NavSpan>
        </NavButton>
      </NavBox>
      <ButtonContainer>
        <RouteLink to="/question">
          <ButtonText>질문 작성하기</ButtonText>
        </RouteLink>
        <RouteLink to="/confirm">
          <ButtonText>답변 확인하기</ButtonText>
        </RouteLink>
      </ButtonContainer>
    </StyeldContainer>
  );
};

export default MainPage;
const StyeldContainer = styled.section`
  padding-top: 178px;
  background: var(--6, linear-gradient(0deg, #f0f4f8 0%, #eaf1ff 34.9%, #a7bfe8 93.75%));
  text-align: center;
  width: 375px;
  height: 812px;
  overflow: hidden;
  font-family: 'Pretendard', sans-serif;
`;
const SliderUl = styled.ul<SliderUlProps>`
  display: flex;
  padding: 0px;
  margin: 0px;
  list-style-type: none;
  transition: transform 0.5s;
  ${(props) => `
    transform: translateX(-${props.current * 375}px);
  `}
`;

const SliderLi = styled.li`
  width: 375px;
  padding: 0px 47.5px 0px 47.5px;
`;
const SliderTitle = styled.h2`
  margin: 0px;
  margin-top: 48px;
  color: var(--Gray100, #0f122e);
  padding: 0px;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
`;
const SliderDescription = styled.p`
  margin: 16px 0px 0px 0px;
  color: var(--Gray300, #939394);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;
const NavBox = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const NavButton = styled.button`
  padding: 0;
  margin: 0px 4px 0px 4px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--Gray400, #dbdbdc);
  border: none;
  &:focus {
    background-color: #86aff4;
    outline: none;
  }
`;
const NavSpan = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
  gap: 8px;
`;
const RouteLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  margin: 0px 24px 0px 24px;
  padding: 10px 36px;
  height: 48px;
  border-radius: 24px;
  background-color: #a7bfe8;
  border: none;
  cursor: pointer;
  &:focus {
    background-color: #86aff4;
    outline: none;
  }
  text-decoration: none;
`;

const ButtonText = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
  color: #fff;
`;

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface SliderUlProps {
  current: number;
  slidewidth: number;
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

  const [mouseDownClientX, setMouseDownClientX] = useState(0);
  const [mouseDownClientY, setMouseDownClientY] = useState(0);
  const [mouseUpClientX, setMouseUpClientX] = useState(0);
  const [mouseUpClientY, setMouseUpClientY] = useState(0);

  const onMouseDown = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setMouseDownClientX(e.clientX);
    setMouseDownClientY(e.clientY);
  };

  const onMouseUp = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setMouseUpClientX(e.clientX);
    setMouseUpClientY(e.clientY);
  };

  const onTouchStart = (e: React.TouchEvent<HTMLElement>) => {
    setMouseDownClientX(e.touches[0].clientX);
    setMouseDownClientY(e.touches[0].clientY);
  };

  const onTouchEnd = (e: React.TouchEvent<HTMLElement>) => {
    setMouseUpClientX(e.changedTouches[0].clientX);
    setMouseUpClientY(e.changedTouches[0].clientY);
  };

  const [slideWidth, setSlideWidht] = useState(window.innerWidth);

  const handleResize = () => {
    setSlideWidht(window.innerWidth);
  };

  const handleDotClick = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const dragSpaceX = Math.abs(mouseDownClientX - mouseUpClientX);
    const dragSpaceY = Math.abs(mouseDownClientY - mouseUpClientY);
    const vector = dragSpaceX / dragSpaceY;

    if (mouseDownClientX !== 0 && dragSpaceX > 10 && vector > 2) {
      if (mouseUpClientX < mouseDownClientX) {
        if (currentSlide < 2) {
          setCurrentSlide((prev) => prev + 1);
        } else {
          return;
        }
      } else if (mouseUpClientX > mouseDownClientX) {
        if (currentSlide > 0) {
          setCurrentSlide((prev) => prev - 1);
        } else {
          return;
        }
      }
    }
  }, [mouseUpClientX]);

  return (
    <StyeldContainer className="onboarding">
      <div>
        <SliderUl
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          current={currentSlide}
          slidewidth={slideWidth}
        >
          <SliderLi>
            <img
              draggable="false"
              src={ReCloudVariableImgUrl}
              alt="질문 보내기에 대한 설명 아이콘입니다"
            />
            <SliderTitle>질문 보내기에 대한 설명</SliderTitle>
            <SliderDescription>질문 보내기에 대한 부설명 적기</SliderDescription>
          </SliderLi>
          <SliderLi>
            <img
              draggable="false"
              src={ReCloudVariableImgUrl2}
              alt="링크 전달 답변 받기에 대한 설명 아이콘입니다"
            />
            <SliderTitle>링크 전달 답변 받기에 대한 설명</SliderTitle>
            <SliderDescription>링크 전달 답변 받기에 대한 설명 적기</SliderDescription>
          </SliderLi>
          <SliderLi>
            <img
              draggable="false"
              src={ReCloudVariableImgUrl3}
              alt="받은 답변으로 생각 기록 설명"
            />
            <SliderTitle>받은 답변으로 생각 기록 설명</SliderTitle>
            <SliderDescription>
              받은 답변으로 생각 기록에 대한 설명 적기
            </SliderDescription>
          </SliderLi>
        </SliderUl>
        <NavDots>
          {Array.from({ length: 3 }).map((_, index) => (
            <Dot
              aria-label="슬라이드 버튼"
              key={index}
              onClick={() => handleDotClick(index)}
              className={currentSlide === index ? 'active' : ''}
            />
          ))}
        </NavDots>
      </div>
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  min-width: 375px;
  height: 100vh;
  padding-top: 178px;
  background: ${({ theme }) => theme.background};
  text-align: center;
  font-family: 'Pretendard', sans-serif;
`;

const SliderUl = styled.ul<SliderUlProps>`
  display: flex;
  width: 300%;
  padding: 0px;
  margin: 0px;
  transition: transform 0.5s;
  ${({ current, slidewidth }) =>
    slidewidth > 475
      ? `transform: translateX(-${current * 475}px);`
      : slidewidth > 375
      ? `transform: translateX(-${current * slidewidth}px);`
      : `transform: translateX(-${current * 375}px);`}
`;

const SliderLi = styled.li`
  display: block;
  width: 100%;
`;
const SliderTitle = styled.h2`
  margin: 0px;
  margin-top: 48px;
  color: ${({ theme }) => theme.color.gray100};
  padding: 0px;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
`;
const SliderDescription = styled.p`
  margin: 16px 0px 0px 0px;
  color: ${({ theme }) => theme.color.gray300};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

const NavDots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;

const Dot = styled.button`
  padding: 0;
  border: none;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  background-color: ${({ theme }) => theme.color.gray400};
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.2s;

  &.active {
    background-color: #86aff4;
    outline: none;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  margin-bottom: 50px;
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
  background-color: ${({ theme }) => theme.color.primary100};
  border: none;
  cursor: pointer;
  &:focus {
    background-color: ${({ theme }) => theme.color.secondary200};
    outline: none;
  }
  text-decoration: none;
`;

const ButtonText = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: ${({ theme }) => theme.color.white};
`;

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface SliderUlProps {
  current: number;
  slidewidth: number;
}
interface ButtonProps {
  name: string;
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

  const titles = [
    "새로운 나를 발견하는 '어바웃 미'",
    '질문 공유하고 답변 받기',
    '답변을 참고하여 나에 대해 정리하기',
  ];

  const descriptions = [
    `타인의 답변을 통해,
본인에 대한 새로운 인사이트를 얻어보세요.`,
    `본인에 대한 질문을 만들고
    사람들에게 공유하여 그들의 답변을 받아보세요.`,
    `답변을 참고하여 자신에 대해 정리하고
    기록하는 시간을 가져보세요.`,
  ];
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
            <SliderTitle>{titles[0]}</SliderTitle>
            <SliderDescription>{descriptions[0]}</SliderDescription>
          </SliderLi>
          <SliderLi>
            <img
              draggable="false"
              src={ReCloudVariableImgUrl2}
              alt="링크 전달 답변 받기에 대한 설명 아이콘입니다"
            />
            <SliderTitle>{titles[1]}</SliderTitle>
            <SliderDescription>{descriptions[1]}</SliderDescription>
          </SliderLi>
          <SliderLi>
            <img
              draggable="false"
              src={ReCloudVariableImgUrl3}
              alt="받은 답변으로 생각 기록 설명"
            />
            <SliderTitle>{titles[2]}</SliderTitle>
            <SliderDescription>{descriptions[2]}</SliderDescription>
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
        <RouteLink to="/question" name="질문작성">
          <ButtonText>질문 만들기</ButtonText>
        </RouteLink>
        <RouteLink to="/confirm" name="답변확인">
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
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  text-transform: capitalize;
  white-space: pre-wrap;
`;

const NavDots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 36px;
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
    background-color: ${({ theme }) => theme.color.primary100};
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

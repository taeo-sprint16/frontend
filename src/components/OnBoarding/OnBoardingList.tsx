import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import OnBoardingListItem from './OnBoardingListItem';

interface SliderUlProps {
  current: number;
  slidewidth: number;
}
const OnBoardingList = () => {
  const SliderObject = [
    {
      id: 1,
      img: new URL('../../assets/icons/ReCloud Variable.png', import.meta.url).href,
      title: "새로운 나를 발견하는 '어바웃 미'",
      description: '타인의 답변을 통해,\n본인에 대한 새로운 인사이트를 얻어보세요.',
      alt: '어바웃 미에 대한 설명 아이콘입니다.',
    },
    {
      id: 2,
      img: new URL('../../assets/icons/ReCloud Variable2.png', import.meta.url).href,
      title: '질문 공유하고 답변 받기',
      description:
        '본인에 대한 질문을 만들고\n사람들에게 공유하여 그들의 답변을 받아보세요.',
      alt: '질문 공유하고 답변 받기에 대한 아이콘입니다.',
    },
    {
      id: 3,
      img: new URL('../../assets/icons/ReCloud Variable3.png', import.meta.url).href,
      title: '답변을 참고하여 나에 대해 정리하기',
      description: '답변을 참고하여 자신에 대해 정리하고\n기록하는 시간을 가져보세요.',
      alt: '답변을 참고하여 나에 대해 정리하기에 대한 아이콘입니다.',
    },
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
    <SliderBox>
      <SliderUl
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        current={currentSlide}
        slidewidth={slideWidth}
      >
        {SliderObject.map((item) => (
          <OnBoardingListItem key={item.id} item={item} />
        ))}
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
    </SliderBox>
  );
};

export default OnBoardingList;

const SliderBox = styled.div`
  position: absolute;
  top: 10%;
  left: 0;
  right: 0;
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
    background-color: ${({ theme }) => theme.color.primary100};
    outline: none;
  }
`;

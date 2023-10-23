import styled from 'styled-components';

interface OnBoardingListItemProps {
  key: number;
  item: { id: number; img: string; title: string; description: string; alt: string };
}

const OnBoardingListItem = ({ item }: OnBoardingListItemProps) => {
  return (
    <SliderLi>
      <img draggable="false" src={item.img} alt={item.alt} />
      <SliderTitle>{item.title}</SliderTitle>
      <SliderDescription>{item.description}</SliderDescription>
    </SliderLi>
  );
};

export default OnBoardingListItem;

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
  white-space: pre-line;
`;

import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const Title = ({ children }: Props) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title;

const StyledTitle = styled.h1`
  margin: 0;

  color: ${({ theme }) => theme.color.gray100};
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  text-align: center;
`;

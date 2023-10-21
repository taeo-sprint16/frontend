import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  $color: string;
}

interface Props {
  children: React.ReactNode;
  color: string;
  onClick?: () => void;
}

const Button = ({ children, color, onClick }: Props) => {
  return (
    <StyleButton $color={color} onClick={onClick}>
      {children}
    </StyleButton>
  );
};

export default Button;

const StyleButton = styled.button<ButtonProps>`
  cursor: pointer;

  width: 327px;
  height: 48px;

  color: ${({ theme }) => theme.color.white};

  background-color: ${({ theme, $color }) => theme.color[$color]};

  border: none;
  border-radius: 24px;
`;

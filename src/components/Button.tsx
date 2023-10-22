import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  $color: string;
  $textColor: string;
  $disabled: boolean;
}

interface Props {
  children: React.ReactNode;
  color: string;
  disabled?: boolean;
  textColor?: string;
  onClick?: () => void;
}

const Button = ({
  children,
  color,
  disabled = false,
  textColor = 'white',
  onClick,
}: Props) => {
  return (
    <StyleButton
      $color={color}
      $textColor={textColor}
      $disabled={disabled}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </StyleButton>
  );
};

export default Button;

const StyleButton = styled.button<ButtonProps>`
  cursor: ${({ $disabled }) => ($disabled ? 'default' : 'pointer')};

  width: 100%;
  height: 48px;

  color: ${({ theme, $textColor }) => theme.color[$textColor]};
  white-space: nowrap;

  border: none;
  border-radius: 24px;

  background-color: ${({ theme, $disabled, $color }) =>
    $disabled ? theme.color.secondary100 : theme.color[$color]};

  color: ${({ theme, $disabled, $textColor }) =>
    $disabled ? theme.color.primary100 : theme.color[$textColor]};
`;

import React from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps {
  $color: string;
  $textColor: string;
  $disabled: boolean;
  $hover?: boolean;
}

interface Props {
  children: React.ReactNode;
  color: string;
  disabled?: boolean;
  textColor?: string;
  hover?: boolean;
  onClick?: () => void;
}

const Button = ({
  children,
  color,
  disabled = false,
  textColor = 'white',
  hover,
  onClick,
}: Props) => {
  return (
    <StyleButton
      $color={color}
      $textColor={textColor}
      $disabled={disabled}
      $hover={hover}
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

  white-space: nowrap;

  border: none;
  border-radius: 24px;

  ${({ theme, $disabled, $color, $textColor }) =>
    $disabled
      ? css`
          background-color: ${theme.color.secondary100};
          color: ${theme.color.primary100};
        `
      : css`
          background-color: ${theme.color[$color]};
          color: ${theme.color[$textColor]};
        `}

  &:hover {
    ${({ theme, $hover, $disabled, $color }) =>
      $hover &&
      !$disabled &&
      css`
        ${theme.hover[$color]}
      `}
  }
`;

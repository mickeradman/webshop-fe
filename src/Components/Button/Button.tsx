import React from 'react';
import styled from 'styled-components';

type StyledButtonProps = {
  $bgColor?: string;
  $hoverColor?: string;
  $fontSize?: number;
  $padding?: string;
};

const StyledButton = styled.button<StyledButtonProps>`
  width: fit-content;
  color: ${({ theme }) => theme.color.textPrimary};
  background-color: ${({ $bgColor }) => ($bgColor ? $bgColor : 'transparent')};
  font-size: ${({ $fontSize }) => ($fontSize ? $fontSize : 'inherit')};
  border: solid 0.1rem ${({ theme }) => theme.color.textPrimary};
  border-radius: 0.5rem;
  padding: ${({ $padding, theme }) =>
    $padding ? $padding : `${theme.size.xs} ${theme.size.sm}`};

  &:hover {
    cursor: pointer;
    transition: background-color 200ms;
    background-color: ${({ $hoverColor }) =>
      $hoverColor ? $hoverColor : 'transparent'};
  }
`;

type ButtonProps = {
  buttonText: string;
  bgColor?: string;
  hoverColor?: string;
  fontSize?: number;
  padding?: string;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({
  buttonText,
  bgColor,
  hoverColor,
  fontSize,
  padding,
  onClick,
}) => {
  return (
    <StyledButton
      $bgColor={bgColor}
      $hoverColor={hoverColor}
      $fontSize={fontSize}
      $padding={padding}
      onClick={onClick}
    >
      {buttonText}
    </StyledButton>
  );
};

export default Button;

import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  color: ${({ theme }) => theme.color.textPrimary};
  background-color: transparent;
  border: solid 0.1rem ${({ theme }) => theme.color.textPrimary};
  border-radius: 0.5rem;
  padding: ${({ theme }) => theme.size.xs};
`;

type ButtonProps = {
  buttonText: string;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ buttonText, onClick }) => {
  return <StyledButton onClick={onClick}>{buttonText}</StyledButton>;
};

export default Button;

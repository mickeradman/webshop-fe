import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const StyledCartModalOverlay = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

const StyledCartModalContainer = styled.div`
  box-sizing: border-box;
  width: 90%;
  max-width: 1200px;
  height: 75%;
  margin-right: 1.15rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.color.textPrimary};
  background-color: ${({ theme }) => theme.color.bgPrimary};
  border: 1px solid ${({ theme }) => theme.color.borderPrimary};
  opacity: 0.99;

  @media screen and (max-width: 700px) {
    width: 100vw;
    height: 100%;
    margin: 0;
    border: none;
  }
`;

type ShoppingCartProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ShoppingCart: React.FC<ShoppingCartProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <StyledCartModalOverlay>
      <StyledCartModalContainer>
        <button onClick={onClose}>Stäng</button>
        <p>Här finns inga produkter ännu... men det kommer... tro maj!</p>
      </StyledCartModalContainer>
    </StyledCartModalOverlay>,
    document.body
  );
};

export default ShoppingCart;

import ReactDOM from 'react-dom';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../GlobalState/store';
import styled from 'styled-components';
import { TopGridContainer } from '../../Components/GlobalStyle/GlobalStyle';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const CartOverlay = styled.section`
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

const CartContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  width: 90%;
  max-width: 1200px;
  height: 75%;
  margin-right: 1.15rem;
  color: ${({ theme }) => theme.color.textPrimary};
  background-color: ${({ theme }) => theme.color.modalBg};
  border: 1px solid ${({ theme }) => theme.color.borderPrimary};
  opacity: 0.98;

  @media screen and (max-width: 700px) {
    width: 100%;
    height: 100%;
    margin: 0;
    border: none;
  }
`;

const CartTitle = styled.h3`
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  justify-self: center;
  align-self: center;
  color: ${({ theme }) => theme.color.textPrimary};
  font-size: 1.2rem;
`;

// Försökte återanvända Button-komponenten här, men fick det inte att fungera...
const CartCloseButton = styled(CloseRoundedIcon)`
  grid-row: 1 / 2;
  grid-column: 3 / 4;
  justify-self: flex-end;
  align-self: center;
  color: ${({ theme }) => theme.color.textPrimary};
  border: 2px solid ${({ theme }) => theme.color.textPrimary};
  border-radius: 0.3rem;
  padding: 0;
  margin: 1rem;
  font-size: 1.2rem !important;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.color.navLinkHover};
    border-color: ${({ theme }) => theme.color.navLinkHover};
  }
`;

type ShoppingCartProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ShoppingCart: React.FC<ShoppingCartProps> = ({ isOpen, onClose }) => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  if (!isOpen) return null;

  console.log(cartItems);

  return ReactDOM.createPortal(
    <CartOverlay>
      <CartContainer>
        <TopGridContainer>
          <CartTitle>Kundvagn</CartTitle>
          <CartCloseButton onClick={onClose} />
        </TopGridContainer>
        <p>Här finns inga produkter ännu... men det kommer... tro maj!</p>
      </CartContainer>
    </CartOverlay>,
    document.body
  );
};

export default ShoppingCart;

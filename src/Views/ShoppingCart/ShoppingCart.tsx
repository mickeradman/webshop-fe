import ReactDOM from 'react-dom';
import React from 'react';
import styled from 'styled-components';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useSelector } from 'react-redux';
import { RootState } from '../../GlobalState/store';

import { useAppDispatch } from '../../GlobalState/useAppDispatch';
import { addProduct, removeProduct } from '../../GlobalState/Cart/CartSlice';
import {
  TopGridContainer,
  AddRemoveIconsContainer,
  StyledRemoveIcon,
  QuantityContainer,
  Quantity,
  StyledAddIcon,
} from '../../Styles/styles';
import { IMG_EXTENSION } from '../../Utils/constants';
import { CURRENCY } from '../../Utils/constants';
import { getAmount } from '../../Utils/helperFunctions';

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
  width: 90%;
  max-width: 1250px;
  height: 80vh;
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

// Detta blir lite rörigt eftersom denna stil-komponenten (och den under) ser ut att ligga
// under en flexbox-komponent, men den ligger i själva verket under en importerad grid-komponent
// (TopGridContainer).
const CartTitle = styled.h3`
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  justify-self: center;
  align-self: center;
  color: ${({ theme }) => theme.color.textPrimary};
  font-size: 1.2rem;
`;

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

const NoProductsInCart = styled.p`
  align-self: center;
  color: ${({ theme }) => theme.color.textPrimary};
  font-size: 1rem;
`;

const ProductsAndSummaryContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  gap: 1rem;
  overflow: hidden;
`;

const TitlesAndProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  padding: 0rem 1rem;
`;

const ColumnTitlesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.color.delimiterPrimary};
`;

const ColumnTitle = styled.p`
  padding-left: 1rem;
`;

const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 0.75rem;
  width: 100%;
  padding: 0;
  overflow-y: scroll;
  scrollbar-width: none;
`;

const ProductListItem = styled.li`
  display: grid;
  grid-template-columns: subgrid;
  grid-column: 1 / span 4;
  gap: 2rem;
  align-items: center;
  justify-items: left;
  list-style: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.delimiterPrimary};
  padding: 1rem 0;

  p {
    margin: 0;
  }

  &:last-child {
    border: none;
  }
`;

const ProductImage = styled.img`
  width: 6rem;
  height: 6rem;
  object-fit: contain;
  justify-self: center;
`;

const ProductPrice = styled.p`
  /* justify-self: center; */
`;

const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100%;
  padding: 1rem;
  overflow-y: scroll;
  scrollbar-width: none;
`;

type ShoppingCartProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ShoppingCart: React.FC<ShoppingCartProps> = ({ isOpen, onClose }) => {
  const dispatch = useAppDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  if (!isOpen) return null;

  const columnTitles = ['', 'Produkt', 'Pris', 'Antal'];

  console.log(cartItems);

  return ReactDOM.createPortal(
    <CartOverlay>
      <CartContainer>
        <TopGridContainer>
          <CartTitle>Kundvagn</CartTitle>
          <CartCloseButton onClick={onClose} />
        </TopGridContainer>
        {cartItems.length === 0 ? (
          <NoProductsInCart>
            Det finns inga produkter i kundvagnen...
          </NoProductsInCart>
        ) : (
          <ProductsAndSummaryContainer>
            <TitlesAndProductsContainer>
              <ColumnTitlesContainer>
                {columnTitles.map((title, index) => (
                  <ColumnTitle key={index}>{title}</ColumnTitle>
                ))}
              </ColumnTitlesContainer>
              <ProductList>
                {cartItems.map((product) => (
                  <ProductListItem key={product.id}>
                    <ProductImage
                      src={product.imgPath + IMG_EXTENSION}
                      alt={product.productName}
                    />
                    <p>{product.productName}</p>
                    <ProductPrice>
                      {product.price * getAmount(product.id, cartItems)} {CURRENCY}
                    </ProductPrice>
                    <AddRemoveIconsContainer className='visible'>
                      <StyledRemoveIcon
                        onClick={() =>
                          dispatch(
                            removeProduct({
                              id: product.id,
                            })
                          )
                        }
                      />
                      <QuantityContainer>
                        <Quantity>{getAmount(product.id, cartItems)}</Quantity>
                      </QuantityContainer>
                      <StyledAddIcon
                        onClick={() =>
                          dispatch(
                            addProduct({
                              id: product.id,
                              productName: product.productName,
                              description: product.description,
                              price: product.price,
                              stockStatus: product.stockStatus,
                              imgPath: product.imgPath,
                            })
                          )
                        }
                      />
                    </AddRemoveIconsContainer>
                  </ProductListItem>
                ))}
              </ProductList>
            </TitlesAndProductsContainer>
            <SummaryContainer></SummaryContainer>
          </ProductsAndSummaryContainer>
        )}
      </CartContainer>
    </CartOverlay>,
    document.body
  );
};

export default ShoppingCart;

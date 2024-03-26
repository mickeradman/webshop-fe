import { useSelector } from 'react-redux';
import { RootState } from '../../GlobalState/store';
import styled from 'styled-components';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';

import { useAppDispatch } from '../../GlobalState/useAppDispatch';
import {
  increaseProductQty,
  decreaseProductQty,
} from '../../GlobalState/Cart/CartSlice';
import { Product } from '../../Types/types';
import { IMG_EXTENSION } from '../../Utils/constants';
import { CURRENCY } from '../../Utils/constants';
import { getQty } from '../../Utils/helperFunctions';
import {
  AddRemoveIconsContainer,
  StyledRemoveIcon,
  StyledAddIcon,
  QuantityContainer,
  Quantity,
} from '../../Styles/styles';

const StyledListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  border: 1px solid ${({ theme }) => theme.color.borderPrimary};
  border-radius: 0.3rem;
  color: ${({ theme }) => theme.color.textPrimary};
  background-color: ${({ theme }) => theme.color.productCardBg};

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.productCardBgOnHover};
    transform: scale(1.02);

    .visible-on-hover {
      visibility: visible !important;
    }
  }
`;

const StyledListImage = styled.img`
  width: 100%;
  height: 16rem;
  object-fit: contain;
  padding: 0.5rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.borderPrimary};
`;

const StyledBottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const StyledTitlePriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  color: ${({ theme }) => theme.color.textPrimary};
  border: none;
  background-color: transparent;
  margin-top: 0.5rem;
`;

const StyledListTitle = styled.p`
  align-self: flex-start;
  font-weight: normal;
  margin: 0.25rem 0;
  padding: 0 0.5rem;
  color: ${({ theme }) => theme.color.textPrimary};
`;

const StyledListPrice = styled.p`
  margin: 0.25rem 0 0.5rem;
  padding: 0 0.5rem;
  color: ${({ theme }) => theme.color.textPrimary};
`;

const NotInStock = styled.h3`
  margin: 0;
  padding: 0.2rem 0.5rem;
  color: ${({ theme }) => theme.color.textPrimary};
`;

type ProductCardProps = {
  products: Product[];
};

const ProductCard = ({ products }: ProductCardProps) => {
  const dispatch = useAppDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  return (
    <>
      {products.map((product) => (
        <StyledListItem key={product._id}>
          <StyledListImage
            src={product.imgPath + IMG_EXTENSION}
            alt={product.productName}
          />
          <StyledBottomContainer>
            <StyledTitlePriceContainer>
              <StyledListTitle>{product.productName}</StyledListTitle>
              <StyledListPrice>
                {product.price
                  ? `${product.price} ${CURRENCY}`
                  : 'Ej prissatt ännu'}
              </StyledListPrice>
            </StyledTitlePriceContainer>
            <AddRemoveIconsContainer
              className={`${
                getQty(product._id, cartItems) > 0 ? 'visible' : 'hidden'
              } visible-on-hover no-border ${product.stockStatus === '0' && 'no-border'}`}
            >
              {product.stockStatus === '0' ? (
                <NotInStock>Slut i lager</NotInStock>
              ) : (
                <>
                  <StyledRemoveIcon
                    onClick={() =>
                      dispatch(
                        decreaseProductQty({
                          id: product._id,
                        })
                      )
                    }
                  />
                  <QuantityContainer>
                    <Quantity>{getQty(product._id, cartItems)}</Quantity>
                  </QuantityContainer>
                  <StyledAddIcon
                    onClick={() =>
                      dispatch(
                        increaseProductQty({
                          id: product._id,
                          productName: product.productName,
                          description: product.description,
                          price: product.price,
                          stockStatus: product.stockStatus,
                          imgPath: product.imgPath,
                        })
                      )
                    }
                  />
                </>
              )}
            </AddRemoveIconsContainer>
          </StyledBottomContainer>
        </StyledListItem>
      ))}
    </>
  );
};

export default ProductCard;

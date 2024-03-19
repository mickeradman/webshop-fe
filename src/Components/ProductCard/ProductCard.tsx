import styled from 'styled-components';
import AddBoxOutlined from '@mui/icons-material/AddBoxOutlined';
import Tooltip from '@mui/material/Tooltip';

import { useAppDispatch } from '../../GlobalState/useAppDispatch';
import { addProduct, removeProduct } from '../../GlobalState/Cart/CartSlice';
import { Product } from '../../Types/types';
import { IMG_EXTENSION } from '../../Utils/constants';
import { CURRENCY } from '../../Utils/constants';

const StyledListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  border: 1px solid ${({ theme }) => theme.color.borderPrimary};
  border-radius: 0.3rem;
  color: ${({ theme }) => theme.color.textPrimary};
  background-color: ${({ theme }) => theme.color.productCardBg};
  transition: transform 300ms;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.productCardBgOnHover};
    transform: scale(1.02);
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

const StyledIconContainer = styled.div`
  display: flex;
  align-self: center;
  color: green;
  margin-right: 0.3rem;
`;

const StyledAddIcon = styled(AddBoxOutlined)`
  width: 2rem !important;
  height: 2rem !important;

  &:hover {
    cursor: pointer;
    color: #94fd94;
  }
`;

// const StyledListDescription = styled.p`
//   margin: 0;
//   padding: 0 1rem;
//   color: ${({ theme }) => theme.color.textPrimary};
// `;

type ProductCardProps = {
  products: Product[];
};

const ProductCard = ({ products }: ProductCardProps) => {
  const dispatch = useAppDispatch();

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
            <StyledIconContainer>
              <Tooltip title={'Lägg till produkt i varukorgen'} placement='bottom' arrow={true}>
                <StyledAddIcon
                  onClick={() =>
                    dispatch(
                      addProduct({
                        id: product._id,
                        productName: product.productName,
                      })
                    )
                  }
                />
              </Tooltip>
            </StyledIconContainer>
          </StyledBottomContainer>
        </StyledListItem>
      ))}
    </>
  );
};

export default ProductCard;

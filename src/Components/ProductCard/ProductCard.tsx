import styled from 'styled-components';

import { Product } from '../../Types/types';
import { IMG_EXTENSION } from '../../Utils/constants';

const StyledListItem = styled.li`
  height: 330px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.color.borderPrimary};
  border-radius: 0.3rem;
  color: ${({ theme }) => theme.color.textPrimary};
  background-color: ${({ theme }) => theme.color.productCardBg};
  transition: transform 300ms;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.bgSecondary};
    transform: scale(1.02);
  }
`;

const StyledListTitle = styled.h3`
  margin: 0.5rem 0;
  padding: 0 1rem;
  color: ${({ theme }) => theme.color.textPrimary};
`;

const StyledImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
  border-radius: 0.3rem;
  margin-bottom: 0.5rem;
  border: 1px solid ${({ theme }) => theme.color.borderPrimary};
`;

const StyledListDescription = styled.p`
  margin: 0;
  padding: 0 1rem;
  color: ${({ theme }) => theme.color.textPrimary};
`;

type ProductCardProps = {
  products: Product[];
};

const ProductCard = ({ products }: ProductCardProps) => {
  return (
    <>
      {products.map((product) => (
        <StyledListItem key={product._id}>
          <StyledListTitle>{product.productName}</StyledListTitle>
          <StyledImage
            src={product.imgPath + IMG_EXTENSION}
            alt={product.productName}
          />
          <StyledListDescription>
            {product.description ? product.description : 'Ingen beskrivning'}
          </StyledListDescription>
        </StyledListItem>
      ))}
    </>
  );
};

export default ProductCard;

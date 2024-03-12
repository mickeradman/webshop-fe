import styled from 'styled-components';

import { Product } from '../../Types/types';

const ProductCardContainer = styled.article`
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

type ProductCardProps = {
  product: Product;
};

const ProductCard = (props: ProductCardProps) => {
  const { productName, description, price, stockStatus } = props.product;

  return (
    <ProductCardContainer>
      <h3>{productName}</h3>
    </ProductCardContainer>
  );
};

export default ProductCard;

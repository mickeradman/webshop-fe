import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { RootState, store } from '../../GlobalState/store';
import { useAppDispatch } from '../../GlobalState/useAppDispatch';
import { fetchProducts } from '../../GlobalState/Product/ProductSlice';
import ProductCard from '../../Components/ProductCard/ProductCard';

const StyledTextContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* border-bottom: 1px solid ${({ theme }) =>
    theme.color.standardDelimiter}; */
  color: ${({ theme }) => theme.color.textPrimary};

  h2 {
    margin: 0 1rem 1rem;
  }

  p {
    margin-top: 0.2rem;
    padding: 0 1rem;
  }
`;

const StyledProductsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin: 2rem 0;
  gap: 2.5rem;
`;

const StyledLoadingOrError = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  color: ${({ theme }) => theme.color.textPrimary};
`;

const Products = () => {
  const dispatch = useAppDispatch();
  const { products, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    const lastFetchTime = localStorage.getItem('lastFetchTime');
    const shouldFetchFromDatabase =
      !lastFetchTime || Date.now() - parseInt(lastFetchTime) > 30 * 60 * 1000;

    if (shouldFetchFromDatabase && products.length === 0) {
      dispatch(fetchProducts());
      localStorage.setItem('lastFetchTime', Date.now().toString());
      console.log(store.getState());
    }
  }, [dispatch, products]);

  return (
    <>
      <StyledTextContainer>
        <h2>Produkter</h2>
        <p>
          Om inte annat anges finns alla listade varor i lager. Vi kommer i
          sinom tid lägga till en ikon för lagerstatus.
        </p>
      </StyledTextContainer>
      <StyledProductsContainer>
        <>
          {loading && <StyledLoadingOrError>Loading...</StyledLoadingOrError>}
          {error && <StyledLoadingOrError>{error}</StyledLoadingOrError>}
          {!loading && !error && products.length > 0 && (
            <ProductCard products={products} />
          )}
        </>
      </StyledProductsContainer>
    </>
  );
};

export default Products;

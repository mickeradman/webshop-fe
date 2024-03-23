import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { RootState } from '../../GlobalState/store';
import { useAppDispatch } from '../../GlobalState/useAppDispatch';
import { fetchProducts } from '../../GlobalState/Product/ProductSlice';
import ProductCard from '../../Components/ProductCard/ProductCard';

const StyledTextContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${({ theme }) => theme.color.textPrimary};
`;

const StyledProductsText = styled.h3`
  margin: 0 1rem 1rem;
  padding: 0 1rem;
`;

const StyledProductsContainer = styled.ul`
  display: grid;
  padding: 0;
  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
  margin: 2rem 0;
  gap: 2rem;
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

  localStorage.setItem('lastPageData', location.pathname);
  localStorage.setItem('lastInteractionData', Date.now().toString());

  useEffect(() => {
    const lastFetchTime = localStorage.getItem('lastFetchTime');

    lastFetchTime
      ? console.log(
          'Hämtade sist från databasen:',
          new Date(parseInt(lastFetchTime)).toLocaleString()
        )
      : console.log('Det är tomt i localStorage...');

    const shouldFetchFromDatabase =
      !lastFetchTime ||
      Date.now() - parseInt(lastFetchTime) > 6 * 60 * 60 * 1000;

    if (shouldFetchFromDatabase) {
      console.log('Hämtar produkter från databasen...');
      dispatch(fetchProducts());
      localStorage.setItem('lastFetchTime', Date.now().toString());
    }
  }, [dispatch, products]);

  return (
    <>
      <StyledTextContainer>
        <StyledProductsText>
          Om inte annat anges finns alla listade varor i lager. Vi kommer i
          sinom tid lägga till en ikon för lagerstatus/saldo.
        </StyledProductsText>
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

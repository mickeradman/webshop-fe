import { useSelector } from 'react-redux';
import { RootState } from '../../GlobalState/store';
import styled from 'styled-components';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Tooltip from '@mui/material/Tooltip';

type StyledHeaderProps = {
  $isLightMode: boolean;
};

const StyledHeader = styled.header<StyledHeaderProps>`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  background-color: ${({ theme }) => theme.color.headerFooterBg};

  h1 {
    grid-row: 1 / 3;
    grid-column: 1 / 3;
    margin: 0;
    color: ${({ theme }) => theme.color.textPrimary};
    padding: 1rem 0 0 1rem;
    font-size: 1.2rem;
  }

  .upper-right-options__icon {
    color: ${({ theme }) => theme.color.textPrimary};

    &:hover {
      color: ${({ theme }) => theme.color.iconHoverPrimary};
    }
  }
`;

const StyledOptionsContainer = styled.section`
  display: flex;
  grid-row: 1;
  grid-column: 3;
  justify-self: flex-end;
  padding: 1rem 0 0 0;
  gap: 1rem;
`;

const StyledOptionsIconContainer = styled.div`
  position: relative;

  .shopping-cart {
    position: relative;
  }

  :hover {
    cursor: pointer;
  }
`;

const StyledArticleCountChip = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0.8rem;
  left: 0.8rem;
  color: ${({ theme }) => theme.color.textPrimary};
  background-color: ${({ theme }) => theme.color.cartCountChip};
  width: 1.1rem;
  height: 1.1rem;
  border-radius: 50%;
  font-size: 0.8rem;
  padding: 0.15rem;
  font-weight: bold;
`;

type HeaderProps = {
  isLightMode: boolean;
  onClickThemeChange: () => void;
  onClickCart: () => void;
};

const Header = (props: HeaderProps) => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  const articleCount = cartItems.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  return (
    <StyledHeader $isLightMode={props.isLightMode}>
      <h1>LE BOUTIQUE</h1>
      <StyledOptionsContainer>
        <Tooltip title={'Varukorgen'} placement='bottom' arrow={true}>
          <StyledOptionsIconContainer className='shopping-cart'>
            {articleCount ? (
              <StyledArticleCountChip>{articleCount}</StyledArticleCountChip>
            ) : null}
            <ShoppingCartOutlinedIcon
              className='upper-right-options__icon cart-icon'
              onClick={() => props.onClickCart()}
            />
          </StyledOptionsIconContainer>
        </Tooltip>
        <Tooltip
          title={`Byt till ${props.isLightMode ? 'mörkt tema' : 'ljust tema'}`}
          placement='bottom-start'
          arrow={true}
        >
          <StyledOptionsIconContainer>
            {props.isLightMode ? (
              <LightModeOutlinedIcon
                className='upper-right-options__icon'
                onClick={() => props.onClickThemeChange()}
              />
            ) : (
              <DarkModeOutlinedIcon
                className='upper-right-options__icon'
                onClick={() => props.onClickThemeChange()}
              />
            )}
          </StyledOptionsIconContainer>
        </Tooltip>
      </StyledOptionsContainer>
    </StyledHeader>
  );
};

export default Header;

import { useSelector } from 'react-redux';
import { RootState } from '../../GlobalState/store';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Tooltip from '@mui/material/Tooltip';

const HeaderGridContainer = styled.header<{ $isLightMode: boolean }>`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  background-color: ${({ theme }) => theme.color.headerFooterBg};
`;

const HeaderTitleContainer = styled.section`
  grid-row: 1 / 2;
  grid-column: 1 / 3;
  margin: 1.2rem 0 1.2rem 0;
  padding: 0;
`;

const HeaderTitle = styled.h1`
  width: fit-content;
  padding: 0;
  margin: 0;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.color.textPrimary};

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.color.iconHoverPrimary};
  }
`;

const OptionsContainer = styled.section`
  display: flex;
  grid-row: 1 / 2;
  grid-column: 3 / 4;
  justify-self: flex-end;
  padding: 1.2rem 0 1.2rem 0;
  gap: 1rem;
`;

const OptionsIconContainer = styled.div`
  position: relative;
  color: ${({ theme }) => theme.color.textPrimary};

  :hover {
    cursor: pointer;
    color: ${({ theme }) => theme.color.iconHoverPrimary};
  }
`;

const ProductCountChip = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 1.1rem;
  left: 0.9rem;
  color: ${({ theme }) => theme.color.textPrimary} !important;
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
  const navigate = useNavigate();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  const articleCount = cartItems.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  return (
    <HeaderGridContainer $isLightMode={props.isLightMode}>
      <HeaderTitleContainer>
        <HeaderTitle onClick={() => navigate('/nyheter')}>
          LE BOUTIQUE
        </HeaderTitle>
      </HeaderTitleContainer>
      <OptionsContainer>
        <Tooltip title={'Varukorgen'} placement='bottom' arrow={true}>
          <OptionsIconContainer onClick={() => props.onClickCart()}>
            {articleCount ? (
              <ProductCountChip>{articleCount}</ProductCountChip>
            ) : null}
            <ShoppingCartOutlinedIcon />
          </OptionsIconContainer>
        </Tooltip>
        <Tooltip
          title={`Byt till ${props.isLightMode ? 'mörkt tema' : 'ljust tema'}`}
          placement='bottom-start'
          arrow={true}
        >
          <OptionsIconContainer>
            {props.isLightMode ? (
              <LightModeOutlinedIcon
                onClick={() => props.onClickThemeChange()}
              />
            ) : (
              <DarkModeOutlinedIcon
                onClick={() => props.onClickThemeChange()}
              />
            )}
          </OptionsIconContainer>
        </Tooltip>
      </OptionsContainer>
    </HeaderGridContainer>
  );
};

export default Header;

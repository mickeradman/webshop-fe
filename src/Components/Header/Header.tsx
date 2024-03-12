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

  .upper-right-options__wrapper {
    display: flex;
    grid-row: 1;
    grid-column: 3;
    justify-self: flex-end;
    padding: 1rem 0 0 0;
    gap: 1rem;

    .upper-right-options__icon-container:hover {
      cursor: pointer;
    }

    .upper-right-options__icon {
      color: ${({ theme }) => theme.color.textPrimary};

      &:hover {
        color: ${({ theme }) => theme.color.iconHoverPrimary};
      }
    }
  }
`;

type HeaderProps = {
  isLightMode: boolean;
  onClickThemeChange: () => void;
  onClickCart: () => void;
};

const Header = (props: HeaderProps) => {
  return (
    <StyledHeader $isLightMode={props.isLightMode}>
      <h1>LE BOUTIQUE</h1>
      <section className='upper-right-options__wrapper'>
        <Tooltip title={'Varukorgen'} placement='bottom' arrow={true}>
          <div className='upper-right-options__icon-container'>
            <ShoppingCartOutlinedIcon
              className='upper-right-options__icon cart-icon'
              onClick={() => props.onClickCart()}
            />
          </div>
        </Tooltip>
        <Tooltip
          title={`Byt till ${props.isLightMode ? 'mörkt tema' : 'ljust tema'}`}
          placement='bottom-start'
          arrow={true}
        >
          <div className='upper-right-options__icon-container'>
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
          </div>
        </Tooltip>
      </section>
    </StyledHeader>
  );
};

export default Header;

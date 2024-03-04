import styled from 'styled-components';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

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
    font-size: 1.5rem;
  }

  .options-wrapper {
    grid-row: 1;
    grid-column: 3;
    justify-self: flex-end;
    padding: 1rem 1rem 0 0;

    :hover {
      cursor: pointer;
    }

    .change-theme-icon {
      color: ${(props) => (props.$isLightMode ? '#000' : '#FFF')};
    }
  }
`;

type Props = {
  isLightMode: boolean;
  onClick: () => void;
};

const Header = (props: Props) => {
  return (
    <StyledHeader $isLightMode={props.isLightMode}>
      <h1>LE BOUTIQUE</h1>
      <section className='options-wrapper'>
        <LightModeOutlinedIcon
          className='change-theme-icon'
          onClick={() => props.onClick()}
        />
      </section>
    </StyledHeader>
  );
};

export default Header;

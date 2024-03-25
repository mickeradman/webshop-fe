import styled from 'styled-components';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import { createGlobalStyle } from 'styled-components';

// Används för att sätta bakgrundsfärgen på body efter aktuellt tema
export const GlobalStyle = createGlobalStyle`
body {
      background: ${({ theme }) => theme.color.bgPrimary};
}
`;

// Grid-container för rubriker / underrubriker
export const TopGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
`;

// Nedanstående är för styling av "lägg till och ta bort-knappar" för produkter i varukorgen
export const AddRemoveIconsContainer = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  margin-right: 0.3rem;
  border: 1px solid ${({ theme }) => theme.color.borderPrimary};
  border-radius: 0.3rem;
  visibility: hidden;

  &.visible {
    visibility: visible;
  }

  &.no-border {
    border: none;
  }
`;

export const StyledRemoveIcon = styled(RemoveRoundedIcon)`
  /* width: 2rem !important;
  height: 2rem !important; */
  background-color: ${({ theme }) => theme.color.positiveGreen};
  border-radius: 0.3rem 0 0 0.3rem;

  &:hover {
    cursor: pointer;
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.textPrimary};
  font-size: 1.2rem;
  font-weight: bold;
`;

export const Quantity = styled.div`
  margin: 0;
  padding: 0 0.75rem;
`;

export const StyledAddIcon = styled(AddRoundedIcon)`
  /* width: 2rem !important;
  height: 2rem !important; */
  background-color: ${({ theme }) => theme.color.positiveGreen};
  border-radius: 0 0.3rem 0.3rem 0;

  &:hover {
    cursor: pointer;
  }
`;

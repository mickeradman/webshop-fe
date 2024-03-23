import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

// Används för att sätta bakgrundsfärgen på body efter aktuellt tema
export const GlobalStyle = createGlobalStyle`
body {
      background: ${({ theme }) => theme.color.bgPrimary};
}
`;

export const TopGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
`;

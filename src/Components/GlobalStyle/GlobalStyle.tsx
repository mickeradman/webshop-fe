import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    transition: background-color 500ms;

    body {
      background: ${({ theme }) => theme.color.bgPrimary};
  }
}
`;

export default GlobalStyle;

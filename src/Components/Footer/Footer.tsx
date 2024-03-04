import styled from 'styled-components';
import { theme } from '../../Theme/theme';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.color.headerFooterBg};
  color: ${({ theme }) => theme.color.textPrimary};
  padding: 2rem 0;

  p {
    font-size: ${theme.size.md};
  }
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${theme.size.md};
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledContainer>
        <p>Work with us</p>
        <p>Contact</p>
        <p>About</p>
      </StyledContainer>
    </StyledFooter>
  );
};

export default Footer;

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.bgPrimary};
  border-bottom: solid 1px ${({ theme }) => theme.color.standardDelimiter};
`;

const StyledList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 2rem;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StyledListItem = styled.li`
  font-size: 1.2rem;

  :hover {
    border-bottom: solid 0.1rem ${({ theme }) => theme.color.navLinkHover};
  }
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.color.textPrimary};
  text-decoration: none;
  padding: ${({ theme }) => `${theme.size.xs} 0.8rem`};

  &.active {
    border-bottom: solid 0.1rem ${({ theme }) => theme.color.navLinkActive};
  }
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledList>
        <StyledListItem>
          <StyledNavLink to='nyheter'>Nyheter</StyledNavLink>
        </StyledListItem>
        <StyledListItem>
          <StyledNavLink to='produkter'>Produkter</StyledNavLink>
        </StyledListItem>
        <StyledListItem>
          <StyledNavLink to='om-oss'>Om oss</StyledNavLink>
        </StyledListItem>
      </StyledList>
    </StyledNavbar>
  );
};

export default Navbar;

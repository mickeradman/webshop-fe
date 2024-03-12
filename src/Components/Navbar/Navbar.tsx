import styled from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';

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

  &.inactive {
    position: relative;

    ::before,
    ::after {
      content: '';
      position: absolute;
      top: 0rem;
      bottom: 0;
      left: 0rem;
      right: 0rem;
    }

    ::before {
      transform: scale(0, 1);
      transition: transform ease-out 250ms;
      border-bottom: solid 0.1rem ${({ theme }) => theme.color.navLinkHover};
    }

    :hover::before {
      transform: scale(1, 1);
    }
  }
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.color.textPrimary};
  text-decoration: none;
  padding: ${({ theme }) => `${theme.size.xs} 0rem`};

  &.active {
    border-bottom: solid 0.1rem ${({ theme }) => theme.color.navLinkActive};
  }
`;

const navLinks = [
  {
    label: 'Nyheter',
    to: '/nyheter',
  },
  {
    label: 'Produkter',
    to: '/produkter',
  },
  {
    label: 'Om oss',
    to: '/om-oss',
  },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <StyledNavbar>
      <StyledList>
        {navLinks.map((link) => (
          <StyledListItem
            key={link.to}
            className={location.pathname === link.to ? 'active' : 'inactive'}
          >
            <StyledNavLink to={link.to}>{link.label}</StyledNavLink>
          </StyledListItem>
        ))}
      </StyledList>
    </StyledNavbar>
  );
};

export default Navbar;

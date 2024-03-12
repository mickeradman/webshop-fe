import styled from 'styled-components';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const StyledLandingPage = styled.main`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.bgPrimary};
  padding: 2rem 0;

  @media screen and (max-width: 1440px) {
    padding: 2rem 1rem;
  }
`;

function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('nyheter');
  }, []);

  return (
    <StyledLandingPage>
      <Outlet />
    </StyledLandingPage>
  );
}

export default LandingPage;

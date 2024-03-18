import styled from 'styled-components';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { isValidPath } from '../../Utils/helperFunctions';

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
  const navPath = '/nyheter';

  // Navigera till senast besökta fliken om det inte gått mer än 12 timmar - annars navigeras man till Nyheter.
  useEffect(() => {
    const lastPageData = localStorage.getItem('lastPageData');
    const lastInteractionData = localStorage.getItem('lastInteractionData');

    if (
      lastPageData &&
      isValidPath(lastPageData) &&
      lastInteractionData &&
      Date.now() - parseInt(lastInteractionData) < 60 * 60 * 12 * 1000
    ) {
      localStorage.setItem('lastInteractionData', Date.now().toString());
      navigate(lastPageData);
    } else {
      localStorage.setItem('lastPageData', navPath);
      localStorage.setItem('lastInteractionData', Date.now().toString());
      navigate(navPath);
    }
  }, []);

  return (
    <StyledLandingPage>
      <Outlet />
    </StyledLandingPage>
  );
}

export default LandingPage;

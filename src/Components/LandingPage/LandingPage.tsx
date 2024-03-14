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
  const navPath = '/nyheter';

  // Navigera till senast besökta fliken om det inte gått mer än 12 timmar - annars navigeras man till Nyheter.
  useEffect(() => {
    const lastPageDataString = localStorage.getItem('lastPageData');
    const lastPageData = lastPageDataString
      ? JSON.parse(lastPageDataString)
      : null;

    if (
      lastPageData &&
      Date.now() - parseInt(lastPageData[1]) < 60 * 60 * 12 * 1000
    ) {
      navigate(lastPageData[0]);
    } else {
      localStorage.setItem(
        'lastPageData',
        JSON.stringify([navPath, Date.now().toString()])
      );
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

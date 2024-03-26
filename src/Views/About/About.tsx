import styled from 'styled-components';

const StyledGridContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${({ theme }) => theme.color.textPrimary};

  h2 {
    margin: 0 1rem 1rem;
  }
`;

const About = () => {
  localStorage.setItem('lastPageData', location.pathname);
  localStorage.setItem('lastInteractionData', Date.now().toString());

  return (
    <StyledGridContainer>
      <h2>Om oss</h2>
      <p>Vi är ett företag som sysslar med lite allt möjligt.</p>
    </StyledGridContainer>
  );
};

export default About;

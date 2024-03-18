import styled from 'styled-components';

const StyledTextContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${({ theme }) => theme.color.textPrimary};

  h2 {
    margin: 0 1rem 1rem;
  }

  p {
    padding: 0 1rem;
  }
`;

const News = () => {
  localStorage.setItem('lastPageData', location.pathname);
  localStorage.setItem('lastInteractionData', Date.now().toString());

  return (
    <StyledTextContainer>
      <h2>Våra senaste nyheter!</h2>
      <p>Här är massa nyheter. Blablablabla.</p>
    </StyledTextContainer>
  );
};

export default News;

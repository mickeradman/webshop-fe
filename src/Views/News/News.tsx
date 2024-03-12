import styled from 'styled-components';

const StyledTextContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid orange;
  color: ${({ theme }) => theme.color.textPrimary};

  h1 {
    margin: 0 1rem 1rem;
  }

  p {
    padding: 0 1rem;
  }
`;

const News = () => {
  return (
    <StyledTextContainer>
      <h1>Våra senaste nyheter!</h1>
      <p>Här är massa nyheter. Blablablabla.</p>
    </StyledTextContainer>
  );
};

export default News;

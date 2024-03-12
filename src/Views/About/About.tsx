import styled from 'styled-components';

const StyledGridContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid orange;
  color: ${({ theme }) => theme.color.textPrimary};

  h1 {
    margin: 0 1rem 1rem;
  }
`;

const About = () => {
  return (
    <StyledGridContainer>
      <h1>About</h1>
    </StyledGridContainer>
  );
};

export default About;

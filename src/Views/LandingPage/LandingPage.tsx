import styled from 'styled-components';
import Button from '../../Components/Button/Button';

const StyledLandingPage = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.color.bgPrimary};
    padding: 2rem 0;
`

function LandingPage() {
    return (
        <StyledLandingPage>
            <Button buttonText="Logga in" onClick={() => {<p>Hej</p>}}/>
        </StyledLandingPage>
    );
}

export default LandingPage;
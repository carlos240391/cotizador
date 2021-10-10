import BeatLoader from "react-spinners/BeatLoader";
import styled from 'styled-components';



const SpinerContainer = styled.section`
    width:100%;
    height:100vh;
    display:flex;
    justify-content: center;
    align-items: center;
`;


const SpinerPage = (props) => {
    return (  
        <>
        <SpinerContainer>
            <BeatLoader size={15} color={`var(--primary_color)`} />
        </SpinerContainer>
        </>
    );
}
 
export default SpinerPage;
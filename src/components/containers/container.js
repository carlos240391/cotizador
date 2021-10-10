import styled from 'styled-components';

export const GContainer = styled.section`
    margin:auto;
    width:100%;
    max-width:100%;
    padding:0px 10px;
    transition:all 0.5s;

    @media (min-width:576px){
        max-width:540px;
        padding:0px;
    }
    @media (min-width:768px){
        max-width:720px;
        padding:0px;
    }
    @media (min-width:992px){
        max-width:960px;
        padding:0px;
    }
    @media (min-width:1200px){
        max-width:1100px;
        padding:0px;
    }
    @media (min-width:1400px){
        max-width:1200px;
        padding:0px;
    }
`;



const Container = (props) => {
    return (  
        <>
        <GContainer>
            {props.children}
        </GContainer>
        </>
    );
}
 
export default Container;
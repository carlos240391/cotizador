import styled from "styled-components";

const ContainerNoproductStyles = styled.section`
    display:flex;
    flex-flow:column;
    align-items:center;
    justify-content: center;
    height:500px;
    
    i,h3{
        color:var(--softgray_color);
        margin-bottom:15px;
    }
    i{
        font-size:10rem;
        color:var(--warning_color);
    }
`;



const NoProducts = (props) => {
    return (  
        <>
        <ContainerNoproductStyles>
            <i className="fab fa-creative-commons-zero"></i>
            <h3>No encontramos ningun resultado</h3>
        </ContainerNoproductStyles>
        </>
    );
}
 
export default NoProducts;
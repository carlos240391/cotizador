import styled from 'styled-components';



export const ContainerTitleStyles = styled.section`
        .c-title,.c-subtitle{
            margin-bottom:15px;
        }
        .c-title{
        }
        .c-subtitle{
            color:var(--primary_color);
        }
`;



const Title = (props) => {
    return (  

        <>
        <ContainerTitleStyles>

            {props.title &&
                <h3 className="c-title" dangerouslySetInnerHTML={{
                    __html:`${props.title}`
                }}></h3>
            }
            {props.subtitle &&
                <p className="c-subtitle" dangerouslySetInnerHTML={{
                    __html:`${props.subtitle}`
                }}></p>
            }
        </ContainerTitleStyles>
        </>
    );
}
 
export default Title;
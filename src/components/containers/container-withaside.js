import styled from 'styled-components';



const SplitView = styled.section`
    display:flex;
    justify-content: space-between;
    align-items: flex-start;
    .c-body{
        width:${(props) => props.relation ? `calc(100% - ${props.relation}px)` : 'calc(100% - 700px)'};
    }
    .c-aside{
        width:${(props) => props.relation ? `${props.relation - 50}px` : '650px'};
    }
    @media (max-width:1200px){
        .c-body,.c-aside{
            width:calc(50% - 10px);
        }
    }
    @media (max-width:768px){
        flex-flow:${(props)=> props.reverse ? 'column-reverse' : 'column'};
        .c-body,.c-aside{
            width:calc(100%);
        }
    }
`


const ContainerWithaside = (props) => {
    return (  
        <>
        <SplitView relation={props.relation} reverse={props.reverse}>
            <section    className="c-body"
                        >{props.body}</section>
            <aside      className="c-aside"
                        >{props.aside}</aside>
        </SplitView>
        </>
    );
}
 
export default ContainerWithaside;
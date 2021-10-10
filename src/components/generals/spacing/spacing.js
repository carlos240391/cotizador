import styled from 'styled-components';




export const Spacing = styled.section`
    width:100%;
    height:${(props)=> props.space ? props.space : '50px'};
`;
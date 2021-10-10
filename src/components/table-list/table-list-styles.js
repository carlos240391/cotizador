import styled, { css } from 'styled-components';


export const ContainerTablelistStyles = styled.section`
    background:var(--primary_color);
    display:flex;
    padding:10px;
    margin-bottom:15px;
    border-radius:3px;
    .c-table-title{
        width:${(props) => `calc(100% / ${props.columns})`};
        display:flex;
        justify-content: center;
        h5{color:var(--light);}
    }
    .c-table-title:nth-child(1){
        justify-content:flex-start;
        
    }
    ${(props) => props.columns === 4 && css`
        .c-table-title:nth-child(4){
            justify-content:flex-start ;
        }
        .c-table-title:nth-child(4){
            justify-content:flex-start ;
        }
    `}
    ${(props) => props.columns === 5 && css`
        .c-table-title:nth-child(5){
            justify-content:center ;
        }
        .c-table-title:nth-child(5){
            justify-content:center ;
        }
    `}
    @media (max-width:700px){
        display:none;
    }

`;
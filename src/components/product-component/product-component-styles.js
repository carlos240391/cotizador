import styled from "styled-components";

export const ContainerProductStyles = styled.section`
    background:var(--light);
    padding:20px;
    border-radius:6px;
    -webkit-box-shadow: 0px 0px 15px 2px rgba(0,0,0,0.10); 
    box-shadow: 0px 0px 15px 2px rgba(0,0,0,0.10);

    .c-productview-title{
        margin-bottom:15px;
    }
    .c-productview-info{
        margin-bottom:20px;
        display:flex;
        align-items:center;
        h5{
            margin-right:30px;
            color:var(--primary_color);
            font-family:'Black';
        }
        h6{
            font-size:1rem;
        }
    }
    .c-productview-description{
    }
`;
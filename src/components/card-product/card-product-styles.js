import styled  from "styled-components";



export const ContainerCardProductStyles = styled.section`
    display:flex;
    min-height:100px;
    border-bottom:1px solid var(--softgray_color);

    .c-card-field{
        width:${(props)=> `calc(100% / ${props.columns})`};
        display:flex;
        justify-content: center;
        align-items: center;
        margin-bottom:15px;
        padding:10px;
        @media (max-width:700px){
            text-align: center;
            padding-left:30px;
            padding-right: 30px;
        }
        &__number{
            display:flex;
            flex-flow:column;
            align-items: center;
        }
    }
    .c-card-field:nth-child(1){
        justify-content: flex-start;
        h4{
            color:var(--primary_color)!important;
        }
    }
    .c-card-field:nth-child(4){
        align-items: center;
        border-right:none;
    }
    
    @media (max-width:700px){
        flex-flow:column;
        height:auto!important;
        border-bottom:1px solid gray;
        .c-card-field{
            width:100%;
            overflow:inherit;
            border:none;
            justify-content: center!important;
        }
        .c-card-field:nth-child(4){
            overflow:inherit;
        }
    }
    .c-card-field-btns{
        display:flex!important;
        justify-content: center;
        a,button{
            margin:0px 10px;
            i{
                color:var(--primary_color);
                font-size:1.5rem;
            }
        }
        button i{
            color:var(--error_color);
        }
    }

`;
import styled from "styled-components";

export const ContainerLoginFormStyles = styled.section`
        display:flex;
        flex-flow:column;
        width:100%;
        max-width:550px;
        .c-login-pass-input{

            position:relative;

            input{
                padding:10px 50px 10px 10px;
            }
            &__view{
                position:absolute;
                right:0px;
                top:0px;
                width:45px;
                height:46px;
                display:flex;
                justify-content: center;
                align-items:center;
                cursor:pointer;
            }
           
        }
`;
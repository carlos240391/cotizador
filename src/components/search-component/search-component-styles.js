import styled from 'styled-components';



export const ContainerSearchStyles = styled.section`
    display:flex;
    flex-flow:column;
    .c-search{
        display:flex;
        justify-content: space-between;
        
        &-input{
            width:calc(100% - 300px);
            position:relative;
            &__clean{
                position:absolute;
                right:0px;
                top:0px;
                width:45px;
                height:45px;
                outline:none;
                display:flex;
                justify-content: center;
                align-items: center;
                cursor:pointer;
                i{color:var(--error_color);}
            }
        }
        &-submit{
            width: 250px;
        }

        @media (max-width:700px){
            flex-flow:column;
            &-input,&-submit{
                width:100%;
                margin-bottom:15px;
            }
        }
    }
    .c-select-type{
        display:flex;
        align-items: center;
        margin-top:15px;
        &-radios{
            display:flex;
            @media (max-width:500px){
                flex-flow:column;
            }
        }
        p{
            margin:0px;
            @media (max-width:700px){
                margin-bottom:15px;
            }
        }
        input[type="radio"]{
            display:none;
        }
        input[type="radio"] + label{
            display:block;
            width:200px;
            height:45px;
            margin:0px 10px 0px 0px;
            display:flex;
            justify-content:center;
            align-items: center;
            cursor:pointer;
            border:1px solid var(--primary_color);
            border-radius:3px;
            color:var(--primary_color);
            i{
                color:var(--primary_color);
                margin-left:10px;
                display:none;
            }
            @media (max-width:700px){
                font-size:0.9rem;
            }
        }
        input[type="radio"]:checked + label{
            background:var(--primary_color);
            color:var(--light);
            i{
                color:var(--light);
                display:block;
            }
        }
        @media (max-width:700px){
            flex-flow:column;
            align-items: flex-start;
            input[type="radio"] + label{
                margin-bottom:15px;
            }
        }
    }

    @media (max-width:700px){
        flex-flow:column-reverse;
    }

`;
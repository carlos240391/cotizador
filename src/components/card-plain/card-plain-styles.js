import styled from "styled-components";

export const CardPlainStyles = styled.section`
    background:var(--light);
    height:270px;
    display:flex;
    flex-flow:column;
    align-items: center;
    justify-content:center;
    padding:20px;
    border-radius:6px;
    box-shadow: 0px 0px 15px 2px rgb(0 0 0 / 10%);
    position:relative;
    .c-cardplain-delete,
    .c-cardplain-edit,
    .c-cardplain-post{
        position:absolute;
        width:35px;
        height:35px;
        border-radius:100%;
        right:10px;
        background:gray;
        i{color:var(--light);}
    }
    .c-cardplain-edit{
        top:10px;
        background:var(--warning_color);
    }
    .c-cradplain-edit-close{
        background:var(--error_color);
    }
    .c-cardplain-delete,.c-cardplain-post{
        top:55px;
        background:var(--error_color);
    }
    .c-cardplain-post{
        background:var(--success_color);
    }

    .c-cardplain-title,
    .c-cardplain-days
    {
        margin-bottom:15px;
    }
    .c-cardplain-days{
        font-size:3rem;
        color:var(--primary_color);
    }
    .c-cardplain-quantity{
        width:100%;
        display:flex;
        justify-content: space-between;
        p{
            display:flex;
            flex-flow:column;
        }
    }
    input[type="number"]{
        border:none;
        border-bottom:1px solid var(--softgray_color);
        border-radius:0px;
        width:100px;
        text-align:center;
        font-size:3rem;
        margin-bottom:15px;
        padding:10px;
        :focus{
            border-bottom:1px solid var(--primary_color);
        }
    }
    input[type="number"]:nth-child(2),
    input[type="number"]:nth-child(3){
        font-size:var(--p_size);
    }
`;
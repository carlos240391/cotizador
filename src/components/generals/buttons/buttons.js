import styled from 'styled-components';



export const ButtonPrimary = styled.button`
        background:${(props)=> props.backColor ? props.backColor : 'var(--primary_color)'};
        width:100%;
        max-width:${(props)=> props.width ? props.width : '250px' };
        height:45px;
        border-radius:3px;
        color:var(--light);
        position:relative;
        overflow:hidden;
        :before{
            content:'';
            display:block;
            width:100%;
            height:100%;
            position:absolute;
            top:0px;
            left:0px;
            background:rgba(0,0,0,0);
            pointer-events:none;
            mix-blend-mode:soft-light;
        }
        :hover:before{
            background:rgba(0,0,0,0.5);
        }
`;


export const LinkButton = styled.section`
    background:pink;
    display:flex;
    width:100%;
    max-width:${(props)=> props.width ? props.width : '250px'};
    height:${(props)=> props.height ? props.height : '45px'};
    border-radius:3px;
    overflow:hidden;
    a{
        background:${(props)=> props.backColor ? props.backColor : 'var(--primary_color)'};
        width:100%;
        height:100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position:relative;
        color:var(--light);
        i{color:var(--light);}
        :before{
            content:'';
            display:block;
            width:100%;
            height:100%;
            position:absolute;
            top:0px;
            left:0px;
            background:rgba(0,0,0,0);
            pointer-events:none;
            mix-blend-mode:soft-light;
        }
        :hover:before{
            background:rgba(0,0,0,0.5);
        }
    }
`;
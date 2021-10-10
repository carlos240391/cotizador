import styled from "styled-components";

export const NavBarStyles = styled.nav`
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding:20px 0px 20px 0px;
    .c-navbar-home{
        border-radius:100%;
        a{
            i{
                font-size:1.6rem;
                
            }
        }
    }
    .c-navbar-loginbtn{
        a{
            text-transform:uppercase;
        }
        i{
            margin-left:10px;
            color:var(--primary_color);
            font-size:1.2rem;
        }
    }
    .c-navbar-loginbtn-login{
        display:flex;
        flex-flow:row wrap;
        &__inner{
            display:flex;
            align-items:center;
            margin-right:15px;
            text-transform: uppercase;
            cursor:pointer;
            &-close{
                cursor:pointer;
                width:25px;
                height:24px;
                i{
                    color:var(--primary_color);
                    font-size:1.2rem;
                }
            }
            i{margin-left:5px;color:var(--primary_color);}
        }
    }
`;
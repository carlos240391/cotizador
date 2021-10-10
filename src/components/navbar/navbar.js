import React from "react";
import { Link } from "react-router-dom";
import Container from "../containers/container";
import { LinkButton } from "../generals/buttons/buttons";
import { NavBarStyles } from "./navbar-styles";

const Navbar = (props) => {

    const loginVerify = localStorage.getItem('user');
    
   const closeSesion = () =>{
       localStorage.removeItem('user');
       window.location.href = '/';
   }

    return ( 

        <>
        <Container>
            <NavBarStyles>
                
                <LinkButton className="c-navbar-home"
                            width="50px"
                            height="50px"
                            > 
                    <Link to="/"><i className="fas fa-home"></i></Link>
                </LinkButton>
                
                
                {loginVerify ?


                    <section className="c-navbar-loginbtn-login">

                        <section className="c-navbar-loginbtn-login__inner">
                            <Link to="/admin/products">Productos</Link>
                            <i className="fas fa-tags"></i>
                        </section>

                        <section className="c-navbar-loginbtn-login__inner">
                            <Link to="/admin/plains">Plazos</Link>
                            <i className="fas fa-calendar-check"></i>
                        </section >

                        <section className="c-navbar-loginbtn-login__inner">
                            <div className="c-navbar-loginbtn-login__inner-close" onClick={closeSesion}><i className="fas fa-power-off"></i></div>
                        </section>
                    </section>


                    : 

                    <section className="c-navbar-loginbtn">
                        <Link to="/login">Iniciar sesión</Link>
                        <i className="fas fa-sign-in-alt"></i>
                    </section>
                }
                
            </NavBarStyles>
        </Container>
        </>
     );
}
 
export default Navbar;
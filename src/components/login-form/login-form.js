import React from "react";
import { Redirect } from "react-router";
import Swal from "sweetalert2";
import { PostMethod } from "../../utils/peticiones/request";
import { FieldInput } from "../containers/forms";
import { ButtonPrimary } from "../generals/buttons/buttons";
import { Spacing } from "../generals/spacing/spacing";
import SpinerWait from "../generals/spiner/spiner-wait";
import Title from "../generals/titles/title";
import { ContainerLoginFormStyles } from "./login-form-styles";


const LoginForm = (props) => {
   
    const loginVerify = localStorage.getItem('user');

    const [view, setView] = React.useState(false);
    const [load, setLoad] = React.useState(false);
    const [error, setError] = React.useState('');
    const [logindata, setLoginData] = React.useState({identifier:'',password:''})

    const getFields = (e) => setLoginData({ ...logindata, [e.target.name]:e.target.value })
    

    const submitLogin = (e) =>{
        e.preventDefault();
        setLoad(true);
        if(logindata.identifier === ''){
            Swal.fire({
                icon: 'error',
                text: `El campo de email no puede estar vacío`,
                confirmButtonColor:'var(--primary_color)',
                confirmButtonText:'Aceptar'
              })
              setLoad(false);
            return;
        }else if(logindata.password === ''){
            Swal.fire({
                icon: 'error',
                text: `El campo de contraseña no puede estar vacío`,
                confirmButtonColor:'var(--primary_color)',
                confirmButtonText:'Aceptar'
            })
            setLoad(false);
            return;
        }

        const postLogin = async() =>{
            const loginres = await PostMethod(logindata,'auth/local');
            if(loginres.ok){
                setLoad(false);
                const data = loginres.response.data;
                localStorage.setItem('user', JSON.stringify(data));
                window.location.href = '/admin/products';
            }else{
                setLoad(false);
                setError('El correo o la contraseña son incorrectos, vuelve a intentarlo');
            }
        }
        postLogin();
        
    }
    if(loginVerify){
        return <Redirect to="/admin"/>
    }

    return (  
        <>
       
        <ContainerLoginFormStyles>
            
            <Title 
                title="Inicia sesión"
                subtitle="Inicia sesión para acceder al panel de administración"
            />
            <Spacing space="30px"/>

            <section style={{padding:'10px 0px', color:'var(--error_color)'}}>{error}</section>

            <section>
            <form onSubmit={submitLogin}>
                    <FieldInput>
                        <label>Email:</label>
                        <input  type="text"
                                placeholder="Escribe tu correo"
                                name="identifier"
                                onChange={getFields}
                                />
                    </FieldInput>

                    <FieldInput>
                        <label>Contraseña:</label>
                        <section className="c-login-pass-input">
                            <input  type={view ? "text" : "password" }
                                    placeholder="Escribe tu contraseña"
                                    name="password"
                                    onChange={getFields}
                                    />
                            <i  onClick={()=> setView(!view)}
                                className={view ? "fas fa-eye-slash c-login-pass-input__view" : "fas fa-eye c-login-pass-input__view"}></i>
                        </section>
                    </FieldInput>
                    <FieldInput>
                        <Spacing space="10px"/>
                        {load ? 
                            <SpinerWait/>
                            :
                            <ButtonPrimary width="100%">Iniciar sesión</ButtonPrimary>
                        }
                    </FieldInput>

            </form>
            </section>
        </ContainerLoginFormStyles>
        </>
    );
}
 
export default LoginForm;
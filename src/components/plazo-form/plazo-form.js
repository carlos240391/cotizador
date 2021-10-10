import React from "react";
import Swal from "sweetalert2";
import { PostMethod } from "../../utils/peticiones/request";
import { FieldInput } from "../containers/forms";
import { ButtonPrimary } from "../generals/buttons/buttons";
import SpinerWait from "../generals/spiner/spiner-wait";
import Title from "../generals/titles/title";
import { PlazoFormStyles } from "./plazo-form-styles";

const initialState = {
    semanas:0,
    tasa_puntual:0,
    tasa_normal:0
}

const PlazoForm = (props) => {

    const loginVerify = localStorage.getItem('user');
    const userToken = JSON.parse(loginVerify).jwt;


    const [load, setLoad] = React.useState(false);
    const [newplazo, setNewplazo] = React.useState(initialState)

    const getFields = (e)=>{
        setNewplazo({...newplazo, [e.target.name]:e.target.value})
    }


    const submit = (e) =>{
        e.preventDefault();
        setLoad(true);
        if(newplazo.semanas < 1){
            Swal.fire({
                icon: 'error',
                text: `El campo de semanas debe ser mayor a 0`,
                confirmButtonColor:'var(--primary_color)',
                confirmButtonText:'Aceptar'
            })
            setLoad(false);
            return;
        }
        if(newplazo.tasa_normal === 0 || newplazo.tasa_puntual === 0){
            Swal.fire({
                icon: 'error',
                text: `La tasa puntual y la tasa normal no pueden ser igual a 0.`,
                confirmButtonColor:'var(--primary_color)',
                confirmButtonText:'Aceptar'
            })
            setLoad(false);
            return;
        }
        if(newplazo.tasa_normal < newplazo.tasa_puntual){
            Swal.fire({
                icon: 'error',
                text: `La tasa puntual no puede mayor a la tasa normal.`,
                confirmButtonColor:'var(--primary_color)',
                confirmButtonText:'Aceptar'
            })
            setLoad(false);
            return;
        }

        const postPlaza = async() =>{
            const resPlaza = await PostMethod(newplazo, 'plazos', {Authorization:`Bearer ${userToken}`});
            if(resPlaza.ok){
                setLoad(false);
                Swal.fire({
                    icon: 'success',
                    text: `Plazo creado`,
                    confirmButtonColor:'var(--primary_color)',
                    confirmButtonText:'Aceptar'
                })
                props.getPlazos();
                setNewplazo(initialState);
            }else{
                setLoad(false);
            }
        }
        postPlaza();
    }


    return (  
        <>
        <PlazoFormStyles>
            <Title title="Crear nuevo plazo"/>
            <form onSubmit={submit}>
                <section className="c-plazo-splifield">
                    <FieldInput>
                        <label>Semanas:</label>
                        <input  type="number" name="semanas"
                                onChange={getFields}
                               
                                value={newplazo.semanas}
                                />
                    </FieldInput>

                    <FieldInput>
                        <label>Tasa normal</label>
                        <input  type="number" name="tasa_normal"
                                onChange={getFields}
                                step="any"
                                value={newplazo.tasa_normal}
                                />
                    </FieldInput>
                </section>

                <section className="c-plazo-splifield">
                    <FieldInput>
                        <label>Tasa puntual</label>
                        <input  type="number" name="tasa_puntual"
                                onChange={getFields}
                                step="any"
                                value={newplazo.tasa_puntual}
                                />
                    </FieldInput>

                    <FieldInput>
                        {load ?
                            <SpinerWait/>
                            :
                            <ButtonPrimary>Nuevo plazo</ButtonPrimary>
                        }
                    </FieldInput>
                </section>

            </form>
        </PlazoFormStyles>
        </>
    );  
}
 
export default PlazoForm;
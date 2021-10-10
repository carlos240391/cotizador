import React from "react";
import { PutMethod } from "../../utils/peticiones/request";
import { ButtonPrimary } from "../generals/buttons/buttons";
import SpinerWait from "../generals/spiner/spiner-wait";
import { CardPlainStyles } from "./card-plain-styles";

const CardPlain = (props) => {

    const loginVerify = localStorage.getItem('user');
    const userToken = JSON.parse(loginVerify).jwt;

    const [viewEdit, setViewEdit] = React.useState(false);
    const [send, setSend] = React.useState(false);

    const {deletePlazo} = props;
    const {semanas,tasa_normal,tasa_puntual,id} = props.plazo;

    let initialState = {
        semanas:semanas,
        tasa_normal:tasa_normal,
        tasa_puntual:tasa_puntual
    }
    const [newplazo, setNewPlazo] = React.useState(initialState);
    const [stateinitial, setStateinitial] = React.useState(initialState);

    const getFields = (e) =>{
        setNewPlazo({
            ...newplazo, [e.target.name]:e.target.value
        })
    }

    const submit = (e) =>{
        e.preventDefault();
        setSend(true);

        const putItem = async()=>{
            const resEdit = await PutMethod(newplazo, `plazos/${id}`,{Authorization:`Bearer ${userToken}`})
            if(resEdit.ok){
                setViewEdit(false);
                setSend(false);
                setStateinitial(newplazo)
            }else{
                setSend(false);
            }
        }
        putItem()
    }

    return (  
        <>
        <CardPlainStyles>
            {!viewEdit &&
                <ButtonPrimary  className="c-cardplain-delete"
                                onClick={()=>{
                                    deletePlazo(id);
                                }}
                                ><i className="fas fa-trash"></i></ButtonPrimary>
            }
            {send ? null :
                <>
                {viewEdit &&
                    <ButtonPrimary  className="c-cardplain-post"
                                    onClick={submit}
                                    ><i className="far fa-check-circle"></i></ButtonPrimary>
                }
                
                <ButtonPrimary  className={viewEdit ? "c-cardplain-edit c-cradplain-edit-close" : "c-cardplain-edit"}
                                onClick={()=> {
                                    setViewEdit(!viewEdit);
                                }}
                                ><i className={viewEdit ? "far fa-times-circle" : "fas fa-edit"}></i></ButtonPrimary>
                </>
            }

            {send ?<SpinerWait/>:
            <>
                <h6 className="c-cardplain-title">Plazo a:</h6>

                {viewEdit ?
                    <input  type="number" value={newplazo.semanas}
                            name="semanas"
                            onChange={getFields}
                            />
                    :
                    <h3 className="c-cardplain-days">{stateinitial.semanas}</h3>
                }
                <h6 className="c-cardplain-title">Semanas</h6>
                <section className="c-cardplain-quantity">
                <p> 
                    <span>Tasa Normal:</span>
                    {viewEdit ?
                        <input  type="number" value={newplazo.tasa_normal}
                                name="tasa_normal"
                                onChange={getFields}
                                />
                        :
                        <span>{stateinitial.tasa_normal}</span>
                    }
                </p>
                <p>
                    <span>Tasa Puntual:</span>
                    {viewEdit ?
                        <input  type="number" value={newplazo.tasa_puntual}
                                name="tasa_puntual"
                                onChange={getFields}
                                />
                        :
                        <span>{stateinitial.tasa_puntual}</span>
                    }
                </p>
            </section>
            </>
            }
        </CardPlainStyles>

        </>
    );
}
 
export default CardPlain;
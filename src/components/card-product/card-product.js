import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { DeleteMethod } from "../../utils/peticiones/request";
import { ContainerCardProductStyles } from "./card-product-styles";



const CardProduct = (props) => {

    const {name,price,SKU,description,url,id} = props.product;
    const loginVerify = localStorage.getItem('user');
    const userToken = loginVerify ? JSON.parse(loginVerify).jwt : null;


    const [normal, setNormal] = React.useState(0)
    const [puntual, setPuntual] = React.useState(0)

    const getPay = (e) =>{
        if(e.target.value !== 'null'){
            const plazo = JSON.parse(e.target.value);
            const semanas = plazo.semanas;
            const normal = plazo.tasa_normal;
            const puntual = plazo.tasa_puntual;
            const operationNormal = ((price * normal) + price) / semanas;
            const operationPuntual = ((price * puntual) + puntual) / semanas;
            setNormal(operationNormal.toFixed(2));
            setPuntual(operationPuntual.toFixed(2));
        }
    }
    
  
    const deleteThisProduct = (e) =>{
        e.preventDefault();
        Swal.fire({
            icon: 'warning',
            text: '¿Estas seguro de que deseas borrar este producto?',
            confirmButtonColor:'var(--error_color)',
            denyButtonColor:'var(--success_color)',
            showDenyButton: true,
            confirmButtonText: 'Si',
            denyButtonText: 'No',
        })
        .then((result)=>{
            console.log(result);
            if(result.value){
                const deleteThisRegister = async () =>{
                    const resultDelete = await DeleteMethod(`products/${id}`, {Authorization:`Bearer ${userToken}`})
                    console.log(resultDelete);
                    if(resultDelete.ok){
                        window.location.reload();
                    }
                }
                deleteThisRegister();
            }
        })
    }

    return (  
        <>
        
        <ContainerCardProductStyles columns={
            window.location.pathname === '/' ? 5 : 4
        }>
            <section className="c-card-field"><Link to={`/product/${url}`}><h4>{name}</h4><p>{SKU}</p></Link></section>
            <section className="c-card-field"><h5>${price}</h5></section>
            
            {/* <section className="c-card-field"><p>{SKU}</p></section> */}
            {window.location.pathname === '/' ? 
                <section className="c-card-field">
                    <select onChange={getPay}>
                        <option defaultValue value="null">Seleciona un plazo</option>
                        {props.plazos.map((plazo, i) =>{
                            return(
                                <option value={JSON.stringify(plazo)} key={i}>
                                    {plazo.semanas} semanas
                                </option>
                            )
                        })}
                    </select>
                </section>
                : 
                null
            }
            {window.location.pathname === '/' ?
                <section className="c-card-field">
                    <p className="c-card-field__number"><span>Pago semanal de:</span><span>${normal}</span></p>
                </section>
                :
                loginVerify  &&
                    <section className="c-card-field">
                        <p>{description.split(" ").splice(0, 10).join(' ')} ...</p> 
                    </section>
            }
            {window.location.pathname === '/' ?
                <section className="c-card-field">
                    <p className="c-card-field__number"><span>Pago semanal de:</span><span>${puntual}</span></p>
                </section>
                :
                loginVerify  &&
                    <section className="c-card-field c-card-field-btns">
                        <Link to={`/admin/products/${url}`}><i className="fas fa-edit"></i></Link>
                        <button onClick={deleteThisProduct}><i className="fas fa-trash"></i></button>
                    </section>
            }
        </ContainerCardProductStyles>
        
        </>
    );
}
 
export default CardProduct;
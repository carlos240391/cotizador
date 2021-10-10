import React from "react";
import Swal from "sweetalert2";
import { generateUUID } from "../../utils/functions/functions";
import { GetMethod, PostMethod, PutMethod } from "../../utils/peticiones/request";
import { FieldInput } from "../containers/forms";
import { ButtonPrimary } from "../generals/buttons/buttons";
import { Spacing } from "../generals/spacing/spacing";
import SpinerWait from "../generals/spiner/spiner-wait";
import Title from "../generals/titles/title";
import NoProducts from "../no-products/no-products";
import { ContainerCreateEditStyles } from "./create-edit-product-component-styles";



const CreateEditProductComponent = (props) => {

    const param = props.match ?  props.match.params.url : null;



    const loginVerify = localStorage.getItem('user');
    const userToken = JSON.parse(loginVerify).jwt;
    const [load, setLoad] = React.useState(false);
    const [error, setError] = React.useState(false);
   


    const [thisproduct, setThisproduct] = React.useState({
        name:'',
        description:'',
        price:0,
        SKU:`GSSKU-${generateUUID()}-${generateUUID()}`,
        url:''
    })
    const getProduct = React.useCallback(()=>{
        const getThisProduct = async()=>{
            const thisproduct = await GetMethod(`products?url_contains=${param}`);
            console.log(thisproduct);
            if(thisproduct.ok){
                if(thisproduct.response.data.length === 0){
                    setError(true);
                    return;
                }else{
                    const data = thisproduct.response.data[0]
                    setThisproduct({
                        ...thisproduct,
                        name:data.name,
                        description:data.description,
                        price:data.price,
                        SKU:data.SKU,
                        id:data.id
                    })
                }
            }else{

            }
        }
        getThisProduct()    
    },[param])

    React.useEffect(()=>{
        if(param){
            getProduct();
        }
    },[param, getProduct])


    const getFields = (e) =>{
        setThisproduct({...thisproduct, [e.target.name]:e.target.value});
    }
    const submit = (e) =>{
        e.preventDefault();
        setLoad(true);
        if(thisproduct.name === ''){
            Swal.fire({
                icon: 'error',
                text: `El campo nombre no puede estar vacío`,
                confirmButtonColor:'var(--primary_color)',
                confirmButtonText:'Aceptar'
            })
            setLoad(false);
            return;
        }
        if(thisproduct.description === ''){
            Swal.fire({
                icon: 'error',
                text: `El campo descripción no puede estar vacío`,
                confirmButtonColor:'var(--primary_color)',
                confirmButtonText:'Aceptar'
            })
            setLoad(false);
            return;
        }
        if(thisproduct.price <= 0){
            Swal.fire({
                icon: 'error',
                text: `El campo precio debe ser mayor a 0`,
                confirmButtonColor:'var(--primary_color)',
                confirmButtonText:'Aceptar'
            })
            setLoad(false);
            return;
        }

        const createUrl = `${thisproduct.name.split(' ').join('-')}-${thisproduct.SKU}`;

        const newProduct = {
            name:thisproduct.name,
            description:thisproduct.description,
            price: thisproduct.price,
            SKU:thisproduct.SKU,
            url:createUrl.replace(/[&\/\\#,+()$~%./'":*?<>{}]/g, ''),
        }
        const postProduct = async() =>{
        
                const postRes = param ? await PutMethod(newProduct, `products/${thisproduct.id}`, {Authorization:`Bearer ${userToken}`}) : await PostMethod(newProduct, 'products', {Authorization:`Bearer ${userToken}`})
            
            // const postRes = 
            if(postRes.ok){
                setLoad(false);
                Swal.fire({
                    icon: 'success',
                    text: param ? 'Producto editado' : 'Producto creado',
                    confirmButtonColor:'var(--primary_color)',
                    confirmButtonText:'Aceptar'
                })
                setTimeout(()=>{window.location.href = '/admin/products'},1000)
                
            }else{
                Swal.fire({
                    icon: 'error',
                    text: `Algo salio mal`,
                    confirmButtonColor:'var(--primary_color)',
                    confirmButtonText:'Aceptar'
                })
                setLoad(false);
            }
        }
        postProduct();
    }

  

    return (  
        <>
        {error ?
            <NoProducts/>
            :
        <>
        <Spacing/>
        <ContainerCreateEditStyles>
        <Title
            title={param ? `Editar producto` : "Crear un nuevo producto"}
            subtitle={
                param ? 'Llena los campos del formulario para editar este producto'
                : "Llena los campos del formulario para crear un nuevo producto en el stock"
            }
        />
        {param && <Title subtitle={`Editar producto con SKU: <mark>${thisproduct.SKU}</mark>`} />}
        <form onSubmit={submit}>
            <FieldInput>
                <label>Nombre del producto</label>
                <input  type="text" name="name"
                        onChange={getFields}
                        value={thisproduct.name}
                        placeholder="Escribe el nombre del producto"
                        />
            </FieldInput>

            <FieldInput>
                <label>Descripción del producto</label>
                <textarea   name="description"
                            onChange={getFields}
                            value={thisproduct.description}
                            placeholder="Agrega una descripción"
                            ></textarea>
            </FieldInput>

            <FieldInput>
                <label>Precio del producto</label>
                <input  type="number" name="price"
                        onChange={getFields}
                        value={thisproduct.price}
                        placeholder="precio"
                        />
            </FieldInput>
            <FieldInput>
                {load ?
                    <SpinerWait/>
                    : 
                    <ButtonPrimary width="100%">
                        {param ? 'Editar producto' : 'Crear producto'}
                    </ButtonPrimary>
                }
            </FieldInput>
            
        </form>
        </ContainerCreateEditStyles>
        </>
        }
        </>
    );
}
 
export default CreateEditProductComponent;
import React from "react";
import Swal from "sweetalert2";
import { DeleteMethod, GetMethod } from "../../utils/peticiones/request";
import CardPlain from "../card-plain/card-plain";
import ContainerWithaside from "../containers/container-withaside";
import { Spacing } from "../generals/spacing/spacing";
import Spiner from "../generals/spiner/spiner";
import Title from "../generals/titles/title";
import NoProducts from "../no-products/no-products";
import PlazoForm from "../plazo-form/plazo-form";
import { ListPlazosStyles } from "./list-plazos-styles";




const ListPlazos = (props) => {

    const loginVerify = localStorage.getItem('user');
    const userToken = JSON.parse(loginVerify).jwt;

    const [plazos, setPlazos] = React.useState([]);
    const [load, setLoad] = React.useState(true);


    const getPlazos = React.useCallback(()=>{
        setLoad(true);
        const requestPlazos = async() =>{
            const resPlazos = await GetMethod('plazos?_sort=createdAt:DESC');
            if(resPlazos.ok){
                setPlazos(resPlazos.response.data);
                setLoad(false)
            }else{
                setLoad(false)
            }
        }
        requestPlazos();
    },[])


    React.useEffect(()=>{getPlazos()},[getPlazos]);


    const deletePlazo = (id) =>{
        Swal.fire({
            icon: 'warning',
            text: '¿Estas seguro de que deseas borrar este plazo?',
            confirmButtonColor:'var(--error_color)',
            denyButtonColor:'var(--success_color)',
            showDenyButton: true,
            confirmButtonText: 'Si',
            denyButtonText: 'No',
        })
        .then((result)=>{
            if(result.value){
                const deleteThisRegister = async () =>{
                    const resultDelete = await DeleteMethod(`plazos/${id}`, {Authorization:`Bearer ${userToken}`})
                    if(resultDelete.ok){
                        getPlazos()
                        Swal.fire({
                            icon: 'success',
                            text: 'Se elimino correctamente',
                            confirmButtonColor:'var(--error_color)',
                        })
                    }
                }
                deleteThisRegister();
                
            }
        })
    }

    return ( 
        <>
            <Title title="Lista de plazos" subtitle="Aquí puedes crear, editar y eliminar plazos para pagos en productos."/>
            <Title subtitle="Solo <mark>usuarios autenticados</mark> tiene acceso a esta vista."/>
            

            {load ?
                <Spiner/>
                :
                <>
                <Spacing/>
                <ContainerWithaside
                    reverse
                    relation={400}
                    aside={<PlazoForm getPlazos={getPlazos}/>}
                    body={
                        plazos.length === 0 
                        ?
                            <NoProducts/>
                        :
                            <ListPlazosStyles>
                                {plazos.map((plazo,i)=>{
                                    return(
                                        <CardPlain plazo={plazo} key={i} deletePlazo={deletePlazo}/>
                                        )
                                })}

                                {plazos.length === 1 && <>
                                    <div></div>
                                    <div></div>
                                    <div></div></>}
                                {plazos.length === 2 && <>
                                    <div></div>
                                    <div></div></>}
                                {plazos.length === 3 && <>
                                    <div></div> </>}
                            
                            </ListPlazosStyles>
                    }
                />
                
                

                
                
                </>
            }
        </>
     );
}
 
export default ListPlazos;
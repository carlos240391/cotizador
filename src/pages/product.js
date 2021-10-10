import React from "react";
import Container from "../components/containers/container";
import ContainerWithaside from "../components/containers/container-withaside";
import Cotizador from "../components/cotizador-component/cotizador";
import { Spacing } from "../components/generals/spacing/spacing";
import Spiner from "../components/generals/spiner/spiner";
import ProductComponent from "../components/product-component/product-component";
import { GetMethod } from "../utils/peticiones/request";

const Product = (props) => {

    const thisUrl = props.match.params.url;
    const [product, setProduct] = React.useState({});
    const [load, setLoad] = React.useState(true);


    const getProduct = React.useCallback(()=>{
        const getThisProduct = async () =>{
            const res = await GetMethod(`products?url_containss=${thisUrl}`);
            console.log(res.ok);
            if(res.ok){
                setProduct(res.response.data[0]);
                setLoad(false);
            }else{
                setLoad(false);
            }
        }
        getThisProduct();
    },[thisUrl])

    React.useEffect(()=>{ getProduct() },[getProduct]);

    if(load){
        return <Spiner/>
    }
    return (  
        <>
        <Spacing/>
        <Container>
        <ContainerWithaside
            body={<ProductComponent product={product}/>}
            aside={<Cotizador/>}
        />
        </Container>
        </>
    );
}
 
export default Product;
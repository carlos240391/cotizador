import React from "react";
import Container from "../components/containers/container";
import { Spacing } from "../components/generals/spacing/spacing";
import Spiner from "../components/generals/spiner/spiner";
import Title from "../components/generals/titles/title";
import NoProducts from "../components/no-products/no-products";
import SearchComponent from "../components/search-component/search-component";
import TableLIst from "../components/table-list/table-list";
import { GetMethod } from "../utils/peticiones/request";

const Home = (props) => {

    const [products, setProducts] = React.useState([]);
    const [plazos, setPlazos] = React.useState([]);
    const [load, setLoad] = React.useState(true);
    const [query, setQuery] = React.useState('');
    const [resultstring, setResultString] = React.useState(false)

    const getAllProducts = React.useCallback(()=>{
        const getProducts = async() =>{
            const res = await GetMethod('products?_sort=createdAt:DESC');
            if(res.ok){
                setProducts(res.response.data);
                setLoad(false);
            }else{
                setLoad(false);
            }
        }
        getProducts();
    },[])

    const getAllPlazos = React.useCallback(()=>{
        const getPlazos= async() =>{
            const res = await GetMethod('plazos?_sort=createdAt:DESC');
            if(res.ok){
                setPlazos(res.response.data);
            }else{
            }
        }
        getPlazos();
    },[])

    React.useEffect(()=>{getAllProducts() },[getAllProducts])
    React.useEffect(()=>{getAllPlazos() },[getAllPlazos])

    const cleanInput = () => getAllProducts();

    return (  
        <>
        <Container>
            <Spacing space="30px"/>

            <Title
                title="Inicia una busqueda"
                subtitle="Permitenos ayudarte, ingresa un nombre de producto o SKU para realizar una busqueda."
            />
            <SearchComponent    setProducts={setProducts}
                                query={query} setQuery={setQuery}
                                setResultString={setResultString}
                                cleanInput={cleanInput}
                                setLoad={setLoad}
                                />
            <Spacing/>


            <Title
                title="Productos"
                subtitle="Si no encuentras el producto que buscas, te recomendamos usar el buscador."
            />

            {resultstring &&
                <Title
                    subtitle={`Resultados de la busqueda: ${query}`}
                />
            }
            
            <Spacing space="30px"/>

            {load ? 
                <Spiner/>
                : 
                products.length === 0 ?
                    <NoProducts/>
                    :
                    <TableLIst products={products} plazos={plazos} {...props} />
            }
            
        </Container>
        <Spacing space="100px"/>
        </>
    );
}
 
export default Home;
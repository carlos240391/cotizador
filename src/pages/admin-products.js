import React from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import Container from "../components/containers/container";
import { LinkButton } from "../components/generals/buttons/buttons";
import { Spacing } from "../components/generals/spacing/spacing";
import Spiner from "../components/generals/spiner/spiner";
import Title from "../components/generals/titles/title";
import HeaderUser from "../components/header-user/header-user";
import NoProducts from "../components/no-products/no-products";
import SearchComponent from "../components/search-component/search-component";
import TableLIst from "../components/table-list/table-list";
import { GetMethod } from "../utils/peticiones/request";


const AdminProducts = (props) => {

    const loginVerify = localStorage.getItem('user');
    const user = loginVerify ? JSON.parse(loginVerify).user : null;
   
    const [products, setProducts] = React.useState([]);
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

    React.useEffect(()=>{getAllProducts() },[getAllProducts])

    const cleanInput = () => getAllProducts();

    if(!loginVerify){
        return <Redirect to="/"/>
    }

    return (  
        <>

            <Spacing space="30px"/>
            <Container>
                <HeaderUser username={user.username}
                            message='En esta sección podras editar, eliminar y crear nuevos productos'
                            />
               
                <Title
                    title="Productos en el stock"
                    subtitle={resultstring && `Resultados de la busqueda: ${query}`}
                />
                <SearchComponent    setProducts={setProducts}
                                    query={query} setQuery={setQuery}
                                    setResultString={setResultString}
                                    cleanInput={cleanInput}
                                    setLoad={setLoad}
                                    />
                <Spacing/>
                <section >
                    <LinkButton backColor="var(--success_color)">
                        <Link to="/admin/products/new">Crear nuevo producto <i className="far fa-plus-square" style={{marginLeft:'10px'}}></i></Link>
                    </LinkButton>
                </section>
                {load ?
                    <Spiner/>
                    :
                    products.length === 0 ?
                        <NoProducts/>
                        :
                        <>
                            
                            <Spacing/>
                            <TableLIst products={products} {...props}/>
                        </>
                }
            </Container>
        
        </>
    );
}
 
export default AdminProducts;
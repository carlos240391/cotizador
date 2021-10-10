import React from "react";
import { GetMethod } from "../../utils/peticiones/request";
import { ButtonPrimary } from "../generals/buttons/buttons";
import { ContainerSearchStyles } from "./search-component-styles";
import Swal from 'sweetalert2';
import Title from "../generals/titles/title";



const SearchComponent = (props) => {

    const {query, setQuery, setResultString,setLoad} = props;
    const [type, setType] = React.useState('name_contains');
    const [viewclean, setViewclean] = React.useState(false);
    const {setProducts} = props;


    const onSearch = (e) =>{
        setQuery(e.target.value)
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        if(query === ''){
            Swal.fire({
                icon: 'error',
                text: 'Este campo no puede estar vacío',
                confirmButtonColor:'var(--primary_color)',
                confirmButtonText:'Aceptar'
              })
            return;
        }
        const getQuery = async () =>{
            setLoad(true);
            const res = await GetMethod(`products?${type}=${query}`);
            if(res.ok){
                setProducts(res.response.data);
                setResultString(true);
                setViewclean(true);
                setLoad(false);
            }else{
                setLoad(false);
            }
        }
        getQuery();
    }

    const selectType = (e) =>{  
        setType(e.target.value)
    }
    const cleanInput = (e) =>{
        e.preventDefault();
        props.cleanInput();
        setViewclean(false);
        setResultString(false);
        setQuery('');
    }



    return (  
        <>
        <ContainerSearchStyles>
            
            
            <form onSubmit={onSubmit} className="c-search">
                <div className="c-search-input">
                    <input  type="text"
                            name="search"
                            onChange={onSearch}
                            placeholder="Ingresa un nombre o SKU para realizar una busqueda"
                            value={query}
                            />
                    {viewclean &&
                        <div onClick={cleanInput} className="c-search-input__clean"><i className="fas fa-window-close"></i></div>
                    }
                </div>
                
                <div className="c-search-submit">
                    <ButtonPrimary>Buscar</ButtonPrimary>
                </div>
                        
            </form>
            
            <div className="c-select-type">
                <div className="c-select-type-radios">
                    <input  type="radio"
                            name="type-search"
                            value="name_contains"
                            id="search-type-name"
                            checked={type === 'name_contains'}
                            onChange={selectType}
                            />
                    <label htmlFor="search-type-name">Buscar por nombre <i className="fas fa-check-circle"></i></label>

    
                    <input  type="radio"
                            name="type-search"
                            value="SKU_contains"
                            id="search-type-sku"
                            checked={type === 'SKU_contains'}
                            onChange={selectType}
                            />
                    <label htmlFor="search-type-sku">Buscar por SKU <i className="fas fa-check-circle"></i></label>
                </div>
                <Title
                    subtitle={type === 'name_contains' ? 'Realizando busqueda por <mark>nombre</mark>' : 'Realizando busqueda por <mark>SKU</mark>'}
                />
                
            </div>
  
        </ContainerSearchStyles>
        </>
    );
}
 
export default SearchComponent;
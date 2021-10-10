import CardProduct from "../card-product/card-product";
import { ContainerTablelistStyles } from "./table-list-styles";


const TableLIst = (props) => {
    const {products,plazos} = props
    return (  
        <>
            <ContainerTablelistStyles columns={
                window.location.pathname === '/' ? 5 : 4
            }>
                <section className="c-table-title"><h5>Nombre</h5></section>
                <section className="c-table-title"><h5>Precio</h5></section>
                {window.location.pathname === '/' ?
                    <section className="c-table-title"><h5>Plazo</h5></section>
                    :
                    <section className="c-table-title"><h5>Descripción</h5></section>
                }
                {window.location.pathname === '/' ?
                    <section className="c-table-title"><h5>Pago normal</h5></section>
                    :
                    null
                }
                {window.location.pathname === '/' ?
                    <section className="c-table-title"><h5>Pago puntual</h5></section>
                    :
                    null
                }
            </ContainerTablelistStyles>
            {products.map((thisProduct)=>{
                return(
                    <section key={thisProduct.SKU}>
                        <CardProduct product={thisProduct} plazos={plazos}/>
                    </section>
                )
            })}
         
        </>
    );
}
 
export default TableLIst;
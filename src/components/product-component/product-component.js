import { ContainerProductStyles } from "./product-component-styles";

const ProductComponent = (props) => {

    const {SKU,name,description,price} = props.product;


    return ( 
        <>
        <ContainerProductStyles>
            <h3 className="c-productview-title">{name}</h3>
            <section className="c-productview-info">
                <h5>Costo: ${price}</h5>
                <h6>SKU: {SKU}</h6>
            </section>
            <p className="c-productview-description">{description}</p>
        </ContainerProductStyles>
        </>
     );
}
 
export default ProductComponent;
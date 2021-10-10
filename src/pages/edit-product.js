import { Redirect } from "react-router";
import Container from "../components/containers/container";
import CreateEditProductComponent from "../components/create-edit-product-component/create-edit-product-component";


const EditProduct = (props) => {

    const loginVerify = localStorage.getItem('user');

    if(!loginVerify){
        return <Redirect to="/"/>
    }


    return (  
        <>
        <Container>
            <CreateEditProductComponent {...props}/>
        </Container>
        </>
    );
}
 
export default EditProduct;
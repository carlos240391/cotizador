import { Redirect } from "react-router";
import Container from "../components/containers/container";
import { Spacing } from "../components/generals/spacing/spacing";
import ListPlazos from "../components/list-plazos/list-plazos";

const AdminPlains = (props) => {

    const loginVerify = localStorage.getItem('user');


    if(!loginVerify){
        return <Redirect to="/"/>
    }


    return (  
        <>
        <Container>
            <Spacing/>
            <ListPlazos/>
        </Container>
        </>
    );
}
 
export default AdminPlains;
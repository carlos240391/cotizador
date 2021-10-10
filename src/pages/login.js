import Container from "../components/containers/container";
import { ContainerCenter } from "../components/containers/container-center";
import LoginForm from "../components/login-form/login-form";




const Login = (props) => {
    return (  
        <>
        <Container>
        <ContainerCenter>
                <LoginForm {...props}/>
        </ContainerCenter>
        </Container>
        </>
    );
}
 
export default Login;
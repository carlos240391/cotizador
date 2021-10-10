import Title from "../generals/titles/title";
import { HeaderUserStyles } from "./header-user-styles";


const HeaderUser = (props) => {
    return (  
        <>
        <HeaderUserStyles>

            <section className="user-icon">
                 <i className="fas fa-id-card-alt"></i>
            </section>
            <Title
                title={`Bienvenido ${props.username}`}
                subtitle={props.message}
                />
        </HeaderUserStyles>
        </>
    );
}
 
export default HeaderUser;
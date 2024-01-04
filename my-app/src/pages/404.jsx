import Header from "../components/header/header"
import { Link } from "react-router-dom";
import Footer from "../components/footer/footer";

const Error =()=>{
    return(
        <div>
        <Header></Header>
        <div>
            <p className="error">404</p>
            <div className="error_text">
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/">Retourner sur la page d'Accueil</Link>
            </div>
        </div>
        <Footer></Footer>
        </div>
    )
}

export default Error
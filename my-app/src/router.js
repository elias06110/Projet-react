import { Link } from "react-router-dom";
import Logo from "./images/LOGO.png";

const RouterComponent = () => {
  return (
    <div>
      <nav className="header">
        <img src={Logo} alt="Logo Kasa"></img>
        <div>
          <ul >
            <li>
              <Link to="./" className="links-header">Accueil</Link>
            </li>
            <li>
              <Link to="./about" className="links-header">A propos</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default RouterComponent;

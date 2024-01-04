import { Link } from "react-router-dom";
import Logo from "../../images/LOGO.png";


const Header = () => {
  return (
    <div>
      <nav className="header">
      <Link to="/" ><img src={Logo} alt="Logo Kasa"></img></Link>
        <div >
          <ul className="header_list">
            <li>
              <Link to="/" className="header_links">Accueil</Link>
            </li>
            <li>
              <Link to="/about" className="header_links">A propos</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    
  );
};

export default Header;

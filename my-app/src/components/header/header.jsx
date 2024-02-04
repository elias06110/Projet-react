import { Link, useLocation } from "react-router-dom";
import Logo from "../../images/LOGO.png";

const Header = () => {
  const location = useLocation();

  return (
    <div>
      <nav className="header">
        <Link to="/">
          <img className="kasa" src={Logo} alt="Logo Kasa" />
        </Link>
        <div>
          <ul className="header_list">
            <li>
              <Link
                to="/"
                className={`header_links ${location.pathname === '/' ? 'active' : ''}`}
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`header_links ${location.pathname === '/about' ? 'active' : ''}`}
              >
                A propos
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
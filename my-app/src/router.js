import { Link } from 'react-router-dom';
import Logo from './images/LOGO.png'


  const RouterComponent = ()=>{
    return (
    <div>
      <nav>
        <ul>
          <img src={Logo} alt='Logo Kasa'></img>
          <li><Link to="./">Accueil</Link></li>
          <li><Link to="./about">A propos</Link></li>
        </ul>
      </nav>
    </div>
    )
  }

  export default RouterComponent
  

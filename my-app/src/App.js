import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/logement">Logement</Link></li>
        </ul>
      </nav>
    </>
  );
}

export default App;

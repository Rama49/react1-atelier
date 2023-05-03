import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/Connect">Connecter</Link>
          </li>
          <li>
            <Link to="/Inscrit">Inscrit</Link>
          </li>
          <li>
            <Link to="/contact">Mot de passe oublier</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;

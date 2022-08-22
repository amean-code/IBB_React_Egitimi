import { Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Anasayfa</Link>
          </li>
          <li>
            <Link to="/duyuru">Duyurular</Link>
          </li>
          <li>
            <Link to="../admin">Admin</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Header;
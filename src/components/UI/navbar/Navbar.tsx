import { NavLink } from 'react-router-dom';
import './Navbar.css';
function Navbar(props: { name: string }) {
  console.log('Navbar');

  return (
    <div className="navbar">
      <div className="container navbar__container">
        <div className="navbar__links">
          <NavLink className="link" to="/">
            Main
          </NavLink>
          <NavLink className="link" to="/about">
            About us
          </NavLink>
        </div>
        <p className="page_name">{props.name}</p>
      </div>
      <div className="line_container">
        <hr />
      </div>
    </div>
  );
}

export default Navbar;

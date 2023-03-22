import { Outlet } from 'react-router-dom';
import { AppNavbar } from '../UI/navbar/Navbar';

function Layout() {
  const Nav = AppNavbar();
  return (
    <div>
      <Nav />
      <Outlet />
      <footer>2023</footer>
    </div>
  );
}

export default Layout;

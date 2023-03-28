import { Outlet } from 'react-router-dom';
import { AppNavbar } from '../UI/navbar/Navbar';

function Layout() {
  const Nav = AppNavbar();
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
}

export default Layout;

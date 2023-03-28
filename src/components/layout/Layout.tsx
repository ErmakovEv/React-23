import { Outlet } from 'react-router-dom';
import { Navigation } from '../UI/navbar/Navbar';

function Layout() {
  // const Nav = AppNavbar();
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
}

export default Layout;

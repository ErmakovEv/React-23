import { Outlet } from 'react-router-dom';
import Navbar from '../UI/navbar/Navbar';

function Layout() {
  return (
    <div>
      <Outlet />
      <footer>2023</footer>
    </div>
  );
}

export default Layout;

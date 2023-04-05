import { Outlet } from 'react-router-dom';
import { Navigation } from '../UI/navbar/Navbar';

function Layout() {
  return (
    <div className="App">
      <Navigation />
      <Outlet />
      <footer className="App-footer"></footer>
    </div>
  );
}

export default Layout;

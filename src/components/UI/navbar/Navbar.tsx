import * as React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const path = {
  '/': 'Main',
  '/about': 'About',
  '/form': 'Form',
  '/new-form': 'NewForm',
};

const Navigation = () => {
  const page = useLocation().pathname;

  return (
    <div className="App-header">
      <div className="wrapper navbar__container">
        <div className="navbar__links">
          <NavLink className="link" to="/">
            Main
          </NavLink>
          <NavLink className="link" to="/about">
            About us
          </NavLink>
          <NavLink className="link" to="/new-form">
            NewForm
          </NavLink>
        </div>
        <p className="page_name">{path[page as keyof typeof path] + '!'}</p>
      </div>
      <div className="line_container">
        <hr />
      </div>
    </div>
  );
};

export { Navigation };

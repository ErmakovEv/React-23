import * as React from 'react';
import { Component } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

type NavProps = Record<string, never>;

type NavState = Record<string, never>;

const path = {
  '/': 'Main',
  '/about': 'About',
};

export const AppNavbar = () => {
  const page = useLocation().pathname;
  return class Nav extends Component<NavProps, NavState> {
    render() {
      return <Navbar name={path[page as keyof typeof path] + '!'} />;
    }
  };
};

export function Navbar(props: { name: string }) {
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
